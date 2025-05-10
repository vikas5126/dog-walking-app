import React, { useState } from "react";

const DogWalkingSubscription = ({selectedOption}) => {
  const [duration, setDuration] = useState("20 mins");
  const [walks, setWalks] = useState("Uno");
  const [days, setDays] = useState("7 days");
  const [billing, setBilling] = useState("Monthly");
  // const [selectedOption, setSelectedOption] = useState("Subscription");

  // const toggleOption = () => {
  //   setSelectedOption((prevOption) =>
  //     prevOption === "Subscription" ? "One Walk" : "Subscription"
  //   );
  // };

  const calculatePrice = () => {
    // let base = 700;
    // if (duration === "40 mins") base += 600;
    // if (walks === "Duo") base *= 2;
    // if (days === "Monday-Saturday") base -= 200;
    // if() {
    //   return 6499; // 10% discount for 7 days
    // }
    // if (billing === "Weekly") return base * 4;
    // if (billing === "Quarterly") return base * 3 * 0.9; // 10% discount
    // return Math.floor(base * 4.583); // Monthly
    if(days === "7 days" && walks === "Duo" && billing === "Monthly" && duration === "20 mins") {
      return {"price" : 6499, "mrp": 6999}; // 10% discount for 7 days
    }
    if(days === "7 days" && walks === "Duo" && billing === "Weekly" && duration === "20 mins") {
      return {"price" : 6499, "mrp": 6999}; // 10% discount for 7 days
    }
    if(days === "7 days" && walks === "Duo" && billing === "Quarterly" && duration === "20 mins") {
      return {"price" : 19099, "mrp": 20999}; // 10% discount for 7 days
    }

    if(days === "7 days" && walks != "Duo" && billing === "Monthly" && duration === "20 mins") {
      return {"price" : 4199, "mrp": 4699}; ; // 10% discount for 7 days
    }
    if(days === "7 days" && walks != "Duo" && billing === "Weekly" && duration === "20 mins") {
      return {"price" : 4199, "mrp": 4699}; ; // 10% discount for 7 days
    }
    if(days === "7 days" && walks != "Duo" && billing === "Quarterly" && duration === "20 mins") {
      return {"price" : 12099, "mrp": 14099}; ; // 10% discount for 7 days
    }


    if(days === "6 days" && walks === "Duo" && billing === "Monthly" && duration === "20 mins") {
      return {"price" : 5499, "mrp": 5999}; // 10% discount for 7 days
    }
    if(days === "6 days" && walks === "Duo" && billing === "Weekly" && duration === "20 mins") {
      return {"price" : 6499, "mrp": 6999}; // 10% discount for 7 days
    }
    if(days === "6 days" && walks === "Duo" && billing === "Quarterly" && duration === "20 mins") {
      return {"price" : 16099, "mrp": 17999}; // 10% discount for 7 days
    }

    if(days === "6 days" && walks != "Duo" && billing === "Monthly" && duration === "20 mins") {
      return {"price" : 2999, "mrp": 3499}; ; // 10% discount for 7 days
    }
    if(days === "6 days" && walks != "Duo" && billing === "Weekly" && duration === "20 mins") {
      return {"price" : 4199, "mrp": 4699}; ; // 10% discount for 7 days
    }
    if(days === "6 days" && walks != "Duo" && billing === "Quarterly" && duration === "20 mins") {
      return {"price" : 9099, "mrp": 10499}; ; // 10% discount for 7 days
    }






    // 30 mins 
    if(days === "7 days" && walks === "Duo" && billing === "Monthly" && duration === "30 mins") {
      return {"price" : 8799, "mrp": 9299}; // 10% discount for 7 days
    }
    if(days === "7 days" && walks === "Duo" && billing === "Weekly" && duration === "30 mins") {
      return {"price" : 6499, "mrp": 6999}; // 10% discount for 7 days
    }
    if(days === "7 days" && walks === "Duo" && billing === "Quarterly" && duration === "30 mins") {
      return {"price" : 22999, "mrp": 24999}; // 10% discount for 7 days
    }

    if(days === "7 days" && walks != "Duo" && billing === "Monthly" && duration === "30 mins") {
      return {"price" : 4799, "mrp": 5399}; ; // 10% discount for 7 days
    }
    if(days === "7 days" && walks != "Duo" && billing === "Weekly" && duration === "30 mins") {
      return {"price" : 4199, "mrp": 4699}; ; // 10% discount for 7 days
    }
    if(days === "7 days" && walks != "Duo" && billing === "Quarterly" && duration === "30 mins") {
      return {"price" : 11499, "mrp": 13199}; ; // 10% discount for 7 days
    }


    if(days === "6 days" && walks === "Duo" && billing === "Monthly" && duration === "30 mins") {
      return {"price" : 6499, "mrp": 6999}; // 10% discount for 7 days
    }
    if(days === "6 days" && walks === "Duo" && billing === "Weekly" && duration === "30 mins") {
      return {"price" : 6499, "mrp": 6999}; // 10% discount for 7 days
    }
    if(days === "6 days" && walks === "Duo" && billing === "Quarterly" && duration === "30 mins") {
      return {"price" : 17499, "mrp": 18999}; // 10% discount for 7 days
    }

    if(days === "6 days" && walks != "Duo" && billing === "Monthly" && duration === "30 mins") {
      return {"price" : 3899, "mrp": 3399}; ; // 10% discount for 7 days
    }
    if(days === "6 days" && walks != "Duo" && billing === "Weekly" && duration === "30 mins") {
      return {"price" : 4199, "mrp": 4699}; ; // 10% discount for 7 days
    }
    if(days === "6 days" && walks != "Duo" && billing === "Quarterly" && duration === "30 mins") {
      return {"price" : 10999, "mrp": 12499}; ; // 10% discount for 7 days
    }
  };

  const formattedPrice = `₹${calculatePrice().price}/-`;
  const mrp = `₹${calculatePrice().mrp}/-`

  return (
    <div className="w-full mx-auto p-8 rounded-2xl border shadow-md bg-white">
      <h2 className="text-[2rem] font-bold mb-2 text-center">
        Select Your Package or Trial @ ₹99
      </h2>
      <p className="text-purple-700 bg-purple-300 rounded-lg font-semibold text-lg mb-4 pl-8 w-[20rem] h-10 dogWalkingPrice">Priced at <span className="text-2xl">{formattedPrice}</span> &nbsp; <span className="text-red-500 line-through">{mrp}</span></p>

      {/* Walk Duration */}
      <div className="mb-3">
        <label className="block font-medium mb-1">Walk Duration</label>
        <div className="flex gap-2">
          {["20 mins", "30 mins"].map(opt => (
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
            Once a Day
          </button>
          <button
            onClick={() => setWalks("Duo")}
            className={`px-3 py-1 border rounded-full ${
              walks === "Duo" ? "bg-orange-100 border-orange-400" : ""
            }`}
          >
            Twice a Day
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
            onClick={() => setDays("6 days")}
            className={`px-3 py-1 border rounded-full ${
              days === "6 days" ? "bg-orange-100 border-orange-400" : ""
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

      <button className="bg-purple-700 text-white font-semibold py-2 w-full rounded-xl" onClick={selectedOption}>
        Book Now
      </button>
    </div>
  );
};

export default DogWalkingSubscription;
