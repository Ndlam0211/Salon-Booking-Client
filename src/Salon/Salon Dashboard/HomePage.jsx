import React from 'react'
import EarningChart from './chart/EarningChart'
import ReportCard from './ReportCard'
import {AccountBalance} from '@mui/icons-material'

const HomePage = () => {
  return (
    <div className='space-y-5'>
      <div className="lg:flex gap-5">
        <div className="space-y-10 rounded-md w-full lg:w-[70%]">
          <div className="border rounded-lg p-5 w-full">
            <h1 className='text-lg font-bold pb-5 text-primary-color'>Total Revenue</h1>
            <EarningChart />
          </div>
        </div>

        <section className='space-y-5 w-full lg:w-[30%]'>
          <ReportCard 
            icon={<AccountBalance/>}
            value={"$" + 499}
            title={"Total Earnings"}
          />
        </section>
      </div>
    </div>
  )
}

export default HomePage