"use client";

import Friend from '@/components/Friend';
import { useState, useEffect } from 'react';

const FriendsSection = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const loadFriends = async () => {
            const response = await fetch("https://assignment7nextjsbatch13-n5zha7dhv-arif-s-projects3.vercel.appfriends.json");
            const data = await response.json();
            setFriends(data);
        };

        loadFriends();
    }, []);

    return (
        <div className="max-w-[1150px] mx-auto py-10 px-5">
            <h2 className="text-[24px] font-semibold mb-6">Your Friends</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {friends.map((friend, key) => (
                    <Friend key={key} friend={friend}></Friend>
                ))}
            </div>
        </div>
    );
};

export default FriendsSection;
