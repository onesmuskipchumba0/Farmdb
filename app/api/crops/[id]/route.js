import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Crop from '@/models/Crop';
import mongoose from 'mongoose';

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const crop = await Crop.findById(params.id).lean();
    
    if (!crop) {
      return NextResponse.json({ error: 'Crop not found' }, { status: 404 });
    }

    return NextResponse.json(crop);
  } catch (error) {
    console.error('Error fetching crop:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
