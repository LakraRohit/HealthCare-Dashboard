import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import HeartBPM from '../../assets/images/HeartBPM.svg';
import respiratoryRate from '../../assets/images/respiratory rate.svg';
import Temperature from '../../assets/images/temperature.svg';






const HealthCards = () => {
  return (
    <div>
                  <div className='space-x-4 p-3 w-full h-auto mt-3  rounded-3xl flex flex-row justify-center items-center' >
              <div className='w-2/6 h-60 bg-[#D8FCF7] rounded-3xl flex flex-col p-3  items-start' >
                <div> <img src={respiratoryRate} ></img> </div>
                <div>Respiratory Rate</div>
                <div className='font-bold text-2xl md:text-[2rem]' >20 bpm</div>
                <div>normal</div>
              </div>
              <div className='w-2/6 h-60 bg-[#FFE6E9] rounded-3xl flex flex-col p-3 items-start' >
              <div> <img src={Temperature} ></img> </div>
                <div>Temperature</div>
                <div className='font-bold text-2xl md:text-[2rem]' >98.6°F</div>
                <div>normal</div>
              </div>
              <div className='w-2/6 h-60 bg-[#FFE6F1] rounded-3xl flex flex-col p-3 items-start' >
              <div> <img src={HeartBPM} ></img> </div>
                <div>Respiratory Rate</div>
                <div className='font-bold text-xl md:text-[2rem] md:mb-1 ' >20 bpm</div>
                <div className='flex flex-row items-center text-[12px] md:text-lg' > <IoMdArrowDropdown /> Lower than Average</div>
              </div>
            </div>
    </div>
  )
}

export default HealthCards
