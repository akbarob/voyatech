"use client";
import Dashboardlayout from "@/components/layouts/dashboard/dashboard.layout";
import Breadcrumb from "@/components/shared/breadcrumb";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const subject = [
    {
        subject: "English",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "Maths",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "Econs",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "computer",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "subject",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "subject",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
];
export default function Page() {
    const [page, setPage] = React.useState(1);

    const handlePageChange = (event: any, value: any) => {
        setPage(value);
        alert(value);
    };
    return (
        <Dashboardlayout>
            <div>
                <div>
                    <Breadcrumb
                        route="Academics & Results"
                        sroute={"subject"}
                    />
                </div>
                <div className="bg-white rounded-[8px] w-full">
                    <div className="flex justify-between w-[1150px] p-2">
                        <div>
                            <p>All subjects</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-[#F7F9FC] border border-secondary rounded-[8px] px-4 py-2">
                                import{" "}
                            </button>
                            <button className="bg-[#F7F9FC] border border-secondary rounded-[8px] px-4 py-2">
                                Add Subject{" "}
                            </button>
                        </div>
                    </div>
                    <div className="h-full">
                        {subject.map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-2 h-[56px] odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2">
                                <div className="w-[200px] capitalize">
                                    {item.subject}
                                </div>
                                <div className="capitalize">
                                    {item.instructor}
                                </div>
                                <div>{item.EnroolledStudents}</div>
                                <div>
                                    <button className="text-[#036B26] bg-[#036B26]/10 px-3 py-2 capitalize font-semibold">
                                        {" "}
                                        {item.status}
                                    </button>
                                </div>
                                <div>
                                    {" "}
                                    <button className="text-[#0D6EFD]  px-3 py-2 capitalize font-semibold">
                                        {" "}
                                        Edit
                                    </button>
                                    <button className="text-[#0D6EFD] px-3 py-2 capitalize font-semibold">
                                        {" "}
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mx-auto mt-14">
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            page={page}
                            shape="rounded"
                            color="primary"
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
            </div>
        </Dashboardlayout>
    );
}
