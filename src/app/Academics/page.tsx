import Dashboardlayout from "@/components/layouts/dashboard/dashboard.layout";
import FirstBox from "@/components/shared/FirstBox";
import Breadcrumb from "@/components/shared/breadcrumb";
import Image from "next/image";
import Chart from "chart.js/auto";
import Link from "next/link";
import MyChart from "@/components/shared/Chart";
const quicklinks = [
    { icon: "subject", route: "subjects" },
    { icon: "grade", route: "grade" },
    { icon: "subject", route: "Assignments" },
    { icon: "subject", route: "Reports" },
    { icon: "subject", route: "Grading system" },
];

export default function Home() {
    return (
        <main className="text-black">
            <Dashboardlayout>
                <div className="flex flex-col">
                    <div>
                        <Breadcrumb route="Academics & Results" />
                    </div>
                    <div className="grid grid-cols-3 w-full justify-between items-center gap-8 mx-auto mb-5">
                        <FirstBox
                            title="All SUbjetcs"
                            digit={43}
                            icon={"laptop"}
                        />
                        <FirstBox
                            title="Active class"
                            digit={43}
                            icon={"laptop"}
                        />
                        <FirstBox
                            title="Inactive classes"
                            digit={8}
                            icon={"laptop"}
                        />
                    </div>
                    <div>
                        <p className="font-semibold my-2">Quick Links</p>
                        <div className="grid grid-cols-5 gap-10">
                            {" "}
                            {quicklinks.map((item, i) => (
                                <Link
                                    href={`Academics/Subjects`}
                                    key={i}
                                    className="p-4 w-[full] h-[120px] bg-white rounded-[8px] flex flex-col">
                                    <div
                                        className={` ${
                                            item.icon === "grade"
                                                ? "bg-primary/10"
                                                : "bg-green-200"
                                        } rounded-full w-[70px] h-[70px]  flex justify-center items-center`}>
                                        {" "}
                                        <Image
                                            src={`/assets/images/${item.icon}.svg`}
                                            width={100}
                                            height={100}
                                            sizes="100"
                                            className=" h-[42px] w-[42px] flex items-center justify-center"
                                            alt="icon"
                                        />
                                    </div>

                                    <p className="text-[20px] capitalize">
                                        {item.route}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-full justify-between items-center flex mt-12 gap-4">
                        <div className="w-[47%] h-full bg-white rounded-[8px] p-5">
                            <div className="w-full flex  justify-between items-center">
                                <div className="flex flex-col justify-start items-start">
                                    <p>Top Subjects</p>
                                    <p>Per class</p>
                                </div>
                                <div className="fle flex-col justify-start items-start">
                                    <p>Select Class</p>
                                    <div>
                                        <select className="w-[150px] h-[50px] border border-secondary rounded-[8px]">
                                            <option>Class 1A</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <MyChart />
                            </div>
                        </div>
                        <div className="w-[47%] h-[475px] bg-white rounded-[8px] p-5">
                            <div className="w-full flex  justify-between items-center">
                                <div className="flex flex-col justify-start items-start">
                                    <p>Performance</p>
                                    <p>Per term</p>
                                </div>
                                <div className="fle flex-col justify-start items-start">
                                    <p>Select Class</p>
                                    <div>
                                        <select className="w-[150px] h-[50px] border border-secondary rounded-[8px] accent-secondary">
                                            <option>Class 1A</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </Dashboardlayout>
        </main>
    );
}
