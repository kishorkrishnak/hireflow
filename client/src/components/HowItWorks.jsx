import React from "react";
import { Hire, Follow, Job } from "../assets";

const Arrow = () => {
  return <span class="text-3xl text-[dodgerblue]">&#8594;</span>;
};
const Card = ({ image, title, body }) => {
  return (
    <div className="rounded-sm px-3 text-center h-[300px] w-[350px] border border-[dodgerblue] flex flex-col items-center justify-center gap-5">
      <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-[#B3E5FC]">
        <img src={image} className="h-[40px]" alt="procedure" />
      </div>
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-lg text-[grey]">{body}</p>
    </div>
  );
};
const HowItWorks = () => {
  return (
    <div className="bg-[#EAEEFA] py-10 flex flex-col min-h-[600px] items-center justify-center gap-12 ">
      <h1 className="text-bold text-4xl font-bold">How It Works</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <Card
          image={Hire}
          title={"Create Account"}
          body={
            "Opening an account is very simple and you can get started right away"
          }
        ></Card>
        <Arrow />

        <Card
          image={Follow}
          title={"Complete Your Profile"}
          body={
            "Opening an account is very simple and you can get started right away"
          }
        ></Card>
        <Arrow />

        <Card
          image={Job}
          title={"Apply Job Or Hire"}
          body={
            "Opening an account is very simple and you can get started right away"
          }
        ></Card>
      </div>
    </div>
  );
};

export default HowItWorks;
