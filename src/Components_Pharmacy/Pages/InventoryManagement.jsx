
import React, { useContext, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { GiMedicinePills } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import StaticMedicineTable from "../Components/StaticMedicineTable";
import { StockContext } from "../Contexts/StockContext";
import { Button } from "@heroui/button";
import { Input, Select, SelectItem } from "@heroui/react";
export default function InventoryManagement() {
  let { expiringDate, lowStock, data, getTotalForAllMedicines } = useContext(StockContext)
  return (
    <>
      <div className="container">

        <div className="header flex justify-between items-center pb-5 max-sm:flex-col max-sm:space-y-5 ">
          <h2 className="text-3xl font-medium">Inventory Management</h2>
            <Button type="button" data-modal-target="crud-modal" data-modal-toggle="crud-modal" className='dark:bg-primary bg-primary text-white' > <span><IoIosAdd className='text-2xl' /></span><span>Add New Medicine</span></Button>
          {/* add medicine modal */}
          <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="hidden flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-xl max-h-full">
              <div className="relative bg-gray-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 border rounded-xl shadow-sm p-4 md:p-6">
                <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                  <h3 className="text-lg font-medium text-heading">
                    Create new product
                  </h3>
                  <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="crud-modal">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form action="#">
                  <div className="grid gap-4 grid-cols-2 py-4 md:py-6">
                    <div className="col-span-2 sm:col-span-1">
                      <Input label="enter product name" variant="underlined" type="text" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Select variant="faded" className="max-w-xs" label="Select category">
                        <SelectItem key='ex1'>ex1</SelectItem>
                        <SelectItem key='ex2'>ex2</SelectItem>
                        <SelectItem key='ex3'>ex3</SelectItem>
                      </Select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Input label="enter generic name" variant="underlined" type="text" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Input label="enter medicine code" variant="underlined" type="text" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Input label="enter Unit Price" variant="underlined" type="text" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Input label="enter record level" variant="underlined" type="number" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Input label="enter expired date" variant="underlined" type="date" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 border-t border-default pt-4 md:pt-6">
                    <Button color="primary">Add Medicine</Button>
                    <Button color="danger" variant="faded">Exit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>

        <div className="details grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-8">
          <div className="totalMedicines bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-[#667EEA] rounded-[10px] flex justify-center items-center">
                <GiMedicinePills className='text-3xl' />
              </div>
            </div>
            <div className="w-full">
              <span>Total Medicines</span>
              <span className='block text-4xl py-2 text-success'>{data.length}</span>
              {/* <span className='text-green-400'>+24 this month</span> */}
            </div>
          </div>

          <div className="lowStock bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-[#EF5350] rounded-[10px] flex justify-center items-center">
                <IoIosWarning className='text-3xl' />
              </div>
            </div>
            <div className="w-full">
              <span>Low Stock Alerts</span>
              <span className='block text-4xl py-2 text-[#f0403d]'>{lowStock.length}</span>
              <span className='text-[#ef5350]'>Action required</span>
            </div>
          </div>

          <div className="expiringSoon bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-[#FFA726] rounded-[10px] flex justify-center items-center">
                <FaCalendarAlt className='text-3xl' />
              </div>
            </div>
            <div className="w-full">
              <span>Expiring Soon</span>
              <span className='block text-4xl py-2 text-[#FFA726]'>{expiringDate?.length}</span>
              <span>Within 30 days</span>
            </div>
          </div>

          <div className="inventoryValue bg-white text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-5 rounded-2xl shadow-xl flex justify-between items-center flex-wrap">
            <div className="w-full flex justify-between items-center mb-5">
              <div className="w-[50px] h-[50px] bg-[#00D2A0] rounded-[10px] flex justify-center items-center">
                <FaMoneyBill1Wave className='text-3xl' />
              </div>
            </div>
            <div className="w-full">
              <span>Total Inventory Value</span>
              <span className='block text-4xl py-2'>EGP {getTotalForAllMedicines()}</span>
              <span>Updated today</span>
            </div>
          </div>
        </div>

        <div className="searchContainer space-x-5  bg-white text-slate-900 border-gray-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-7 rounded-xl flex justify-between items-center flex-wrap md:flex-nowrap mb-8">
          <Input placeholder="search by name, code, category" className="w-full max-md:mb-4 max-md:mx-auto md:w-1/2" />
          <Select variant="faded" className="w-full max-md:mb-4 max-md:mx-auto md:w-1/4" label="Select category">
            <SelectItem key='ex1'>ex1</SelectItem>
            <SelectItem key='ex2'>ex2</SelectItem>
            <SelectItem key='ex3'>ex3</SelectItem>
          </Select>
          <Select variant="faded" className="w-full max-md:mb-4 max-md:mx-auto md:w-1/4" label="Select Stock State">
            <SelectItem key='ex1'>in stock</SelectItem>
            <SelectItem key='ex2'>out of stock</SelectItem>
            <SelectItem key='ex3'>low stock</SelectItem>
          </Select>
        </div>
        <StaticMedicineTable />
      </div>
    </>




  );
}
