import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CropCard({ crop }) {

  if (!crop || !crop.name) {
    console.warn('Invalid crop data received:', crop);
    return null;
  }

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
    imageUrl = 'https://source.unsplash.com/featured/?agriculture'
  } = crop;

  // Add debug info to the UI
  const debug = process.env.NODE_ENV === 'development';

  const difficultyColors = {
    beginner: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    intermediate: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    advanced: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-base-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {debug && (
        <div className="absolute top-0 right-0 z-50 bg-red-500 text-white p-1 text-xs">
          ID: {_id}
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-base-200">
        <Image 
          src={imageUrl}
          alt={name || 'Crop image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            console.log('Image load error:', e);
            e.target.src = "https://source.unsplash.com/featured/?agriculture";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 w-full p-4">
          <h2 className="text-2xl font-bold text-white mb-1">
            {name || 'Unnamed Crop'}
          </h2>
          <p className="text-sm text-gray-200 italic">{scientificName}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Add debug info in development */}
        {debug && (
          <div className="mb-4 p-2 bg-yellow-100 text-xs">
            <pre>{JSON.stringify(crop, null, 2)}</pre>
          </div>
        )}

        {/* Tags Row */}
        <div className="flex flex-wrap gap-2 mb-4">
          {type && (
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-content text-sm font-medium">
              {type}
            </span>
          )}
          {difficulty && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty.toLowerCase()]}`}>
              {difficulty}
            </span>
          )}
          {season && (
            <span className="px-3 py-1 rounded-full bg-base-200 dark:bg-base-300 text-base-content text-sm font-medium">
              {season}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-base-content/80 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          {growingTime && (
            <div>
              <span className="text-base-content/60">Growing Time</span>
              <p className="font-medium text-base-content">{growingTime}</p>
            </div>
          )}
          {regions.length > 0 && (
            <div>
              <span className="text-base-content/60">Regions</span>
              <p className="font-medium text-base-content line-clamp-1">{regions.join(', ')}</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link 
          href={`/cropdb/${_id}`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary hover:bg-primary-focus px-4 py-2.5 text-sm font-semibold text-primary-content shadow-sm transition-colors duration-200"
        >
          View Details
          <svg 
            className="ml-2 h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
