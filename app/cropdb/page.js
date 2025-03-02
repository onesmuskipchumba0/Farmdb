'use client'
import React, { useState, useEffect } from 'react';
import SearchFilters from '@/components/cropdb/SearchFilters';
import CropCard from '@/components/cropdb/CropCard';
import DiseaseSection from '@/components/cropdb/DiseaseSection';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    season: '',
    difficulty: '',
    type: ''
  });
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchCrops = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        term: searchTerm,
        ...filters
      }).toString();
      
      const response = await fetch(`/api/crops/search?${queryParams}`);
      const data = await response.json();
      
      console.log('Received data:', data);
      
      if (!Array.isArray(data)) {
        console.error('Received non-array data:', data);
        setCrops([]);
        return;
      }

      // Filter out invalid crop entries
      const validCrops = data.filter(crop => 
        crop && 
        crop.name && 
        typeof crop.name === 'string'
      );

      console.log('Valid crops:', validCrops.map(c => c.name));
      setCrops(validCrops);
    } catch (error) {
      console.error('Search error:', error);
      setCrops([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load of crops
  useEffect(() => {
    searchCrops();
  }, []); // Empty dependency array for initial load

  // Search when filters change
  useEffect(() => {
    if (!loading) { // Prevent double loading on initial render
      searchCrops();
    }
  }, [filters]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Crop Database</h1>
      
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search crops..."
          className="input input-bordered flex-grow"
          onKeyPress={(e) => e.key === 'Enter' && searchCrops()}
        />
        <button
          onClick={searchCrops}
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <SearchFilters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {loading ? (
          <div className="col-span-full text-center py-8">
            <div className="loading loading-spinner loading-lg"></div>
            <p className="mt-4">Loading crops...</p>
          </div>
        ) : crops.length > 0 ? (
          crops.map((crop) => (
            crop?.name ? (
              <CropCard key={crop._id} crop={crop} />
            ) : null
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-xl">No crops found</p>
            <p className="text-base-content/70 mt-2">Database might be empty. Try running the seed script.</p>
          </div>
        )}
      </div>

      <DiseaseSection />
    </div>
  );
}
