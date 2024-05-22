import React from "react";
import Spline from "@splinetool/react-spline";

export default function skills() {
  return (
    <div className="container h-screen flex ">
      <div className=" w-1/2 text-white font-semibold mt-8 text-3xl">
        Skills:
      </div>
      {/* Graphics */}
      <div className="w-1/2">
        <Spline scene="https://prod.spline.design/SIA9dTccbpYMCmqn/scene.splinecode" />
      </div>
    </div>
  );
}
