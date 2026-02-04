import React, { useContext, useEffect, useState } from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
    getKeyValue,
} from "@heroui/react";
import useSWR from "swr";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineMore } from 'react-icons/ai';
import { StockContext } from '../Contexts/StockContext';

export default function StaticMedicineTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    let {data,setData}=useContext(StockContext)

    const pages = Math.ceil(data.length / rowsPerPage);
    const currentMedicine = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    return (
        <>
            <Table
                aria-label="Example table with client async pagination"
                bottomContent={
                    pages > 1 && (
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="primary"
                                page={currentPage}
                                total={pages}
                                onChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    )
                }
            >
                <TableHeader>
                    <TableColumn key="name">id</TableColumn>
                    <TableColumn key="height">name</TableColumn>
                    <TableColumn key="mass">code</TableColumn>
                    <TableColumn key="birth_year">quantity</TableColumn>
                    <TableColumn key="birth_year">unitPrice</TableColumn>
                    <TableColumn key="birth_year">category</TableColumn>
                    <TableColumn key="birth_year">expiryDate</TableColumn>
                    <TableColumn key="birth_year">status</TableColumn>
                    <TableColumn key="ِActions">actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {currentMedicine.map((med) =>
                        <TableRow>
                            <TableCell>{med.id}</TableCell>
                            <TableCell>{med.name}</TableCell>
                            <TableCell>{med.code}</TableCell>
                            <TableCell>{med.quantity}</TableCell>
                            <TableCell>{med.unitPrice}</TableCell>
                            <TableCell>{med.category}</TableCell>
                            <TableCell>{med.expiryDate}</TableCell>
                            <TableCell>{med.status}</TableCell>
                            <TableCell className='flex justify-between items-center'>
                                <AiOutlineEye className="text-gray-600 cursor-pointer text-xl" />
                                <AiOutlineEdit className="text-primary cursor-pointer text-xl" />
                                <AiOutlineDelete className="text-red-500 cursor-pointer text-xl" />
                                <AiOutlineMore className="text-gray-600 cursor-pointer text-xl" />
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </>
    )
}
