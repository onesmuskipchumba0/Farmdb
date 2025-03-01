import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  // Mock data - Replace this with your actual database query
  const mockCrops = [
    { id: 1, name: 'Tomato', description: 'Red vegetable/fruit', season: 'Summer' },
    { id: 2, name: 'Corn', description: 'Tall grain crop', season: 'Summer' },
    { id: 3, name: 'Lettuce', description: 'Leafy green vegetable', season: 'Spring/Fall' },
  ];

  const filteredCrops = mockCrops.filter(crop => 
    crop.name.toLowerCase().includes(term.toLowerCase())
  );

  return NextResponse.json(filteredCrops);
}
