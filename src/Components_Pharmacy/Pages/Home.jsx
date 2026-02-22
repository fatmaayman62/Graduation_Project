import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StockContext } from '../Contexts/StockContext'
import { Button } from '@heroui/button'
import BestSellerChart from '../Components/BestSellerChart'
import WeekSelling from '../Components/WeekSelling'
import WeekOrders from '../Components/WeekOrders'
export default function Home() {
  const [activeOption, setActiveOption] = useState('Best Seller')
  const [options, setOptions] = useState([
    { id: 2, name: 'Week Selling', component: <WeekSelling/> },
    { id: 1, name: 'Best Seller', component: <BestSellerChart /> },
    { id: 3, name: 'Week orders', component: <WeekOrders/> }
  ])
  let { lowStock } = useContext(StockContext)
  return (
    <>
      {/* <SearchComponent/> */}
      <div className="container">
        <div className="header pb-5">
          <h2 className='text-4xl font-medium mb-3'>Dashboard</h2>
          <span>Welcome back! Here's what's happening today.</span>
        </div>
        <div className="todayDetails grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          <div className="todaysOrders bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-indigo-500 rounded-[10px]"></div>
              <span className='px-2 py-1 bg-green-400 rounded-3xl text-[12px]'>+12%</span>
            </div>
            <div className="w-full">
              <span>today orders</span>
              <span className='block text-4xl py-2'>45</span>
            </div>
          </div>

          <div className="PendingOrders bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-yellow-400 rounded-[10px]"></div>
              <span className='px-2 py-1 bg-green-400 rounded-3xl text-[12px]'>Urgent</span>
            </div>
            <div className="w-full">
              <span>Pending Orders</span>
              <span className='block text-4xl py-2'>12</span>
            </div>
          </div>

          <div className="Today'sRevenue bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-green-400 rounded-[10px]"></div>
              <span className='px-2 py-1 bg-green-400 rounded-3xl text-[12px]'>+8%</span>
            </div>
            <div className="w-full">
              <span>Today's Revenue</span>
              <span className='block text-4xl py-2'>EGP 12,450</span>
            </div>
          </div>

          <div className="LowStockItems bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-red-500 rounded-[10px]"></div>
              <Link to={'low-stock'} className='underline text-blue-500'>view</Link>
            </div>
            <div className="w-full">
              <span>Low Stock Items</span>
              <span className='block text-4xl py-2 text-red-500'>{lowStock.length}</span>
            </div>
          </div>
        </div>
        <div className="chartsContainer py-10">
          <div className="flex justify-between items-start flex-wrap">
            <div className="options mb-5 p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3  dark:bg-[#1D293D] bg-white flex flex-col space-y-3 shadow-xl">
              {options.map((option)=><Button className={`${activeOption===option.name?'bg-primary':null}`} onClick={()=>{setActiveOption(option.name)}}>{option.name}</Button>)}
            </div>
            <div className='w-full md:w-2/3 lg:w-2/4'>
                {options.find((chart)=>chart.name===activeOption).component}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
