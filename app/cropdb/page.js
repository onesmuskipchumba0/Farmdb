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
  const [loading, setLoading] = useState(false);

  const searchCrops = async () => {
    if (!searchTerm && !filters.season && !filters.difficulty && !filters.type) return;
    
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        term: searchTerm,
        ...filters
      }).toString();
      
      const response = await fetch(`/api/crops/search?${queryParams}`);
      const data = await response.json();
      setCrops(data);
    } catch (error) {
      console.error('Error fetching crops:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchCrops();
  }, [filters]); // Search automatically when filters change

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
        {crops.map((crop) => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>

      <DiseaseSection diseases={[
        {
          name: "Powdery Mildew",
          description: "A fungal disease that appears as white powdery spots on leaves",
          affectedCrops: ["Tomatoes", "Cucumbers", "Squash"]
        },
        // Add more diseases as needed
      ]} />
    </div>
  );
}
