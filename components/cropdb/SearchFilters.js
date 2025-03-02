'use client';
import React, { useState, useEffect } from 'react';

export default function SearchFilters({ filters, setFilters }) {
  const [seasons, setSeasons] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        setLoading(true);
        const [seasonsResponse, typesResponse] = await Promise.all([
          fetch('/api/crops/search?getSeasons=true'),
          fetch('/api/crops/search?getTypes=true')
        ]);

        const [seasonsData, typesData] = await Promise.all([
          seasonsResponse.json(),
          typesResponse.json()
        ]);

        setSeasons(seasonsData.sort());
        setTypes(typesData.sort());
      } catch (error) {
        console.error('Error fetching filter options:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilterOptions();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-base-200 rounded-lg mb-6">
      <select
        className="select select-bordered w-full md:w-auto"
        value={filters.season}
        onChange={(e) => setFilters(prev => ({ ...prev, season: e.target.value }))}
        disabled={loading}
      >
        <option value="">All Seasons</option>
        {seasons.map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select>

      <select
        className="select select-bordered w-full md:w-auto"
        value={filters.difficulty}
        onChange={(e) => setFilters(prev => ({ ...prev, difficulty: e.target.value }))}
      >
        <option value="">All Difficulty Levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <select
        className="select select-bordered w-full md:w-auto"
        value={filters.type}
        onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
        disabled={loading}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      {loading && (
        <div className="loading loading-spinner loading-sm"></div>
      )}
    </div>
  );
}
