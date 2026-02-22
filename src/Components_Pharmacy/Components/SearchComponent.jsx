import React from 'react'
import { IoIosSearch } from "react-icons/io"
export default function SearchComponent() {
    return (
        <>
            <main>
                <div className="searchBar ">
                    <div className="w-6/10 mx-auto px-3 py-15 flex justify-center items-center space-x-3">
                        <input type="text" className='w-full bg-white text-slate-900 border-gray-800 rounded-2xl py-3 px-3 outline-0 border-[.5px]' placeholder='search....' />
                        <IoIosSearch className='text-3xl' />
                    </div>
                </div>
            </main>
        </>
    )
}
