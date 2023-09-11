import React from 'react'
import { Link } from 'react-router-dom'

const ApplicantCard = ({applicant}) => {
  console.log(applicant);
  return (
    <Link to={`/profile/${applicant?._id}`}>

    <div className='px-3 w-full h-24 flex gap-4 items-center justify-between bg-white shadow-md rounded'>
      <div className='w-3/4 md:w-2/4 flex gap-4 items-center'>
          <img
            src={applicant?.profileUrl}
            alt={applicant?.name}
            className='w-12 md:w-16 h-12 md:h-20 rounded'
          />
        <div className='h-full flex flex-col'>
          <Link
            to={`/company-profile/${applicant?._id}`}
            className='text-base md:text-lg font-semibold text-gray-600 truncate'
          >
            {`${applicant?.firstName} ${applicant?.lastName}` }
          </Link>
        <p className='text-base text-start'>{applicant?.jobTitle || ""}</p>

        </div>
      </div>

      <div className='hidden w-1/4 h-full md:flex items-center'>
      <span className='text-sm text-blue-600'>{applicant?.email}</span>

      </div>

      <div className='w-1/4 h-full flex flex-col items-center justify-center'>
      <p className='text-base text-start'>{applicant?.location}</p>

      </div>
    </div>
    </Link>
  )
}

export default ApplicantCard