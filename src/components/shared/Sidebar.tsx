"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const links = [
    { icon: "Exam", route: "dashboard" },
    { icon: "Exam", route: "Class Management" },
    { icon: "Exam", route: "Staff Management" },
    { icon: "Exam", route: "Student Management" },
    { icon: "Exam", route: "Parent Management" },
    { icon: "Exam", route: "Academics" },
    { icon: "Exam", route: "School Management" },
    { icon: "Exam", route: "Finance Management" },
];
export default function Sidebar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className=" w-[300px] h-[500px] bg-white mt-10 rounded-[8px]">
            <ul>
                {" "}
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={`/${link.route}`}
                        className={`${
                            pathname?.includes(link.route) &&
                            "text-primary bg-[#F3F7FF] rounded-[4px]"
                        } capitalize flex justify-start items-center px-4 gap-6 w-[252px] h-[56px] mx-auto`}>
                        <Image
                            src={`/assets/images/${link.icon}.svg`}
                            width={100}
                            height={100}
                            sizes="100"
                            className=" h-[22px] w-[26px]"
                            alt="icon"
                        />
                        {link.route}
                    </Link>
                ))}
            </ul>
        </div>
    );
}
