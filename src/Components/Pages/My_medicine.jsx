import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import img from "../../assets/cat.jpg";
import { Button } from "@heroui/react";
import { Input } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import med1 from '../../assets/1.jfif'  
import med2 from '../../assets/2.jfif'  
import med3 from '../../assets/3.jfif'  
import med4 from '../../assets/4.jfif'  
import med5 from '../../assets/5.jfif'  
import med6 from '../../assets/6.jfif'  
import med7 from '../../assets/7.jfif'  
import med8 from '../../assets/8.jfif'  
import med9 from '../../assets/9.jfif'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { label } from "framer-motion/client";
import DropDownList from "../Component/DropDownList";
function My_medicine() {
  const [open, setOpen] = useState(false);
  const [pastMedicine, setPastMedicine] = useState([]);
  const [currentMedicine, setCurrentMedicine] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [medicinesData,setMedicinesData] = useState(
[
  {
    id: 1,
    name: "Paracetamol",
    dosage: "500mg",
    time: "500mg",
    since: "Jan 15, 2025",
    status: "Active",
    image: med1,
  },
  {
    id: 2,
    name: "Ibuprofen",
    dosage: "400mg",
    time: "400mg",
    since: "Feb 02, 2025",
    status: "Active",
    image: med2,
  },
  {
    id: 3,
    name: "Vitamin C",
    dosage: "1000mg",
    time: "Once daily",
    since: "Mar 10, 2025",
    status: "Paused",
    image: med3,
  },
  {
    id: 4,
    name: "Aspirin",
    dosage: "81mg",
    time: "Morning",
    since: "Apr 01, 2025",
    status: "Active",
    image: med4,
  },
  {
    id: 5,
    name: "Amoxicillin",
    dosage: "500mg",
    time: "Every 8 hours",
    since: "May 12, 2025",
    status: "Active",
    image: med5,
  },
  {
    id: 6,
    name: "Cough Syrup",
    dosage: "10ml",
    time: "Twice daily",
    since: "Jun 05, 2025",
    status: "Paused",
    image: med6,
  },
  {
    id: 7,
    name: "Insulin",
    dosage: "20 units",
    time: "Before meals",
    since: "Jul 01, 2025",
    status: "Active",
    image: med7,
  },
  {
    id: 8,
    name: "Antacid",
    dosage: "2 tablets",
    time: "After meals",
    since: "Aug 18, 2025",
    status: "Active",
    image: med8,
  },
  {
    id: 9,
    name: "Eye Drops",
    dosage: "2 drops",
    time: "3 times daily",
    since: "Sep 10, 2025",
    status: "Paused",
    image: med9,
  },
]);

function checkMedicine(){
  let curr=medicinesData.filter(data=>data?.status=='Active')
  setCurrentMedicine(curr);
  let past=medicinesData.filter(data=>data?.status!=='Active')
  setPastMedicine(past);
}



  const [medicineState, setMedicineState] = useState([
    { key: "active", label: "active" },
    { key: "ended", label: "ended" },
  ]);

  useEffect(()=>{
    checkMedicine();
  },[])

  return (
    <div className="container dark:text-white mx-auto pt-22 pb-4">
      {/* start analysis */}
      <div className="flex flex-wrap items-center">
        <div className="sm:w-1/3 w-full p-2 ">
          <div className="flex items-center justify-between bg-white dark:bg-[#1D293D] dark:border-0 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div>
              <p className="text-[#717182] mb-1">Active Medicines</p>
              <p className="text-3xl">12</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pill w-6 h-6"
                aria-hidden="true"
              >
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                <path d="m8.5 8.5 7 7"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 w-full p-2 ">
          <div className="flex items-center justify-between bg-white dark:bg-[#1D293D] dark:border-0 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div>
              <p className="text-[#717182] mb-1">Refills Due</p>
              <p className="text-3xl">3</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-alert w-6 h-6"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 w-full p-2 ">
          <div className="flex items-center justify-between bg-white dark:bg-[#1D293D] dark:border-0 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div>
              <p className="text-[#717182] mb-1">Warnings</p>
              <p className="text-3xl">2</p>
            </div>
            <div className="p-4 rounded-lg bg-red-50 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-triangle-alert w-6 h-6"
                aria-hidden="true"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* end analysis */}

      <div className="medicines_content pt-4">
        {/* start addition new medicine */}
     
        <div className="addNewMedicine flex gap-2 justify-between items-center flex-wrap">
          <h2 className=" mx-auto sm:mx-0">Current Medications</h2>

          <Button
            variant="flat"
            className="capitalize mx-auto sm:mx-0 flex justify-between items-center gap-2 text-white px-4 py-2 rounded-xl bg-blue-500"
            onPress={onOpen}
          >
            <FaPlus />
            Add New Medicine
          </Button>

          <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>

                  <ModalBody>
                    <Input label="Medicine name" type="text" />

                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <Input label="Medicine name" type="date" />

                      <Select
                        className="max-w-xs"
                        label="Medicine State"
                        placeholder="Select State"
                      >
                        {medicineState.map((state) => (
                          <SelectItem key={state.key}>{state.label}</SelectItem>
                        ))}
                      </Select>
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>

                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
 

        {/* end addition new medicine */}

        <div className="wrapper-medicine my-4">
          {/* start warning message */}
          {/* <div className="warning_message_medicines relative bg-white dark:bg-[#1D293D] p-6 rounded-xl border-l-4 border-red-500 shadow-md mb-6">
            <button className="absolute top-4 right-4 p-1">
              <IoMdClose />
            </button>
            <div className="flex gap-4">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-triangle-alert w-6 h-6 text-red-600"
                    aria-hidden="true"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-red-600">DRUG INTERACTION WARNING!</h3>
                  <span className="rounded-md border border-red-500 text-white px-2 py-0.5 text-xs font-medium w-fit bg-red-600">
                    HIGH RISK
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Paracetamol may interact with Warfarin
                </p>
                <div className="flex gap-3">
                  <button className="border rounded-md py-2 px-3 text-sm font-medium hover:bg-black/2 dark:hover:bg-white/5 ">
                    View Details
                  </button>
                  <button className="rounded-md py-2 px-3 text-sm font-medium  text-white bg-red-600 hover:bg-red-600/80">
                    Consult Doctor
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* end warning message */}

          {/* start current medicine section */}
          <div className="wrapper-content overflow-hidden flex flex-wrap">

            {currentMedicine?.length!=0&&currentMedicine?.map((data)=><div className=" sm:w-1/2 md:w-1/3 w-full p-2">
              <div className="box my-4 flex gap-4 relative bg-white dark:bg-[#1D293D] p-4 rounded-2xl shadow-sm hover:shadow-md">
                <figure>
                  <img
                    className="sm:w-20 w-16 aspect-square rounded-2xl"
                    src={data?.image}
                    alt="img"
                  />
                </figure>
                <div className="box-text">
                  <h3 className="sm:text-[18px] text-[16px]">{data?.name}</h3>
                  <p className="my-1 text-[#717182] sm:text-[16px] text-[14px]">
                    <span>Dosage:</span> {data?.dosage}
                  </p>
                  <p className="my-1 text-[#717182] sm:text-[16px] text-[14px] flex items-center gap-1">
                    <span>
                      <IoMdTime />
                    </span>
                    {data?.time}
                  </p>
                  <p className="my-1 text-[#717182] sm:text-[16px] text-[14px]">Since {data?.since}</p>
                  <button className="font-medium text-[12px] px-2 rounded-2xl bg-green-100 text-green-700">
                    {data?.status}
                  </button>
                </div>
                <span className="absolute top-4 right-4">
                   <DropDownList />
                </span>
              </div>
            </div>)}
            

          </div>
          {/* end current medicine section */}

          {/* start past medicine section */}
          <div className="past_medicine">
            <div id="accordion-card">
              {/* HEADER */}
              <h2 className="mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-white dark:bg-[#1D293D] rounded-xl shadow-sm hover:text-heading hover:bg-neutral-secondary-medium gap-3
            ${open ? "rounded-b-none shadow-none" : ""}
          `}
                >
                  <span className="text-[14px]">Show Past Medications ({pastMedicine.length!=0?pastMedicine?.length:null})</span>

                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      open ? "rotate-0" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>

              {/* BODY */}
              <div
                id="accordion-card-body-2"
                className={`flex flex-wrap rounded-b-xl px-5 bg-gray-100 dark:bg-[#172132]  overflow-hidden transition-all duration-300
          ${open ? "max-h-fit opacity-100" : "max-h-0 opacity-0"}
        `}
              >
           {pastMedicine?.length!=0&&pastMedicine?.map((data)=><div className=" sm:w-1/2 md:w-1/3 w-full p-2">
              <div className="box my-4 flex gap-4 relative bg-white dark:bg-[#1D293D] p-4 rounded-2xl shadow-sm hover:shadow-md">
                <figure>
                  <img
                    className="sm:w-20 w-16 aspect-square rounded-2xl"
                    src={data?.image}
                    alt="img"
                  />
                </figure>
                <div className="box-text">
                  <h3 className="sm:text-[18px] text-[16px]">{data?.name}</h3>
                  <p className="my-1 text-[#717182] sm:text-[16px] text-[14px]">
                    <span>Dosage:</span> {data?.dosage}
                  </p>
                  <p className="my-1 text-[#717182] sm:text-[16px] text-[14px] flex items-center gap-1">
                    <span>
                      <IoMdTime />
                    </span>
                    {data?.time}
                  </p>
                  <p className="my-1 text-[#717182] sm:text-[16px] text-[14px]">Since {data?.since}</p>
                  <button className="font-medium text-[12px] px-2 rounded-2xl bg-yellow-100 text-yellow-700">
                    {data?.status}
                  </button>
                </div>
                <span className="absolute top-4 right-4">
                  <DropDownList />
                </span>
              </div>
            </div>)}
              </div>
            </div>
          </div>
          {/* end current medicine section */}
        </div>
      </div>
    </div>
  );
}

export default My_medicine;
