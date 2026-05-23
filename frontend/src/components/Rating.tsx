import React from 'react'

interface RatingProps {
    rating: number;
}

const Rating = ({ rating }: RatingProps) => {
    return (
            <div className="inline-flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={`fa-solid fa-star text-yellow-400 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}></span>
                ))}
            </div>
    )
}

export default Rating