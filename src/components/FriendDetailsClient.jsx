"use client";

import Image from "next/image";
import textMessImg from "../assets/text.png"
import videoImg from "../assets/video.png"
import callImg from "../assets/call.png"
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/TimelineProvider";
import { ToastContainer, toast } from 'react-toastify';

const FriendDetailsPage = ({ friend }) => {
    const { timelineData, setTimelineData } = useContext(ThemeContext);

    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;

    const handleAddType = (type, friend) => {

        const newData = {
            ...friend,
            clicked: type,
            time: new Date().toISOString()
        }
        setTimelineData([...timelineData, newData]);
        toast(`Timeline Added ${type}`)
    }

    console.log(timelineData, 'timelineData');

    return (
        <div className="max-w-[1150px] mx-auto py-15 md:py-20 px-5 w-full">
            <div className="flex flex-wrap gap-6 w-full">
                {/* Left Side */}
                <div className="max-w-[350px] min-w-[350px] flex-1">
                    <div className="shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-[8px] flex flex-col items-center p-6 bg-white">
                        <Image src={picture} alt="" width={80} height={80} className="rounded-full"></Image>
                        <h3 className="font-semibold text-[16px] md:text-[20px]">{name}</h3>
                        <ul className="flex flex-wrap justify-center gap-1 mt-2 mb-2">
                            {tags.map((tag, key) => (
                                <li key={key} className="font-medium text-primary bg-[#CBFADB] rounded-full p-1 px-4 text-[12px] uppercase">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <div className={` ${status == 'Almost Due' ? 'bg-[#EFAD44]' : status == 'on_track' ? 'bg-[#EF4444]' : status == 'overdue' ? "bg-[#244D3F]" : ""} font-medium rounded-full p-1 px-4 text-[12px] text-primary-content`}>
                            {status}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <button className="w-full flex border border-[#E9E9E9] p-4 bg-white rounded-[8px] font-medium justify-center text-neutral-content">Snooze 2 weeks</button>
                        <button className="w-full flex border border-[#E9E9E9] p-4 bg-white rounded-[8px] font-medium justify-center text-neutral-content">Archive</button>
                        <button className="w-full flex border border-[#E9E9E9] p-4 bg-white rounded-[8px] font-medium justify-center text-red-600">Delete</button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-wrap gap-6">
                        <div className="shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-[8px] flex flex-col items-center px-4 py-8 bg-white flex-1">
                            <h3 className="text-[24px] md:text-[30px] text-primary font-semibold">{days_since_contact}</h3>
                            <p className="md:text-[18px]">Days Since Contact</p>
                        </div>
                        <div className="shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-[8px] flex flex-col items-center px-4 py-8 bg-white flex-1">
                            <h3 className="text-[24px] md:text-[30px] text-primary font-semibold">{goal}</h3>
                            <p className="md:text-[18px]">Goal (Days)</p>
                        </div>
                        <div className="shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-[8px] flex flex-col items-center px-4 py-8 bg-white flex-1">
                            <h3 className="text-[24px] md:text-[30px] text-primary font-semibold">{next_due_date}</h3>
                            <p className="md:text-[18px]">Next Due</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-6 bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-[8px]">
                        <div className="flex flex-wrap justify-between">
                            <div>
                                <h3 className="font-medium text-[20px] text-primary">Relationship Goal</h3>
                                <p className="text-[18px]">Connect every <strong>30 days</strong></p>
                            </div>
                            <div>
                                <button className="bg-neutral text-neutral-content p-2 px-4 font-medium text-[14px]">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-6 bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-[8px]">
                        <h3 className="font-medium text-[20px] text-primary mb-3">Quick Check-In</h3>
                        <div className="flex flex-wrap gap-4 w-full">
                            <button className="bg-neutral hover:bg-[#eef2f6] text-neutral-content p-4 rounded-[16px] border border-[#E9E9E9] flex-1 flex flex-col items-center cursor-pointer transition" onClick={() => handleAddType('call', friend)}>
                                <Image
                                    src={callImg}
                                    alt={callImg}
                                    width={32}
                                    height={32}
                                >
                                </Image>
                                <span className="text-[18px]">Call</span>
                            </button>
                            <button className="bg-neutral hover:bg-[#ebeff4] text-neutral-content p-4 rounded-[16px] border border-[#E9E9E9] flex-1 flex flex-col items-center cursor-pointer transition" onClick={() => handleAddType('text', friend)}>
                                <Image
                                    src={textMessImg}
                                    alt={textMessImg}
                                    width={32}
                                    height={32}
                                >
                                </Image>
                                <span className="text-[18px]">Text</span>
                            </button>
                            <button className="bg-neutral hover:bg-[#ebeff4] text-neutral-content p-4 rounded-[16px] border border-[#E9E9E9] flex-1 flex flex-col items-center cursor-pointer transition" onClick={() => handleAddType('video', friend)}>
                                <Image
                                    src={videoImg}
                                    alt={videoImg}
                                    width={32}
                                    height={32}
                                >
                                </Image>
                                <span className="text-[18px]">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FriendDetailsPage;
