import DateRangePicker from "../../components/molecules/DateRangePicker";
import RequestRefundDashboard from "./components/RequestRefundDashboard";

const Request = () => {
  return (
    <div className=" flex flex-col h-screen ">
      {/* Title Section */}
      <section className="py-2 px-16 mt-3">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Refund and Cancellation</h2>
            <p className="text-[12px] text-[#727372]">
              Refund and cancellation requests appear here
            </p>
          </div>
          <DateRangePicker />
        </div>
      </section>

      <section className="mt-6">
        <RequestRefundDashboard />
      </section>
    </div>
  );
};

export default Request;
