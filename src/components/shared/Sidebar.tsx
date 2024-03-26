"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const links = [
    { icon: "Exam", route: "dashboard", label: "Dashboard" },
    { icon: "sDashboard", route: "class", label: "Class Management" },
    { icon: "class", route: "staff", label: "Staff Management" },
    { icon: "student", route: "student", label: "Student Management" },
    { icon: "Exam", route: "parent", label: "Parent Management" },
    { icon: "parent", route: "academics Management", label: "academics" },
    { icon: "scholl", route: "school", label: "School Management" },
    { icon: "wallet", route: "finance", label: "Finance Management" },
];
export default function Sidebar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className=" w-[300px] h-[600px] bg-white mt-10 rounded-[8px]">
            <ul>
                {" "}
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={`/${link.route}`}
                        className={`${
                            pathname?.includes(link.route) &&
                            "text-primary bg-[#F3F7FF]"
                        } capitalize flex justify-start items-center px-4 gap-6 w-[252px] h-[56px] mx-auto  hover:bg-primary hover:text-white  rounded-[4px]`}>
                        <Image
                            src={`/assets/images/${link.icon}.svg`}
                            width={100}
                            height={100}
                            sizes="100"
                            className=" h-[22px] w-[26px]"
                            alt="icon"
                        />
                        {link.label}
                    </Link>
                ))}
                <div className="flex bg-secondary/10 w-[250px] mx-auto  items-center gap-3 my-2">
                    {" "}
                    <Image
                        src={`/assets/images/logo.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        alt="logo"
                        className="w-[58.16px] h-[56px]"
                    />{" "}
                    <div>
                        <p className="font-semibold">GoSchool</p>
                        <p>Admin Account</p>
                    </div>
                </div>
            </ul>
        </div>
    );
}
