import React from "react";

type InputProps = {
    type: string;
    name: string;
    required: boolean;
    placeholder: string;
    isPassword: boolean;
    label: string;
};
export default function InputField({
    type,
    name,
    required,
    label,
    placeholder,
    isPassword = false,
}: InputProps) {
    return (
        <div className="">
            <label htmlFor={name} className="text-sm mb-2 ">
                {label}

                {required && (
                    <span className="font-light text-2xl text-error absolute top pl-1">
                        *
                    </span>
                )}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="border-secondary bg-secondary/10 border p-4 rounded-[4px] h-[56px] w-full mb-[24px]"
                id={name}
            />
        </div>
    );
}
