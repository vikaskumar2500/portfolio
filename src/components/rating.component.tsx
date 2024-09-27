import React, { memo } from 'react'

type RatingProps = {
  value: number
  className?: string
}

export const Rating = memo(({ value, className = '' }: RatingProps) => (
  <div className={`flex ${className}`}>
    {Array.from({ length: 10 }, (x, i) => i).map((i) => {
      const isActive = value * 2 > i
      const maskClass = i % 2 ? 'mask-half-2' : 'mask-half-1'
      const bgClass = isActive ? 'bg-white' : 'bg-gray-600'
      return (
        <div
          key={i}
          className={`mask mask-star-2 h-[16px] w-[8px] ${bgClass} ${maskClass}`}
        />
      )
    })}
  </div>
))

Rating.displayName = 'Rating'
