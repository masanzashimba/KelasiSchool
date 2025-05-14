import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser, updateUser, deleteUser } from "@/app/users/lib/queries";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("CLERK_WEBHOOK_SECRET manquant");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Erreur -- aucune entête svix", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Erreur de vérification webhook:", err);
    return new Response("Erreur de vérification", { status: 400 });
  }

  const eventType = evt.type;

  try {
    if (eventType === "user.created") {
      const { id, first_name, last_name, email_addresses, phone_numbers } =
        evt.data;

      await createUser({
        id,
        firstName: first_name,
        lastName: last_name,
        email: email_addresses[0]?.email_address,
        phone: phone_numbers[0]?.phone_number,
        role: "STUDENT", // Rôle par défaut
        gender: "OTHER",
        birthDate: new Date(),
        passwordHash: "", // Non utilisé avec Clerk
      });
    }

    if (eventType === "user.updated") {
      const { id, first_name, last_name, email_addresses, phone_numbers } =
        evt.data;

      await updateUser(id, {
        firstName: first_name,
        lastName: last_name,
        email: email_addresses[0]?.email_address,
        phone: phone_numbers[0]?.phone_number,
      });
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      await deleteUser(id);
    }

    return new Response("", { status: 200 });
  } catch (err) {
    console.error("Erreur de traitement webhook:", err);
    return new Response("Erreur de traitement", { status: 500 });
  }
}
