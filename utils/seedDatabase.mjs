import mongoose from 'mongoose';
import Crop from '../models/Crop.mjs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import * as dotenv from 'dotenv';
import { crops } from '../data/cropData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, '../.env.local') });

// Verify MONGODB_URI is loaded
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

async function seedDatabase() {
  let connection;
  try {
    console.log('Connecting to MongoDB...');
    connection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected successfully to MongoDB');

    // Drop the existing collection
    await connection.connection.collection('crops').drop().catch(() => {
      console.log('No existing crops collection to drop');
    });
    console.log('Cleared existing data');

    // Insert new crops
    const insertedCrops = await Crop.create(crops);
    console.log(`Successfully inserted ${insertedCrops.length} crops`);
    
    // Verify the data
    const verificationCrops = await Crop.find({}).lean();
    console.log('Verification - First crop:', verificationCrops[0]?.name);
    console.log('Verification - Total crops:', verificationCrops.length);

  } catch (error) {
    console.error('Error seeding database:', error);
    if (error.errors) {
      Object.keys(error.errors).forEach(key => {
        console.error(`Validation error for field "${key}":`, error.errors[key].message);
      });
    }
  } finally {
    if (connection) {
      await connection.disconnect();
      console.log('Disconnected from MongoDB');
    }
    process.exit(0);
  }
}

seedDatabase();
