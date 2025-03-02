import mongoose from 'mongoose';
import Crop from '../models/Crop.mjs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import * as dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, '..//.env.local') });

// Verify MONGODB_URI is loaded
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const cropImages = {
  maize: "/images/crops/maize.jpg",
  tea: "/images/crops/tea.jpg",
  beans: "/images/crops/beans.jpg",
  coffee: "/images/crops/coffee.jpg",
  sweetPotato: "/images/crops/sweet-potato.jpg",
  cassava: "/images/crops/cassava.jpg"
};

const diseaseImages = {
  maizeStreak: "/images/diseases/maize-streak.jpg",
  rootRot: "/images/diseases/root-rot.jpg",
  beanRust: "/images/diseases/bean-rust.jpg",
  coffeeDisease: "/images/diseases/coffee-disease.jpg",
  sweetPotatoVirus: "/images/diseases/sweet-potato-virus.jpg",
  cassavaMosaic: "/images/diseases/cassava-mosaic.jpg"
};

const crops = [
  {
    name: "Maize",
    scientificName: "Zea mays",
    description: "Kenya's most important cereal crop, grown in various regions",
    type: "grain",
    season: "long rains",
    difficulty: "intermediate",
    growingTime: "90-120 days",
    imageUrl: cropImages.maize,
    commonDiseases: [
      {
        name: "Maize Streak Virus",
        description: "Viral disease causing yellow streaks on leaves",
        symptoms: ["Yellow streaks", "Stunted growth"],
        treatment: "Use resistant varieties",
        imageUrl: diseaseImages.maizeStreak
      }
    ],
    plantingInstructions: {
      soilType: "Well-drained loam soil",
      sunlight: "Full sun",
      watering: "Regular watering",
      spacing: "75cm between rows"
    },
    regions: ["Western", "Rift Valley"]
  },
  {
    name: "Tea",
    scientificName: "Camellia sinensis",
    description: "Major cash crop in Kenya's highlands",
    type: "beverage",
    season: "perennial",
    difficulty: "advanced",
    growingTime: "3-5 years to maturity",
    imageUrl: cropImages.tea,
    commonDiseases: [
      {
        name: "Root Rot",
        description: "Fungal disease affecting roots",
        symptoms: ["Wilting", "Yellowing leaves"],
        treatment: "Improve drainage",
        imageUrl: diseaseImages.rootRot
      }
    ],
    plantingInstructions: {
      soilType: "Rich, acidic soil",
      sunlight: "Partial shade",
      watering: "Regular rainfall",
      spacing: "1.2m between plants"
    },
    regions: ["Central", "Rift Valley"]
  },
  {
    name: "Beans",
    scientificName: "Phaseolus vulgaris",
    description: "Common legume crop in Kenya",
    type: "legume",
    season: "both seasons",
    difficulty: "beginner",
    growingTime: "60-90 days",
    imageUrl: cropImages.beans,
    commonDiseases: [
      {
        name: "Bean Rust",
        description: "Fungal disease causing rust spots",
        symptoms: ["Red-brown spots", "Leaf damage"],
        treatment: "Fungicide application",
        imageUrl: diseaseImages.beanRust,
      }
    ],
    plantingInstructions: {
      soilType: "Well-drained soil",
      sunlight: "Full sun",
      watering: "Moderate",
      spacing: "30cm between plants"
    },
    regions: ["Eastern", "Central"]
  },
  {
    name: "Coffee",
    scientificName: "Coffea arabica",
    description: "High-value cash crop grown in Kenya's highlands",
    type: "beverage",
    season: "perennial",
    difficulty: "advanced",
    growingTime: "3-4 years to maturity",
    imageUrl: cropImages.coffee,
    commonDiseases: [
      {
        name: "Coffee Berry Disease",
        description: "Fungal disease affecting coffee berries",
        symptoms: ["Dark lesions on berries", "Premature berry drop"],
        treatment: "Fungicide application and proper spacing",
        imageUrl: diseaseImages.coffeeDisease,
      }
    ],
    plantingInstructions: {
      soilType: "Well-drained, rich volcanic soil",
      sunlight: "Partial shade",
      watering: "Regular but not waterlogged",
      spacing: "2m between plants"
    },
    regions: ["Central", "Eastern"]
  },
  {
    name: "Sweet Potatoes",
    scientificName: "Ipomoea batatas",
    description: "Drought-resistant root crop popular in Kenya",
    type: "tuber",
    season: "year-round",
    difficulty: "beginner",
    growingTime: "3-4 months",
    imageUrl: cropImages.sweetPotato,
    commonDiseases: [
      {
        name: "Sweet Potato Virus Disease",
        description: "Viral infection affecting leaves and yield",
        symptoms: ["Stunted growth", "Leaf curling"],
        treatment: "Use clean planting materials",
        imageUrl: diseaseImages.sweetPotatoVirus,
      }
    ],
    plantingInstructions: {
      soilType: "Sandy loam soil",
      sunlight: "Full sun",
      watering: "Moderate",
      spacing: "30cm between plants"
    },
    regions: ["Western", "Nyanza", "Coast"]
  },
  {
    name: "Cassava",
    scientificName: "Manihot esculenta",
    description: "Important food security crop in Kenya",
    type: "tuber",
    season: "year-round",
    difficulty: "beginner",
    growingTime: "8-12 months",
    imageUrl: cropImages.cassava,
    commonDiseases: [
      {
        name: "Cassava Mosaic Disease",
        description: "Viral disease affecting leaves",
        symptoms: ["Leaf mosaic pattern", "Reduced yield"],
        treatment: "Use disease-free cuttings",
        imageUrl: diseaseImages.cassavaMosaic,
      }
    ],
    plantingInstructions: {
      soilType: "Well-drained soil",
      sunlight: "Full sun",
      watering: "Drought tolerant",
      spacing: "1m between plants"
    },
    regions: ["Coast", "Western", "Nyanza"]
  }
];

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
