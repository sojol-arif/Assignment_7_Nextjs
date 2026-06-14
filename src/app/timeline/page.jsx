'use client'
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/TimelineProvider";
import callImg from "../../assets/call.png";
import videoImg from "../../assets/video.png";
import textImg from "../../assets/text.png";
import Image from "next/image";

const TimelinePage = () => {
    const { timelineData, setTimelineData } = useContext(ThemeContext);
    const [timelineFilter, setTimelineFilter] = useState([...timelineData]);

    const handleFilterTimeline = (item) => {
        if (item == 'callF') {
            const newTimelineData = timelineData.filter(t => t.clicked == 'call');
            setTimelineFilter([...newTimelineData]);

        } else if (item == 'textF') {
            const newTimelineData = timelineData.filter(t => t.clicked == 'text');
            setTimelineFilter([...newTimelineData]);
        } else if (item == 'videoF') {
            const newTimelineData = timelineData.filter(t => t.clicked == 'video');
            setTimelineFilter([...newTimelineData]);
        } else {
            setTimelineFilter([...timelineData]);
        }
    }


    return (
        <div className="max-w-[1150px] mx-auto py-15 md:py-20 px-5 w-full">
            <h1 className="font-bold text-[36px] md:text-[48px] mb-6">Timeline </h1>
            <div className="mb-6">
                <select className="border border-[#E9E9E9] bg-white px-4 py-2 rounded-[8px] text-[18px]" onChange={(e) => handleFilterTimeline(e.target.value)}>
                    <option value="">Filter timeline</option>
                    <option value="all">All</option>
                    <option value="textF">Text</option>
                    <option value="callF">Call</option>
                    <option value="videoF">Video</option>
                </select>
            </div>
            <div className="flex flex-col gap-6">
                {timelineFilter.map((timeline) => (
                    <div className="bg-white p-4 rounded-[8px] border border-[#E9E9E9] flex  flex-wrap items-center gap-4" key={timeline.id + timeline.clicked}>
                        {console.log(timeline.id)}
                        <div>
                            <Image
                                src={timeline.clicked == 'call' ? callImg : timeline.clicked == 'video' ? videoImg : timeline.clicked == 'text' ? textImg : ""}
                                alt="image"
                                width={40}
                                height={40}
                            >
                            </Image>
                            { }
                        </div>
                        <div className="flex flex-wrap flex-col gap-1">
                            <div><strong className="font-medium text-[20px] text-primary capitalize">{timeline.clicked}</strong><span className="text-[18px]"> with {timeline.name}</span></div>
                            <span className="font-medium">{timeline?.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelinePage;