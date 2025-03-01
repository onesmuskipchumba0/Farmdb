import connectDB from '../lib/mongodb';
import Crop from '../models/Crop';

const crops = [
  {
    name: "Maize",
    scientificName: "Zea mays",
    description: "Kenya's most important cereal crop, grown in various regions",
    type: "grain",
    season: "long rains",
    difficulty: "intermediate",
    growingTime: "90-120 days",
    imageUrl: "https://source.unsplash.com/featured/?maize",
    commonDiseases: [
      {
        name: "Maize Streak Virus",
        description: "Viral disease causing yellow streaks on leaves",
        symptoms: ["Yellow streaks", "Stunted growth"],
        treatment: "Use resistant varieties",
        imageUrl: "https://source.unsplash.com/featured/?plant,disease"
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
    imageUrl: "https://source.unsplash.com/featured/?tea,plantation",
    commonDiseases: [
      {
        name: "Root Rot",
        description: "Fungal disease affecting roots",
        symptoms: ["Wilting", "Yellowing leaves"],
        treatment: "Improve drainage",
        imageUrl: "https://source.unsplash.com/featured/?plant,disease"
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
    imageUrl: "https://source.unsplash.com/featured/?beans",
    commonDiseases: [
      {
        name: "Bean Rust",
        description: "Fungal disease causing rust spots",
        symptoms: ["Red-brown spots", "Leaf damage"],
        treatment: "Fungicide application",
        imageUrl: "https://source.unsplash.com/featured/?rust,plant"
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
    imageUrl: "https://source.unsplash.com/featured/?coffee,plantation",
    commonDiseases: [
      {
        name: "Coffee Berry Disease",
        description: "Fungal disease affecting coffee berries",
        symptoms: ["Dark lesions on berries", "Premature berry drop"],
        treatment: "Fungicide application and proper spacing",
        imageUrl: "https://source.unsplash.com/featured/?coffee,disease"
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
    imageUrl: "https://source.unsplash.com/featured/?sweet,potato",
    commonDiseases: [
      {
        name: "Sweet Potato Virus Disease",
        description: "Viral infection affecting leaves and yield",
        symptoms: ["Stunted growth", "Leaf curling"],
        treatment: "Use clean planting materials",
        imageUrl: "https://source.unsplash.com/featured/?potato,disease"
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
    imageUrl: "https://source.unsplash.com/featured/?cassava",
    commonDiseases: [
      {
        name: "Cassava Mosaic Disease",
        description: "Viral disease affecting leaves",
        symptoms: ["Leaf mosaic pattern", "Reduced yield"],
        treatment: "Use disease-free cuttings",
        imageUrl: "https://source.unsplash.com/featured/?plant,disease"
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
  try {
    await connectDB();
    
    // Clear existing data
    await Crop.deleteMany({});
    
    // Insert new data
    await Crop.insertMany(crops);
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
