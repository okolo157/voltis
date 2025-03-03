import React from "react";
import Image from "next/image";

export default function Mainsection() {
  return (
    <div>
      <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Image src="/bookicon.svg" alt="book icon" width={20} height={20} />
          <Image src="/staricon.svg" alt="star icon" width={20} height={20} />
          <p className="text-black opacity-100 text-sm sm:text-base">
            <span className="opacity-40">Dashboards / </span> Default
          </p>
        </div>
        <div></div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col gap-4 mt-6 px-4 sm:px-6">
        <h1 className="text-sm sm:text-base">Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4).fill(
            <div className="bg-[#EDEEFC] p-4 sm:p-6 rounded-lg flex flex-col gap-2 sm:gap-4">
              <h2 className="text-sm">Total Product Views</h2>
              <div className="flex justify-center items-center gap-1">
                <p className="text-lg">
                  7265 <span className="text-sm">+11.01%</span>
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 my-6 px-4 sm:px-6">
        <Image
          src="/left-chart.svg"
          alt="left chart"
          width={570}
          height={330}
          className="w-full  lg:w-2/3 h-auto"
        />
        <Image
          src="/right-chart.svg"
          alt="right-chart"
          width={170}
          height={330}
          className="w-full lg:w-1/4 h-auto"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 px-4 sm:px-6">
        <Image
          src="/left-graph.svg"
          alt="left-graph"
          width={332}
          height={280}
          className="w-full lg:w-1/2 h-auto"
        />
        <Image
          src="/right-graph.svg"
          alt="right graph"
          width={332}
          height={280}
          className="w-full lg:w-1/2 h-auto"
        />
      </div>
    </div>
  );
}
