import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaAngleDown } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiagnosisHistory = () => {
  return (

    <div className='flex flex-rows mt-2 mr-2' >

    <div className="ml-3 w-8/12 h-auto bg-slate-100 p-3 rounded-l-3xl ">
      <div className="font-semibold">
        Blood Pressure
      </div>
      <div className='text-sm flex justify-center items-center' >
        Last 6 Months <FaAngleDown className='ml-1' />
      </div>

      {/* Chart */}
      <div className="dataChart   ">
        <Line
          data={{
            labels: [
              "Oct 2023", "Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", 
              "Mar 2024"
            ], 
            datasets: [
              {
                label: "Systolic",
                data: [
                  
                   120, 117, 160, 117, 155, 160
                ],
                borderColor: "#E66FD2",
                backgroundColor: "#E66FD2",
                fill: false,
                tension: 0.4
              },
              {
                label: "Diastolic",
                data: [
                  
                  110, 65, 109, 97, 75, 79
                ],
                borderColor: "#8C6FE6",
                backgroundColor: "#8C6FE6",
                fill: false,
                tension: 0.4
              }
            ]
          }}
          options={{
            scales: {
              y: {
                beginAtZero: false,
                min: 60,
                max: 180,
                stepSize: 20,
                ticks: {
                  stepSize: 20,
                  callback: function(value) {
                    return value; 
                  }
                }
              },
              x: {
                grid: {
                  display: false, 
                }
              }
            }
          }}
        />
      </div>
    </div>


    {/* Blood pressure  */}
    <div className='pt-3 pl-3 bg-slate-100 w-4/12 rounded-r-3xl' >
        <div className='flex space-x-1 font-semibold items-center' >
            <div  className='bg-[#E66FD2] w-4 h-4  rounded-full' ></div>
            <div>Systolic</div>
        </div>
        <div className='font-bold text-[2rem]' >160</div>
        <div className='flex items-center' > <IoMdArrowDropup /> Higher then Average</div>
        <hr className='mt-3 mb-3' ></hr>
        <div className='flex space-x-1 font-semibold items-center' >
            <div  className='bg-[#8C6FE6] w-4 h-4  rounded-full' ></div>
            <div>Diastolic</div>
        </div>
        <div className='font-bold text-[2rem]' >78</div>
        <div className='flex items-center' > <IoMdArrowDropdown /> Lower than Average</div>
    </div>

    </div>
  );
}

export default DiagnosisHistory;
