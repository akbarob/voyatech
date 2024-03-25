import React from "react";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";

export default function Dashboardlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col ">
            <Header />
            <div className="bg-[#F0F2F5] flex justify-between">
                <div className="flex justify-start px-5">
                    <Sidebar />
                </div>

                <main className="flex flex-1 w-full p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
