import {
  CommunicationSection,
  RequestDetailsTable,
  RequestHistoryTable,
  ReviewHeading,
  VerifyClaim,
} from "../components/ReviewRequestComponents";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { Refund } from "../../../interface";
import axios from "axios";
import prevPage from "/assets/Icons/move-left.png";

const RequestReview = () => {
  const { id } = useParams();

  const [data, setData] = useState<Refund[]>([]);

  useEffect(() => {
    axios
      .get("/data/RequestRefundData.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const userData = data.find((req) => req.id === id);
  if (!userData)
    return <p className="text-red-600 text-2xl">Request not found!</p>;

  return (
    <div className="w-full ">
      <div className="flex justify-between my-2.5">
        <ReviewHeading reqNo={userData.id} reqDate={userData.reqDate} />

        <button className="text-blue-950 bg-white rounded-md px-3.5 py-0 text-sm cursor-pointer">
          <NavLink to="/requests/dashboard">
            <img
              src={prevPage}
              alt="go back"
              className="inline-block mr-2 h-4 w-4"
            />
            back
          </NavLink>
        </button>
      </div>

      <div className="flex flex-row">
        <RequestDetailsTable
          customerName={userData.customerName}
          customerEmail={userData.customerEmail}
          bookingRefNo={userData.bookingRefNo}
          reqType={userData.reqType}
          TicketSale={userData.TicketSale}
          flightDate={userData.flightDate}
          ticketClass={userData.ticketClass}
          reason={userData.reason}
          route={userData.route}
          reqId={userData.id}
          approvedBy={userData.approvedBy}
          ticketType={userData.ticketType}
          approvedOn={userData.approvedOn}
          baseFare={userData.baseFare}
          taxGovtFee={userData.taxGovtFee}
          FuelSurcharge={userData.FuelSurcharge}
          serviceFee={userData.serviceFee}
          ancillary={userData.ancillary}
          total={userData.total}
          refundAmount={userData.refundAmount}
          bankName={userData.bankName}
          accountNumber={userData.accountNumber}
          reviewStatus={userData.reviewStatus}
        />

        <div className="flex flex-col gap-4">
          <RequestHistoryTable />
          <CommunicationSection />
          <VerifyClaim
            verifier="Isaiah Victoria"
            approver="-"
            verifiedOn={{
              dateVerified: "23/05/2022",
              timeVerified: "05:18:45",
              dateApproved: "23/05/2022",
              timeApproved: "05:18:45",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestReview;
