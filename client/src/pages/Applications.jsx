import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiRequest } from "../utils";
import { ListBox, Loading } from "../components";
import ApplicantCard from "../components/ApplicantCard";
const Applications = () => {
  const { user } = useReducer((state) => state.user);
  const [applicants, setApplicants] = useState(null);
  const [sort, setSort] = useState("Newest");
  const [isFetching, setIsFetching] = useState(false);
  const { id } = useParams();
  const getApplicants = async () => {
    try {
      const res = await apiRequest({
        url: "/jobs/get-applicants/" + id,
        method: "GET",
        data: { userId: user?._id },
      });
      setApplicants(res.applicants);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApplicants();
  }, []);
  return (
    <>
      {applicants && (
        <div className="container mx-auto flex flex-col gap-5 2xl:gap-10 px-5  py-6 bg-[#f7fdfd]">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm md:text-base">
              Showing:{" "}
              <span className="font-semibold">{applicants?.length}</span>{" "}
              Applicants
            </p>

            <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
              <p className="text-sm md:text-base">Sort By:</p>

              <ListBox sort={sort} setSort={setSort} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            {applicants?.map((applicant, index) => (
              <ApplicantCard applicant={applicant} key={index} />
            ))}

            {isFetching && (
              <div className="mt-10">
                <Loading />
              </div>
            )}

            <p className="text-sm text-right">
              {applicants?.length} records out of {applicants?.length}
            </p>
          </div>

          {/* {numPage > page && !isFetching && (
     <div className="w-full flex items-center justify-center pt-16">
       <CustomButton
         onClick={handleShowMore}
         title="Load More"
         containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
       />
     </div>
   )} */}
        </div>
      )}
    </>
  );
};

export default Applications;
