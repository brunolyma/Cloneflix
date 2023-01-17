import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useSubscription } from "../hooks/useSubscription";
import { goToBillingPortal } from "../lib/stripe";
import { Spinner } from "./Spinner";

export function Membership() {
  const { user } = useAuth();
  const subscription = useSubscription(user);
  const [isBllingLoading, setIsBillingLoading] = useState(false);

  const manageSubscription = () => {
    if (subscription) {
      setIsBillingLoading(true);
      goToBillingPortal();
    }
  };

  return (
    <div className="accountBox">
      <div className=" space-y-2 py-4">
        <h4 className=" text-lg text-gray">Membership & Billing</h4>
        <button
          disabled={!subscription || isBllingLoading}
          className="h-10 w-3/5 whitespace-nowrap bg-slate-300 py-2 text-sm font-medium text-black shadow-md hover:bg-slate-200 md:w-4/5"
          onClick={manageSubscription}
        >
          {isBllingLoading ? <Spinner /> : "Cancel Membership"}
        </button>
      </div>

      <div className="col-span-3">
        <div className=" flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div>
            <p className=" font-medium">{user?.email}</p>
            <p className=" text-gray">Password: ***********</p>
          </div>
          <div className=" md:text-right">
            <p className="membershipLink">Change email</p>
            <p className="membershipLink">Change password</p>
          </div>
        </div>

        <div className=" flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0">
          <div>
            <p>
              {subscription?.cancel_at_period_end
                ? "Your membership will end soon"
                : "Your next billing date is "}{" "}
              {subscription?.current_period_end}
            </p>
          </div>
          <div className="md:text-right">
            <p className="membershipLink">Manage payment info</p>
            <p className="membershipLink">Add backup payment method</p>
            <p className="membershipLink">Billing Details</p>
            <p className="membershipLink">Change billing day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
