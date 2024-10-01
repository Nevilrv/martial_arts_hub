import React from "react";
import { Routing } from "../../../shared/Routing";
import Tab from "../../common/Tab/Index";
import { StartWithSquare } from "../../../../assets/icon";

const Index = () => {
  const tabs = [
    { name: "Dashboard", href: Routing.InstructorDashboard },
    { name: "My Classes", href: Routing.InstructorMyClass },
    { name: "Message Requests", href: Routing.InstructorMessageRequest },
    { name: "Chat", href: "" },
    { name: "Booking Overview", href: Routing.InstructorBooking },
    { name: "Earnings Report", href: "" },
    { name: "Reviews", href: Routing.InstructorReviews },
    { name: "Create Class", href: Routing.InstructorCreateClass },
  ];
  return (
    <>
      <Tab tabs={tabs} />
      <div className="mt-11 px-3 lg:px-8">
        <div>
          <h1 className="text-black text-3xl font-semibold">Reviews</h1>
          <p className="text-black/70 text-base">
            Reviews given by students for your class will be shown here
          </p>
        </div>

        {/* <div className="flex items-center justify-center flex-col h-[calc(100vh-300px)]">
          <StartWithSquare  />
          <h2 className="text-[26px] font-medium text-center mt-7">
          No reviews to show currently!
          </h2>
          <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
          You haven’t received any reviews yet. Once a student submits a review, it will appear here.
          </p>
        </div> */}

        <div className="mt-8 flex flex-col gap-4">
          <div className="bg-primary_dark p-6 rounded-lg">
            <p className="text-base">
              1. Training here has been a transformative experience. I've gained
              confidence, discipline, and strength, thanks to the supportive and
              skilled instructors.
            </p>
            <h2 className="text-base text-black font-bold mt-1">- Sarah Kim</h2>
          </div>
          <div className="bg-primary_dark p-6 rounded-lg">
            <p className="text-base">
            2. The instructors are amazing and supportive. I've learned so much and made great friends. The positive atmosphere and challenging classes have made a huge difference in my fitness and focus.
            </p>
            <h2 className="text-base text-black font-bold mt-1">- John Doe</h2>
          </div>
          <div className="bg-primary_dark p-6 rounded-lg">
            <p className="text-base">
            3. I really enjoyed the class. The instructor’s teaching style is engaging and motivating, making complex concepts easy to understand.
            </p>
            <h2 className="text-base text-black font-bold mt-1">- Sarah Kim</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
