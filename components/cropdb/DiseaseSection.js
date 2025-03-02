'use client';
import React, { useState, useEffect } from 'react';

export default function DiseaseSection() {
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await fetch('/api/crops/search?getDiseases=true');
        const data = await response.json();
        setDiseases(data);
      } catch (error) {
        console.error('Error fetching diseases:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDiseases();
  }, []);

  if (loading) {
    return <div className="loading loading-spinner loading-lg"></div>;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Common Crop Diseases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diseases.map((disease, index) => (
          <div key={index} className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-lg">{disease.name}</h3>
              <p className="text-sm text-base-content/70">
                Affects: <span className="font-medium">{disease.affectedCrop}</span>
              </p>
              <p className="mt-2">{disease.description}</p>
              {disease.symptoms?.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium">Symptoms:</h4>
                  <ul className="list-disc list-inside">
                    {disease.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-sm">{symptom}</li>
                    ))}
                  </ul>
                </div>
              )}
              {disease.treatment && (
                <div className="mt-4">
                  <h4 className="font-medium">Treatment:</h4>
                  <p className="text-sm">{disease.treatment}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
