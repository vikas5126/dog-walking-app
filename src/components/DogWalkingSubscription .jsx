import React, { useState } from "react";

const DogWalkingSubscription = () => {
  const [duration, setDuration] = useState("20 mins");
  const [walks, setWalks] = useState("Uno");
  const [days, setDays] = useState("7 days");
  const [billing, setBilling] = useState("Monthly");

  const calculatePrice = () => {
    let base = 299;
    if (duration === "40 mins") base += 100;
    if (walks === "Duo") base *= 2;
    if (days === "Monday-Saturday") base -= 50;
    if (billing === "Weekly") return base * 4;
    if (billing === "Quarterly") return base * 3 * 0.9; // 10% discount
    return base * 4.5; // Monthly
  };

  const formattedPrice = `₹ ${calculatePrice().toFixed(2)}/-`;

  return (
    <div className="w-full mx-auto p-8 rounded-2xl border shadow-md bg-white">
      <h2 className="text-[2rem] font-bold mb-2 text-center">
        Dog Walking Basic Subscription
      </h2>
      <p className="text-purple-700 font-semibold text-lg mb-4 pl-8">Priced at {formattedPrice}</p>

      {/* Walk Duration */}
      <div className="mb-3">
        <label className="block font-medium mb-1">Walk Duration</label>
        <div className="flex gap-2">
          {["20 mins", "40 mins"].map(opt => (
            <button
              key={opt}
              onClick={() => setDuration(opt)}
              className={`px-3 py-1 border rounded-full ${
                duration === opt ? "bg-orange-100 border-orange-400" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Number of Walks */}
      <div className="mb-3">
        <label className="block font-medium mb-1">Number of Walks</label>
        <div className="flex gap-2">
          <button
            onClick={() => setWalks("Uno")}
            className={`px-3 py-1 border rounded-full ${
              walks === "Uno" ? "bg-orange-100 border-orange-400" : ""
            }`}
          >
            Uno – Once a Day
          </button>
          <button
            onClick={() => setWalks("Duo")}
            className={`px-3 py-1 border rounded-full ${
              walks === "Duo" ? "bg-orange-100 border-orange-400" : ""
            }`}
          >
            Duo – Twice a Day
          </button>
        </div>
      </div>

      {/* Number of Days */}
      <div className="mb-3">
        <label className="block font-medium mb-1">Number of Days</label>
        <div className="flex gap-2">
          <button
            onClick={() => setDays("7 days")}
            className={`px-3 py-1 border rounded-full ${
              days === "7 days" ? "bg-orange-100 border-orange-400" : ""
            }`}
          >
            7 days a week (Inclusive of Sunday)
          </button>
          <button
            onClick={() => setDays("Monday-Saturday")}
            className={`px-3 py-1 border rounded-full ${
              days === "Monday-Saturday" ? "bg-orange-100 border-orange-400" : ""
            }`}
          >
            Monday – Saturday
          </button>
        </div>
      </div>

      {/* Billing Cycle */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Billing Cycle</label>
        <div className="flex gap-2">
          {["Weekly", "Monthly", "Quarterly"].map(opt => (
            <button
              key={opt}
              onClick={() => setBilling(opt)}
              className={`px-3 py-1 border rounded-full ${
                billing === opt ? "bg-orange-100 border-orange-400" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <button className="bg-purple-700 text-white font-semibold py-2 w-full rounded-xl">
        Book Now
      </button>
    </div>
  );
};

export default DogWalkingSubscription;
