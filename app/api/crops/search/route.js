import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Crop from '@/models/Crop';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    
    // Get distinct seasons for dropdown
    if (searchParams.get('getSeasons') === 'true') {
      const seasons = await Crop.distinct('season');
      return NextResponse.json(seasons);
    }

    // Get distinct diseases for disease section
    if (searchParams.get('getDiseases') === 'true') {
      const crops = await Crop.find({}).lean();
      const diseases = crops.reduce((acc, crop) => {
        crop.commonDiseases?.forEach(disease => {
          acc.push({
            ...disease,
            affectedCrop: crop.name
          });
        });
        return acc;
      }, []);
      return NextResponse.json(diseases);
    }

    // Regular search functionality
    let query = {};
    const term = searchParams.get('term') || '';
    const season = searchParams.get('season');
    const difficulty = searchParams.get('difficulty');
    const type = searchParams.get('type');
    const disease = searchParams.get('disease');

    if (term) {
      query.$or = [
        { name: { $regex: term, $options: 'i' } },
        { description: { $regex: term, $options: 'i' } },
        { 'commonDiseases.name': { $regex: term, $options: 'i' } }
      ];
    }
    
    if (season) query.season = season;
    if (difficulty) query.difficulty = difficulty;
    if (type) query.type = type;
    if (disease) {
      query['commonDiseases.name'] = { $regex: disease, $options: 'i' };
    }

    const crops = await Crop.find(query).lean();
    return NextResponse.json(crops);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
