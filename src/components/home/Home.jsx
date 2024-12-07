import React from "react";
import { BsPeople } from "react-icons/bs";
import { CiHome, CiMenuKebab, CiSettings } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import Dr from "../../assets/images/Dr.png";
import TestLogo from "../../assets/images/TestLogo.svg";
import DiagnosisHistory from "../diagnosisHistory/DiagnosisHistory";
import DiagnosticList from "../diagnosticList/DiagnosticList";
import HealthCards from "../healthCards/HealthCards";
import PatientsList from "../patientsList/PatientsList"; // Update this path accordingly
import UserInfo from "../userInfo/UserInfo";

const Home = () => {
  return (
    <div className="w-auto h-auto bg-slate-200 p-3 flex flex-col space-y-5">
      {/* Navigation Bar */}
      <nav className="w-full bg-white h-16 rounded-full flex justify-between items-center px-3 shadow-lg">
        <div>
          <img src={TestLogo} className="w-28 md:w-36" alt="Test Logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-row justify-center items-center space-x-4">
          <div className="flex items-center hover:cursor-pointer">
            <CiHome className="mr-3" /> Home
          </div>
          <div className="bg-[#01F0D0] rounded-full h-8 w-28 flex justify-center items-center hover:cursor-pointer">
            <BsPeople className="mr-3" /> Patients
          </div>
          <div className="flex items-center hover:cursor-pointer">
            <RiCalendarScheduleLine className="mr-3" /> Schedule
          </div>
          <div className="flex items-center hover:cursor-pointer">
            <FiMessageSquare className="mr-3" /> Message
          </div>
          <div className="flex items-center hover:cursor-pointer">
            <MdCreditCard className="mr-3" /> Transactions
          </div>
        </div>

        {/* Profile and Settings */}
        <div className="flex items-center space-x-2">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full overflow-hidden">
            <img className="" src={Dr} alt="Doctor" />
          </div>
          <div>
            <div className="font-bold sm:text-sm text-[10px] ">
              Dr. Jose Simmons
            </div>
            <div className="font-extralight sm:text-sm text-[8px]">
              General Practitioner
            </div>
          </div>

          {/* Vertical Line */}
          <div className="border-l-2 border-gray-300 h-10 mx-4"></div>

          <div className="hover:cursor-pointer">
            <CiSettings className="text-3xl" />
          </div>
          <div className="hover:cursor-pointer">
            <CiMenuKebab />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full lg:space-x-4 h-auto flex flex-col lg:flex-row">
        {/* Patients List */}
        <div className="w-full lg:w-3/12 mb-5 lg:mb-0">
          <PatientsList />
        </div>

        {/* Diagnosis History */}
        <div className="w-full lg:w-7/12 mb-5 lg:mb-0 bg-white p-3 rounded-3xl">
          <div className="font-bold pl-5">Diagnosis History</div>

          {/* Chart */}
          <div className="mt-2 ">
            <DiagnosisHistory />
          </div>

          {/* Health Cards */}
          <div>
            <HealthCards />
          </div>

          {/* Diagnostic List */}
          <div>
            <DiagnosticList />
          </div>
        </div>

        {/* User Info */}
        <div className="w-full lg:w-3/12 bg-white p-3 rounded-3xl">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
