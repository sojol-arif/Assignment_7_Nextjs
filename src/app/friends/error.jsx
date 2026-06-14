"use client";

const error = () => {
    return (
        <div className='max-w-[1000px] mx-auto container py-10'>
            <h2>Error</h2>
            <p className="text-red-500">An error occurred while fetching the food details.</p>
        </div>  
    )
};

export default error;