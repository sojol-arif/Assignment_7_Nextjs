"use client";

import { useEffect, useState } from 'react'

const CountHome = () => {
    const [states, setStates] = useState({
        totalFriends: 0,
        onTrack: 0,
        needAttention: 0,
        interaction: 0,
    });

    useEffect(() => {
        const loadFriends = async () => {
            const response = await fetch("https://assignment7nextjsbatch13.vercel.app/friends.json");
            const data = await response.json();
            setStates({
                totalFriends: data.length,
                onTrack: data.filter((friend) => friend.status == 'on_track').length,
                needAttention: data.filter((friend) => friend.status == 'Almost Due' || friend.status == 'overdue').length,
                interaction: 7,
            });
        };

        loadFriends();
    }, []);

    console.log(states, 'states');


    const stateData = [
        { number: states.totalFriends, text: "Total Friends" },
        { number: states.onTrack, text: "On Track" },
        { number: states.needAttention, text: "Need Attention" },
        { number: states.interaction, text: "Interactions This Month" },
    ]

    return (
        <div className="">
            <div className='max-w-[1150px] mx-auto py-10 pt-0 px-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
                    {stateData.map((state, key) => (
                        <div key={key} className="shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-[8px] text-center p-8 max-w-[295px] w-full bg-white">
                            <div className='font-semibold text-[32px] text-accent mb-1'>{state.number}</div>
                            <span className='text-center text-[18px]'>{state.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='max-w-[1150px] mx-auto px-5'>
                <div className="border-t border-[#E9E9E9]" ></div>
            </div>
        </div>
    );
};

export default CountHome;