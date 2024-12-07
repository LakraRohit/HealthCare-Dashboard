import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const LabTest = () => {
  return (
    <div  className=' w-full' >
      <div className='font-bold '>Lab Tests</div>

      <div className='mt-3 w-full  flex justify-between items-center p-2'  > 
        <div >Blood Test</div><div><MdOutlineFileDownload /></div>
      </div>
      <div className='mt-3 w-full  flex justify-between items-center bg-slate-200 p-2 rounded-3xl'  > 
        <div >CT Scane</div><div><MdOutlineFileDownload /></div>
      </div>
      <div className='mt-3 w-full  flex justify-between items-center p-2'  > 
        <div >Radiology Reports</div><div><MdOutlineFileDownload /></div>
      </div>
      <div className='mt-3 w-full  flex justify-between items-center p-2'  > 
        <div >X-Rays</div><div><MdOutlineFileDownload /></div>
      </div>
      <div className='mt-3 w-full  flex justify-between items-center p-2'  > 
        <div >Urine Test</div><div><MdOutlineFileDownload /></div>
      </div>


    </div>
  )
}

export default LabTest
