import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Crop from '@/models/Crop';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term') || '';
    const season = searchParams.get('season');
    const difficulty = searchParams.get('difficulty');
    const type = searchParams.get('type');

    await connectDB();

    let query = {};
    
    if (term) {
      query.$or = [
        { name: { $regex: term, $options: 'i' } },
        { description: { $regex: term, $options: 'i' } }
      ];
    }
    
    if (season) query.season = season;
    if (difficulty) query.difficulty = difficulty;
    if (type) query.type = type;

    const crops = await Crop.find(query).limit(20);
    return NextResponse.json(crops);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
