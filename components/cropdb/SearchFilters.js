'use client';
import React, { useState, useEffect } from 'react';

export default function SearchFilters({ filters, setFilters }) {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await fetch('/api/crops/search?getSeasons=true');
        const data = await response.json();
        setSeasons(data);
      } catch (error) {
        console.error('Error fetching seasons:', error);
      }
    };
    fetchSeasons();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-base-200 rounded-lg mb-6">
      <select
        className="select select-bordered w-full md:w-auto"
        value={filters.season}
        onChange={(e) => setFilters(prev => ({ ...prev, season: e.target.value }))}
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
      >
        <option value="">All Types</option>
        <option value="vegetable">Vegetable</option>
        <option value="fruit">Fruit</option>
        <option value="herb">Herb</option>
        <option value="grain">Grain</option>
      </select>
    </div>
  );
}
