import { useState } from "react";
import JobDetails from "./JobDetails";
import LinkIcon from "../public/link.svg";
import Check from "../public/check.svg";
import Briefcase from "../public/briefcase.svg";
import Location from "../public/map-pin.svg";
import Calendar from "../public/calendar.svg";

type JobListProps = {
  data?: any[];
};

const JobList: React.FunctionComponent<JobListProps> = ({ data }) => {
  const [viewDetails, setViewDetails] = useState({});
  const [showViewDetails, setShowViewDetails] = useState(false);

  return (
    <>
      {data.map((job) => {
        return (
          <div
            key={job.id}
            className="lg:flex lg:items-center lg:justify-between mb-16"
          >
            <img className="mr-6 w-10 mb-3" src={job.company_logo} alt="logo" />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
                {job.title}
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Briefcase />
                  &nbsp;{job.type}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Location />
                  &nbsp;{job.location}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Calendar />
                  &nbsp;Posted on {new Date(job.created_at).toDateString()}
                </div>
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <span className="ml-3">
                <button
                  onClick={() => {
                    setViewDetails(job);
                    setShowViewDetails(true);
                  }}
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <LinkIcon />
                  &nbsp; View
                </button>
              </span>

              <span className="ml-3">
                <a
                  target="_blank"
                  href={job.url}
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Check />
                  &nbsp;Apply
                </a>
              </span>
            </div>
          </div>
        );
      })}
      {showViewDetails ? (
        <JobDetails
          details={viewDetails}
          setShowViewDetails={setShowViewDetails}
        />
      ) : null}
    </>
  );
};

export default JobList;
