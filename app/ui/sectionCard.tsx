// components/SectionCard.tsx

import Card from "./card";

export default function SectionCard() {
  return (
    <section className=" py-16 bg-gray-50">
      <div className="grid gap-8 md:grid-cols-3">
        <Card
          image="/directeur.jpg"
          title="Administrateur"
          description="Suivez en temps réel la scolarité de vos enfants : accédez facilement aux contenus pédagogiques, aux résultats et aux informations essentielles."
          buttonText="Commencer"
        />
        <Card
          image="/teacher.jpg"
          title="Enseignant"
          description="Accédez rapidement aux contenus pédagogiques, suivez les progrès de vos élèves et facilitez la communication avec les parents pour une meilleure réussite scolaire."
          buttonText="Découvrir"
        />
        <Card
          image="/maman-child.jpg"
          title="Parent"
          description="Suivez de près la scolarité de vos enfants : résultats, devoirs, messages et événements importants, le tout à portée de main pour rester impliqué au quotidien."
          buttonText="Commencer"
        />
      </div>
    </section>
  );
}
