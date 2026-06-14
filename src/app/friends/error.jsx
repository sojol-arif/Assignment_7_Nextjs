"use client";

const Error = () => {
    return (
        <div className='max-w-[1000px] mx-auto container py-15 md:py-20'>
            <h2 className="text-[40px] font-bold">Error</h2>
            <p className="text-red-500">An error occurred while fetching the food details.</p>
        </div>  
    )
};

export default Error;