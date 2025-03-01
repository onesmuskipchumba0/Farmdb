import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Crop from '@/models/Crop';

export async function GET(request) {
  try {
    await connectDB();

    // First verify database connection by counting documents
    const count = await Crop.countDocuments();
    console.log(`Total crops in database: ${count}`);

    const { searchParams } = new URL(request.url);
    let query = {};

    const term = searchParams.get('term') || '';
    const season = searchParams.get('season');
    const difficulty = searchParams.get('difficulty');
    const type = searchParams.get('type');

    if (term) {
      query.$or = [
        { name: { $regex: term, $options: 'i' } },
        { description: { $regex: term, $options: 'i' } }
      ];
    }
    
    if (season) query.season = season;
    if (difficulty) query.difficulty = difficulty;
    if (type) query.type = type;

    const crops = await Crop.find(query).lean();
    
    console.log('Query results:', {
      total: crops.length,
      names: crops.map(c => c.name)
    });

    return NextResponse.json(crops);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    }, { status: 500 });
  }
}
