import React from 'react';

export default function DiseaseSection({ diseases }) {
  return (
    <div className="mt-8 p-6 bg-base-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Common Crop Diseases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {diseases.map((disease, index) => (
          <div key={index} className="bg-base-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{disease.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{disease.description}</p>
            <div className="mt-2">
              <span className="text-xs font-medium">Affected crops: </span>
              <span className="text-xs text-gray-500">{disease.affectedCrops.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
