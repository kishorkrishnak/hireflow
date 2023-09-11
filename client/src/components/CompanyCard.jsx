import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ cmp }) => {
  return (
    <Link to={`/company-profile/${cmp?._id}`}>

    <div className='px-3 w-full h-24 flex gap-4 items-center justify-between bg-white shadow-md rounded'>
      <div className='w-3/4 md:w-2/4 flex gap-4 items-center'>
          <img
            src={cmp?.profileUrl}
            alt={cmp?.name}
            className='w-12 md:w-16 h-12 md:h-16 rounded'
          />
        <div className='h-full flex flex-col'>
          <Link
            to={`/company-profile/${cmp?._id}`}
            className='text-base md:text-lg font-semibold text-gray-600 truncate'
          >
            {cmp?.name}
          </Link>
          <span className='text-sm text-blue-600'>{cmp?.email}</span>
        </div>
      </div>

      <div className='hidden w-1/4 h-full md:flex items-center'>
        <p className='text-base text-start'>{cmp?.location}</p>
      </div>

      <div className='w-1/4 h-full flex flex-col items-center justify-center'>
        <p className='text-blue-600 font-semibold'>{cmp?.jobPosts?.length}</p>
        <span className='text-sm md:base font-normal text-gray-600'>
          Jobs Posted
        </span>
      </div>
    </div>
    </Link>

  );
};

export default CompanyCard;
