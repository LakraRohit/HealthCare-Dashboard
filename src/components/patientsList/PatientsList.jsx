import React from 'react';
import { BiDotsHorizontal } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";


import Img1 from '../../assets/images/1.png';
import Img10 from '../../assets/images/10.png';
import Img11 from '../../assets/images/11.png';
import Img12 from '../../assets/images/12.png';
import Img2 from '../../assets/images/2.png';
import Img3 from '../../assets/images/3.png';
import Img4 from '../../assets/images/4.png';
import Img5 from '../../assets/images/5.png';
import Img6 from '../../assets/images/6.png';
import Img7 from '../../assets/images/7.png';
import Img8 from '../../assets/images/8.png';
import Img9 from '../../assets/images/9.png';


const patients = [
  { image: Img1, name: "Emilly Williams", age: 18, sex: "Female" },
  { image: Img2, name: "Ryan Johnson", age: 45, sex: "Male" },
  { image: Img3, name: "Brandon Mitchell", age: 36, sex: "Male" },
  { image: Img4, name: "Jessica Taylor", age: 28, sex: "Female" }, 
  { image: Img5, name: "Samantha Johnson", age: 56, sex: "Female" },
  { image: Img6, name: "Ashley Martinez", age: 54, sex: "Female" },
  { image: Img7, name: "Olivia Brown", age: 32, sex: "Female" },
  { image: Img8, name: "Tyler Davis", age: 19, sex: "Male" },
  { image: Img9, name: "Kevin Anderson ", age: 30, sex: "Male" },
  { image: Img10, name: "Dylan Thompson", age: 58, sex: "Male" },
  { image: Img11, name: "Nathan Evans", age: 36, sex: "Male" },
  { image: Img12, name: "Mike Nolan", age: 31, sex: "Male" },
];

const PatientsList = () => {
  return (
    <div>
      {/* Patients List */}
      <section className="hidden lg:block w-12/12 h-full bg-white rounded-3xl p-3 shadow-lg">
        <div className="flex items-center justify-between font-bold mb-5">
          Patients <CiSearch className='hover:cursor-pointer' />
        </div>

        {/* Map over the patients array dynamically */}
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 py-2 border-b p-1 rounded-lg border-gray-200 ${patient.name === "Jessica Taylor" ? 'bg-[#01F0D0]' : ''}`} // Highlighting style
          >
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img src={patient.image} alt={`Patient ${index + 1}`} />
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="font-bold text-sm">
                {patient.name}
                <div className="font-light text-xs">
                  {patient.sex} {patient.age}
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <BiDotsHorizontal />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PatientsList;
