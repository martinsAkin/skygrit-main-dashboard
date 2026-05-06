import {
  RefundCancellationTrends,
  DashboardAnalytics,
  ActivityItems,
  PendingApproval,
} from "./components/DashboardComponents";
import DateRangePicker from "../../components/molecules/DateRangePicker";

const Dashboard = () => {
  return (
    <div className="w-[100%] px-4 ">
      <div className="flex justify-between items-center py-2 px-12 ">
        <ul className="list-none">
          <li className="text-2xl font-semibold">Dashboard</li>
          <li className="text-[13.5px] text-[#727372] font-medium">
            Overview of airline refund and cancellation activities
          </li>
        </ul>

        <DateRangePicker />
      </div>

      <div className="flex gap-6 mt-6">
        <DashboardAnalytics
          analyticHeading="Total Refunds"
          value="1,284"
          icon="assets/Container.png"
          metrics="+12.5%"
          duration="month"
          metricColor="green"
        />
        <DashboardAnalytics
          analyticHeading="Pending Approvals"
          value="42"
          icon="assets/Container (1).png"
          metrics="+8.2%"
          duration="week"
          metricColor="red"
        />
        <DashboardAnalytics
          analyticHeading="Total Cancellations"
          value="876"
          icon="assets/Container (2).png"
          metrics="+23.1%"
          duration="month"
          metricColor="red"
        />
        <DashboardAnalytics
          analyticHeading="Settled Amount"
          value="#534,000"
          icon="assets/Container (3).png"
          metrics="+5.3%"
          duration="month"
          metricColor="green"
        />
      </div>

      <div className="flex gap-[2rem] mt-6">
        <RefundCancellationTrends />

        <section className="w-[35%] border-1 border-gray-300 p-4 rounded-md">
          <div className="flex justify-between">
            <span>Recent Activity</span>
            <span className="text-blue-600 hover:underline hover:cursor-pointer">
              View all
            </span>
          </div>

          <div>
            <ActivityItems
              icon="assets/calender.png"
              heading="New cancellation request"
              text="Customer requested cancellation for booking #AC3872"
              timeStamp="1"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="Refund policy updated"
              text="Admin user modified the refund policy for economy class"
              timeStamp="3"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="New cancellation request"
              text="Customer requested cancellation for booking #AC3872"
              timeStamp="4"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="Refund policy updated"
              text="Admin user modified the refund policy for economy class"
              timeStamp="5"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="New cancellation request"
              text="Customer requested cancellation for booking #AC3872"
              timeStamp="6"
            />
          </div>
        </section>
      </div>
      <PendingApproval />
    </div>
  );
};

export default Dashboard;
