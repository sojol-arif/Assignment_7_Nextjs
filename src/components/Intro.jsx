import React from 'react';

const Intro = () => {
    return (
        <div className="max-w-[1150px] mx-auto pt-15 md:pt-20 pb-10 px-5">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-[36px] md:text-[48px] font-bold mb-1">Friends to keep close in your life</h1>
                <p className="mb-6 max-w-[600px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="btn btn-accent rounded text-accent-content">+ Add a Friend</button>
            </div>
        </div>
    );
};

export default Intro;