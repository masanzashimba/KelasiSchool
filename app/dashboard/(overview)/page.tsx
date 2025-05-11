import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestLessons, fetchDashboardStats } from "@/app/lib/data";
import LatestLessons from "../../ui/dashboard/latest-lessons";
import { Suspense } from "react";
import { LessonChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  const latestLessons = await fetchLatestLessons();
  const { totalLessons, usersByRole } = await fetchDashboardStats();

  return (
    <main>
      {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1> */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Total des cours" value={totalLessons} type="lessons" />

        {usersByRole.map((stat) => (
          <Card
            key={stat.role}
            title={`Utilisateurs (${stat.role})`}
            value={stat._count.role}
            type={stat.role}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue} /> */}
        <Suspense fallback={<LessonChartSkeleton />}>
          <LatestLessons latestLessons={latestLessons} />
        </Suspense>
        {/* <LatestLessons latestLessons={latestLessons} /> */}
      </div>
    </main>
  );
}
