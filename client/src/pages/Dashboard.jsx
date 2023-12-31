import React, { useEffect, useState } from "react";
import { apiRequest } from "../utils";
import { useSelector } from "react-redux";
import { JobCard } from "../components";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCompany = async () => {
    setIsLoading(true);

    let id = user?._id;
    try {
      const res = await apiRequest({
        url: "/companies/get-company/" + id,
        method: "GET",
      });

      setInfo(res?.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="container mx-auto p-5">

    <div className="w-full flex flex-col gap-2">
      <h1 className="font-semibold text-3xl">Dashboard</h1>
      <p className="text-xl">
        {info?.jobPosts.length > 0
          ? "Explore, manage, and track all your posted job listings, view detailed job information, and review applicant details with ease."
          : "No Jobs Posted"}
      </p>

      <div className="flex flex-wrap gap-3 mt-3">
        {info?.jobPosts?.map((job, index) => {
          const data = {
            name: info?.name,
            email: info?.email,
            logo: info?.profileUrl,
            ...job,
          };
          return <JobCard job={data} key={index} />;
        })}
      </div>
      </div>

    </div>
  );
};

export default Dashboard;
