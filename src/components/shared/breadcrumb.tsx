"use client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    route: string;
    sroute?: string;
};

export default function Breadcrumb({ route, sroute }: Props) {
    return (
        <div className="flex mb-5">
            <p>Home /</p>
            <p className={`${route && !sroute && "font-semibold"}`}>{route} </p>
            {sroute && <p className="font-bold">{`/${sroute}`}</p>}
        </div>
    );
}
