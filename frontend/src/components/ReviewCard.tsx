import React from 'react'
import Rating from './Rating';

interface ReviewCardProps {
    reviewText: string;
    reviewRating: number;
    reviewerName: string;
    reviewerStatus: string;
    reviewerAvatar: string;
}

const ReviewCard = ({ reviewText, reviewRating, reviewerName, reviewerStatus, reviewerAvatar }: ReviewCardProps) => {
    return (
        <div className='relative flex-none surface-container-highest w-70 md:w-120 py-12 px-9 rounded-lg shadow-md'>
            <i className="absolute text-2xl  text-gray-500 md:text-3xl right-9 top-10 fa-solid fa-quote-left"></i>
            <Rating rating={reviewRating} />
            <p className='text-gray-700 italic'>"{reviewText}"</p>
            <div className='flex items-center mt-4'>
                <img src={reviewerAvatar} alt="User Avatar" className='w-12 h-12 rounded-full object-cover' />
                <div className='ml-4'>
                    <h4 className='font-bold text-gray-900'>{reviewerName}</h4>
                    <p className='text-sm text-gray-500'>{reviewerStatus}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard