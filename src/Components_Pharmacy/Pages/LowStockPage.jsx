import React, { useContext, useState } from 'react'
import { StockContext } from '../Contexts/StockContext';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineMore } from 'react-icons/ai';

export default function LowStockPage() {
    let { lowStock } = useContext(StockContext)
    return (
        <>

            <Table>

                <TableHeader>
                    <TableColumn key="id">id</TableColumn>
                    <TableColumn key="name">name</TableColumn>
                    <TableColumn key="code">code</TableColumn>
                    <TableColumn key="quantity">quantity</TableColumn>
                    <TableColumn key="unitPrice">unitPrice</TableColumn>
                    <TableColumn key="category">category</TableColumn>
                    <TableColumn key="expiryDate">expiryDate</TableColumn>
                    <TableColumn key="status">status</TableColumn>
                    <TableColumn key="actions">actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {lowStock.map((med) =>
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
