import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineSafetyCertificate } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CustomButton, JobCard, Loading } from "../components";
import { apiRequest } from "../utils";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const JobDetail = () => {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [selected, setSelected] = useState("0");
  let [isOpen, setIsOpen] = useState(false);

  const applyToJob = async () =>{
    
  }
  const getJobDetails = async () => {
    setIsFetching(true);
    try {
      const res = await apiRequest({
        url: "/jobs/get-job-detail/" + id,
        method: "GET",
      });
      setJob(res?.data);
      setSimilarJobs(res?.similarJobs);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  };
  const handleDeletePost = async () => {
    setIsFetching(true);
    try {
      if (window.confirm("Delete Job Post?")) {
        const res = await apiRequest({
          url: "/jobs/delete-job/" + job?._id,
          token: user?.token,
          method: "DELETE",
        });

        if (res?.success) {
          alert(res?.message);
          window.location.replace("/");
        }
      }
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    id && getJobDetails();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="container mx-auto">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Apply to this job ?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    By applying for this job, your contact details and resume will be shared with the employer. Are you sure you want to proceed?
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Apply
                    </button>
                    <button
                      type="button"
                      className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                   Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="w-full flex flex-col md:flex-row gap-10 ">
        {/* LEFT SIDE */}
        {isFetching ? (
          <Loading />
        ) : (
          <div className="mb-3 w-full h-fit md:w-2.5/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md rounded-lg">
            <div className="w-full flex items-center justify-between">
              <div className="w-3/4 flex gap-2">
                <img
                  src={job?.company?.profileUrl}
                  alt={job?.company?.name}
                  className="w-20 h-20 md:w-20 md:h-20 rounded"
                />

                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-gray-600">
                    {job?.jobTitle}
                  </p>

                  <p className="text-base flex items-center gap-1">
                    {job?.location}
                  </p>

                  <Link
                    className="text-base text-blue-600"
                    to={`/company-profile/${job?.company?._id}`}
                  >
                    {job?.company?.name}
                  </Link>

                  <span className="text-gray-500 text-sm">
                    {moment(job?.createdAt).fromNow()}
                  </span>
                </div>
              </div>

              <div className="">
                <AiOutlineSafetyCertificate className="text-3xl text-blue-500" />
              </div>
            </div>

            <div className="w-full flex flex-wrap md:flex-row gap-2 items-center justify-between my-10">
              <div className="bg-[#bdf4c8] w-40 h-16 rounded-lg flex flex-col items-center justify-center">
                <span className="text-sm">Salary</span>
                <p className="text-lg font-semibold text-gray-700">
                  $ {job?.salary}
                </p>
              </div>

              <div className="bg-[#bae5f4] w-40 h-16 rounded-lg flex flex-col items-center justify-center">
                <span className="text-sm">Job Type</span>
                <p className="text-lg font-semibold text-gray-700">
                  {job?.jobType}
                </p>
              </div>

              <div className="bg-[#fed0ab] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
                <span className="text-sm">No. of Applicants</span>
                <p className="text-lg font-semibold text-gray-700">
                  {job?.application?.length || 0}
                </p>
              </div>

              <div className="bg-[#cecdff] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
                <span className="text-sm">No. of Vacancies</span>
                <p className="text-lg font-semibold text-gray-700">
                  {job?.vacancies}
                </p>
              </div>

              <div className="bg-[#cecdff] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
                <span className="text-sm">Yr. of Experience</span>
                <p className="text-lg font-semibold text-gray-700">
                  {job?.experience}
                </p>
              </div>
            </div>

            <div className="w-full flex gap-4 py-5">
              <CustomButton
                onClick={() => setSelected("0")}
                title="Job Description"
                containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                  selected === "0"
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300"
                }`}
              />

              <CustomButton
                onClick={() => setSelected("1")}
                title="Company"
                containerStyles={`w-full flex items-center justify-center  py-3 px-5 outline-none rounded-full text-sm ${
                  selected === "1"
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300"
                }`}
              />
            </div>

            <div className="my-6">
              {selected === "0" ? (
                <>
                  <p className="text-xl font-semibold">Job Decsription</p>

                  <span className="text-base">{job?.detail[0]?.desc}</span>

                  {job?.detail[0]?.requirements && (
                    <>
                      <p className="text-xl font-semibold mt-8">Requirements</p>
                      <span className="text-base">
                        {job?.detail[0]?.requirements}
                      </span>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="mb-6 flex flex-col">
                    <p className="text-xl text-blue-600 font-semibold">
                      {job?.company?.name}
                    </p>
                    <span className="text-sm flex items-center gap-1">
                      <HiLocationMarker /> {job?.company?.location}
                    </span>

                    <span className="text-sm flex items-center gap-1">
                      <AiOutlineMail />
                      {job?.company?.email}
                    </span>
                  </div>

                  <p className="text-xl font-semibold">About Company</p>
                  <span>{job?.company?.about}</span>
                </>
              )}
            </div>

            <div className="w-full">
              {user?._id === job?.company?._id ? (
                <CustomButton
                  title="Delete Post"
                  onClick={handleDeletePost}
                  containerStyles={`w-full flex items-center justify-center text-white bg-black py-3 px-5 outline-none rounded-full text-base`}
                />
              ) : (
                <CustomButton
                  onClick={openModal}
                  title="Apply Now"
                  containerStyles={`w-full flex items-center justify-center text-white bg-black py-3 px-5 outline-none rounded-full text-base`}
                />
              )}
            </div>
          </div>
        )}
        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/3 2xl:w-2/4 p-5 mt-20 md:mt-0">
          <p className="text-gray-500 text-md font-semibold">
            Similar Job Posts
          </p>

          <div className="w-full flex flex-wrap gap-4 mt-2">
            {similarJobs?.slice(0, 6).map((job, index) => {
              const data = {
                name: job?.company.name,
                logo: job?.company.profileUrl,
                ...job,
              };
              return <JobCard job={data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
