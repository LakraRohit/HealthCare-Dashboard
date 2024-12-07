import React from 'react'

const DiagnosticList = () => {
  return (
    <div>
                  <div className='w-full p-3 ' >
              <div className=' font-bold text-lg'>
                Diagnostic List
              </div>

              <div className='text-sm md:text-lg flex justify-between items-center mt-3 p-3 rounded-2xl bg-slate-100' >
                <div>Problem/Diagnosis</div>
                <div>Description</div>
                <div>Status</div>
              </div>

              <div className='text-[11px] md:text-[15px] flex justify-between items-center mt-3 p-3 rounded-xl' >
                <div>Hypertension</div>
                <div>Chronic high blood pressure</div>
                <div>Under Observation</div>
              </div>


              <div className='text-[12px] md:text-[15px] flex justify-between items-center mt-3 p-3 rounded-xl' >
                <div>Type 2 Diabetes</div>
                <div>Insulin resistance and elevated blood sugar</div>
                <div>Cured</div>
              </div>

              <div className=' text-[11px] md:text-[15px] flex justify-between items-center mt-3  p-3 rounded-xl' >
                <div>Asthma</div>
                <div>Recurrent episodes of branchial constriction</div>
                <div>Inactive</div>
              </div>

              <div className=' text-[12px] md:text-[15px] flex justify-between items-center mt-3 p-3 rounded-xl' >
                <div>Osteoarthritis</div>
                <div>Degenerative joint disease</div>
                <div>Untreated</div>
              </div>

              <div className=' text-[12px] md:text-[15px] flex justify-between items-center mt-3  p-3 rounded-xl' >
                <div>Allergic Rhinitis</div>
                <div>Seasonal allergies causing nasal congestion </div>
                <div>Active</div>
              </div>

            </div>
    </div>
  )
}

export default DiagnosticList
