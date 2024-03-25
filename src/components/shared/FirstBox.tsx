import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    digit: number;
    icon: any;
};

export default function FirstBox({ title, digit, icon }: Props) {
    return (
        <div className="bg-[#FAFCFF] w-full h-[120px] rounded-[6px] p-4">
            <p className="text-[#667185]">{title}</p>
            <div className="flex justify-between p-4">
                <p className="font-bold">{digit}</p>
                <div className="bg-primary/10 rounded-full p-2">
                    <Image
                        src={`/assets/images/${icon}.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[22px] w-[26px]"
                        alt="icon"
                    />
                </div>
            </div>
        </div>
    );
}
