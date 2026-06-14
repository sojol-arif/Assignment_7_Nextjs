'use client'
import { useContext } from "react";
import { ThemeContext } from "@/context/TimelineProvider";
import callImg from "../../assets/call.png";
import videoImg from "../../assets/video.png";
import textImg from "../../assets/text.png";
import Image from "next/image";

const TimelinePage = () => {
    const { timelineData, setTimelineData } = useContext(ThemeContext);
    console.log(timelineData, 'TimelineData from Timeline Page');

    return (
        <div className="max-w-[1150px] mx-auto py-15 md:py-20 px-5 w-full">
            <h1 className="font-bold text-[36px] md:text-[48px] mb-6">Timeline </h1>
            <div className="mb-6">
                <select>
                    
                </select>
            </div>
            <div className="flex flex-col gap-6">
                {timelineData.map((timeline) => (
                    <div className="bg-white p-4 rounded-[8px] border border-[#E9E9E9] flex  flex-wrap items-center gap-4" key={timeline.id}>
                        <div>
                            <Image
                                src={timeline.clicked == 'call'? callImg : timeline.clicked == 'video'? videoImg : timeline.clicked == 'text' ? textImg : ""}
                                alt="image"
                                width={40}
                                height={40}
                            >
                            </Image>
                            { }
                        </div>
                        <div className="flex flex-wrap flex-col gap-1">
                            <div><strong className="font-medium text-[20px] text-primary capitalize">{timeline.clicked}</strong><span className="text-[18px]"> with {timeline.name}</span></div>
                            <span className="font-medium">{timeline.time.split('T')[0]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelinePage;