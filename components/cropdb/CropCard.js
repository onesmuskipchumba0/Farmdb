import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CropCard({ crop }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative h-48">
        <Image 
          src={crop.imageUrl} 
          alt={crop.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {crop.name}
          <div className="badge badge-secondary">{crop.type}</div>
        </h2>
        <p className="text-sm text-gray-600 italic">{crop.scientificName}</p>
        <p>{crop.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="badge badge-outline">{crop.season}</div>
          <div className="badge badge-outline">{crop.difficulty}</div>
        </div>

        <div className="mt-4 space-y-2">
          <div>
            <h3 className="font-semibold">Growing Time:</h3>
            <p className="text-sm">{crop.growingTime}</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Regions:</h3>
            <p className="text-sm">{crop.regions.join(', ')}</p>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link href={`/cropdb/${crop.id}`} className="btn btn-primary btn-sm">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
