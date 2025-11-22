import WakaTimeStats from "@/components/dashboard/server/WakaTimeStats";
import ContributionsServer from "@/components/dashboard/server/ContributionsServer";
import DashboardClientWrapper from "@/components/dashboard/client/DashboardClientWrapper";

export default function Dashboard() {
  return (
    <DashboardClientWrapper>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
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
