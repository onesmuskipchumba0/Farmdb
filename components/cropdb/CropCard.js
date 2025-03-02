import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const fallbackImage = "/images/crops/placeholder.jpg";

export default function CropCard({ crop }) {
  if (!crop?.name) return null;

  const {
    _id,
    name,
    type,
    scientificName,
    description,
    season,
    difficulty,
    growingTime,
    regions = [],
    imageUrl = fallbackImage
  } = crop;

  const difficultyColors = {
    beginner: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    intermediate: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    advanced: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-base-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-base-200">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => { e.currentTarget.src = fallbackImage }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Title Section - Overlapping Image */}
      <div className="relative -mt-16 px-4">
        <div className="bg-base-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-1 line-clamp-1">{name}</h2>
          <p className="text-sm text-base-content/70 italic line-clamp-1">{scientificName}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {type && (
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-content text-xs font-medium">
              {type}
            </span>
          )}
          {difficulty && (
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColors[difficulty.toLowerCase()]}`}>
              {difficulty}
            </span>
          )}
          {season && (
            <span className="px-2.5 py-0.5 rounded-full bg-base-200 dark:bg-base-300 text-base-content text-xs font-medium">
              {season}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-base-content/80 line-clamp-2">
          {description}
        </p>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {growingTime && (
            <div className="bg-base-200/50 p-2 rounded">
              <span className="block text-xs text-base-content/60">Growing Time</span>
              <p className="font-medium text-base-content">{growingTime}</p>
            </div>
          )}
          {regions.length > 0 && (
            <div className="bg-base-200/50 p-2 rounded">
              <span className="block text-xs text-base-content/60">Regions</span>
              <p className="font-medium text-base-content line-clamp-1">{regions.join(', ')}</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link 
          href={`/cropdb/${_id}`}
          className="btn btn-primary btn-sm w-full gap-2 mt-2"
        >
          View Details
          <svg 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7-7 7M3 12h17" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
