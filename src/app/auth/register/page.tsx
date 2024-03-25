import InputField from "@/app/components/ui/input/input";
import Image from "next/image";
import { Input } from "postcss";
import React from "react";

export default function Page() {
    return (
        <div className="flex justify-between  w-full h-screen">
            <div className="w-1/2 px-[80px] py-[39px] flex  flex-col justify-between ">
                <div className="flex justify-between items-center">
                    <Image
                        src={`/assets/images/logo.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        alt="logo"
                        className="w-[58.16px] h-[56px]"
                    />
                    <div>
                        <p>
                            Are you new to GoPaddi?
                            <span className="text-primary">Sign Up</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-[36px]">
                        Create an Account
                    </h1>
                    <p className="text-[18px]  max-w-[413px] w-full">
                        Create your GoPaddi account and get started in minutes.
                    </p>
                    <div>
                        <button className=" flex justify-center items-center gap-[12px] w-full h-[56px] rounded-[4px] border border-secondary">
                            <Image
                                src={`/assets/images/google.svg`}
                                width={100}
                                height={100}
                                sizes="100"
                                alt="logo"
                                className="w-[20px] h-[20px]"
                            />
                            <p>Login with google</p>
                        </button>
                        <div className="flex justify-between items-center w-full my-[12px]">
                            <div className="w-[200px] h-[2px] bg-secondary" />{" "}
                            <p>Or continue with email</p>{" "}
                            <div className="w-[200px] h-[2px] bg-secondary" />
                        </div>
                    </div>
                    <div>
                        <form className="w-full">
                            <div className="flex justify-between">
                                <div className="">
                                    <InputField
                                        type="text"
                                        name="email"
                                        required={true}
                                        label={`email`}
                                        placeholder="your@email.com"
                                        isPassword={false}
                                    />
                                </div>
                                <div className="">
                                    <InputField
                                        type="text"
                                        name="email"
                                        required={true}
                                        label={`email`}
                                        placeholder="your@email.com"
                                        isPassword={false}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <InputField
                                        type="text"
                                        name="email"
                                        required={true}
                                        label={`email`}
                                        placeholder="your@email.com"
                                        isPassword={false}
                                    />
                                </div>
                                <div className="">
                                    <InputField
                                        type="text"
                                        name="email"
                                        required={true}
                                        label={`email`}
                                        placeholder="your@email.com"
                                        isPassword={false}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <InputField
                                        type="text"
                                        name="email"
                                        required={true}
                                        label={`email`}
                                        placeholder="your@email.com"
                                        isPassword={false}
                                    />
                                </div>
                                <div className="">
                                    <InputField
                                        type="text"
                                        name="email"
                                        required={true}
                                        label={`email`}
                                        placeholder="your@email.com"
                                        isPassword={false}
                                    />
                                </div>
                            </div>

                            <div className="flex  w-full justify-between">
                                <div className="flex ">
                                    <input type="checkbox" />{" "}
                                    <p>
                                        By checking this box and clicking
                                        &quot;Sign Up &quot;, you acknowledge
                                        and agree to the Terms & Conditions,
                                        Privacy Policy, and Cookie Policy.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full h-[56px] rounded-[4px] flex justify-center items-center border border-secondary">
                                Sign up
                            </button>
                        </form>
                    </div>
                    <footer>
                        <p className="">
                            © 2024  Gopaddi. All rights reserved.
                        </p>
                    </footer>
                </div>
            </div>

            <div className="relative w-1/2">
                <Image
                    src={`/assets/images/registerBG.png`}
                    width={100}
                    height={100}
                    sizes="100"
                    className=" w-full h-full"
                    alt="bg"
                />
                <div className="absolute inset-0 bg-transparent z-50">
                    {/* <p>Welcome to Gopaddi !!</p> */}
                    {/* <p>
                        Welcome to Gopaddi, your one-stop shop for unforgettable
                        travel experiences! Dive into curated getaways, explore
                        hidden gems, and unlock exclusive deals. Let&s turn your
                        travel dreams into memories that last a lifetime.
                        Explore with us!{" "}
                    </p> */}
                </div>
            </div>
        </div>
    );
}
