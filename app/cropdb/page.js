'use client'
import React, { useState } from 'react'

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCrops = async () => {
    if (!searchTerm) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/crops/search?term=${searchTerm}`);
      const data = await response.json();
      setCrops(data);
    } catch (error) {
      console.error('Error fetching crops:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Crop Database</h1>
      
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search crops..."
          className="p-2 border rounded-md flex-grow"
        />
        <button
          onClick={searchCrops}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crops.map((crop) => (
          <div key={crop.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{crop.name}</h2>
            <p className="text-gray-600">{crop.description}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-500">Growing season: {crop.season}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
