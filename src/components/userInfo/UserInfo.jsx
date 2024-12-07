import React from "react";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineLocalPhone, MdOutlineSecurity } from "react-icons/md";
import { PiGenderFemale } from "react-icons/pi";
import featuresData from "../../components/features/Features";
import LabTest from "../labResult/LabTest";

const UserInfo = () => {
  const userData = featuresData[0];

  return (
    <div>
      <div className="w-full h-auto flex flex-col justify-center items-center p-5">
        <img
          className="w-48 rounded-full"
          src={userData.profile_picture}
          alt={userData.name}
        />
        <div className="mt-3 font-semibold">{userData.name}</div>
      </div>

      <div className="p-3 mt-3">
        <div className="flex flex-row">
          <div className="p-2">
            <CiCalendar className="text-2xl bg-slate-200 rounded-full" />
          </div>
          <div className="ml-3">
            <div className="text-sm">Date Of Birth</div>
            <div className="font-semibold">{userData.date_of_birth}</div>
          </div>
        </div>
      </div>

      <div className="p-3 mt-3">
        <div className="flex flex-row">
          <div className="p-2">
            <PiGenderFemale className="text-2xl bg-slate-200 rounded-full" />
          </div>
          <div className="ml-3">
            <div className="text-sm">Gender</div>
            <div className="font-semibold">{userData.gender}</div>
          </div>
        </div>
      </div>

      <div className="p-3 mt-3">
        <div className="flex flex-row">
          <div className="p-2">
            <MdOutlineLocalPhone className="text-2xl bg-slate-200 rounded-full" />
          </div>
          <div className="ml-3">
            <div className="text-sm">Contact Info</div>
            <div className="font-semibold">{userData.phone_number}</div>
          </div>
        </div>
      </div>

      <div className="p-3 mt-3">
        <div className="flex flex-row">
          <div className="p-2">
            <MdOutlineLocalPhone className="text-2xl bg-slate-200 rounded-full" />
          </div>
          <div className="ml-3">
            <div className="text-sm">Emergency Contact</div>
            <div className="font-semibold">{userData.emergency_contact}</div>
          </div>
        </div>
      </div>

      <div className="p-3 mt-3">
        <div className="flex flex-row">
          <div className="p-2">
            <MdOutlineSecurity className="text-2xl bg-slate-200 rounded-full" />
          </div>
          <div className="ml-3">
            <div className="text-sm">Insurance Provider</div>
            <div className="font-semibold">{userData.insurance_type}</div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center">
        <button className="bg-[#01F0D0] p-2 rounded-3xl w-3/5">
          Show All Information
        </button>
      </div>

      <div className="flex w-full justify-start p-5 items-center mt-4">
        <LabTest />
      </div>
    </div>
  );
};

export default UserInfo;
