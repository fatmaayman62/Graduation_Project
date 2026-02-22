import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from "@heroui/button";
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
import axios from 'axios';
export default function MedicineTable() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const [page, setPage] = React.useState(1);
    const [medicine, setMedicine] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    async function getData() {
        setIsLoading(true)
        let {data} = await axios.get(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
            keepPreviousData: true,
        })
        console.log(data)
        setIsLoading(false)
        setMedicine(data)
    }



    useEffect(() => {
        getData()
    }, [page])
    const rowsPerPage = 10;

    const pages = React.useMemo(() => {
        return medicine?.count ? Math.ceil(medicine.count / rowsPerPage) : 0;
    }, [medicine?.count, rowsPerPage]);
    const loadingState = isLoading || medicine?.results?.length === 0 ? "loading" : "idle";
    return (
        <>
            <Table
                aria-label="Example table with client async pagination"
                bottomContent={
                    pages > 0 ? (
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    ) : null
                }
            >
                <TableHeader>
                    <TableColumn key="name">Image</TableColumn>
                    <TableColumn key="height">Medicine Name	</TableColumn>
                    <TableColumn key="mass">Code</TableColumn>
                    <TableColumn key="birth_year">Category</TableColumn>
                    <TableColumn key="birth_year">Quantity</TableColumn>
                    <TableColumn key="birth_year">Unit Price</TableColumn>
                    <TableColumn key="birth_year">Expiry Date</TableColumn>
                    <TableColumn key="birth_year">Status</TableColumn>
                </TableHeader>
                <TableBody
                    items={medicine?.results ?? []}
                    loadingContent={<Spinner />}
                    loadingState={loadingState}
                >
                    {(item) => (
                        <TableRow key={item?.name}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </>
    )
}
