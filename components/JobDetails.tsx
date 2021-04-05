import { useState } from "react";
import { noop } from "../utils";
import Check from "../public/check.svg";

type JobDetailsProps = {
  details?: any;
  setShowViewDetails?: (string) => void;
};

const JobDetails: React.FunctionComponent<JobDetailsProps> = ({
  details,
  setShowViewDetails = noop,
}) => {
  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="grid place-items-center min-h-screen pt-4 px-4 pb-20 text-left sm:p-0">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={() => {
              setShowViewDetails(false);
            }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-11/12"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex place-items-center">
                <img
                  className="w-16 mr-5"
                  src={details.company_logo}
                  alt="logo"
                />
                <h3 className="text-lg leading-6 font-medium text-gray-700">
                  {details.company}
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Application for
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
                      {details.title}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
                      {details.location}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Website
                    </dt>
                    <dd className="mt-1 text-sm text-indigo-700 sm:mt-0 sm:col-span-3">
                      <a href={details.company_url} target="_blank">
                        {details.company_url}
                      </a>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Job type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
                      {details.type}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd
                      className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"
                      dangerouslySetInnerHTML={{ __html: details.description }}
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      How to Apply
                    </dt>
                    <dd
                      className="mt-1 text-sm text-indigo-700 sm:mt-0 sm:col-span-3"
                      dangerouslySetInnerHTML={{ __html: details.how_to_apply }}
                    ></dd>
                  </div>
                </dl>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span className="ml-0">
                    <a
                      target="_blank"
                      href={details.url}
                      type="button"
                      className="inline-flex w-full justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      <Check />
                      &nbsp;Apply
                    </a>
                  </span>
                  <button
                    onClick={() => {
                      setShowViewDetails(false);
                    }}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
