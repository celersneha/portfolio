import WakaTimeStats from "@/components/dashboard/server/WakaTimeStats";
import ContributionsServer from "@/components/dashboard/server/ContributionsServer";
import DashboardClientWrapper from "@/components/dashboard/client/DashboardClientWrapper";

// export const dynamic = "force-dynamic";
export default function Dashboard() {
  return (
    <DashboardClientWrapper>
      <div className="min-h-screen p-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

          <div className="mb-8">
            <WakaTimeStats />
          </div>

          <div className="mb-8">
            <ContributionsServer />
          </div>
        </div>
      </div>
    </DashboardClientWrapper>
  );
}
