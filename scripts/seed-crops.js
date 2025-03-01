import connectDB from '../lib/mongodb';
import Crop from '../models/Crop';

const crops = [
  {
    name: "Maize",
    scientificName: "Zea mays",
    description: "Staple food crop in Kenya, commonly known as corn",
    type: "grain",
    season: "long rains",
    difficulty: "intermediate",
    growingTime: "90-120 days",
    imageUrl: "/crops/maize.jpg",
    commonDiseases: [
      {
        name: "Maize Streak Virus",
        description: "Viral disease causing yellow streaks on leaves",
        symptoms: ["Yellow streaks", "Stunted growth", "Reduced yield"],
        treatment: "Use resistant varieties and control leafhoppers",
        imageUrl: "/diseases/maize-streak.jpg"
      },
      {
        name: "Gray Leaf Spot",
        description: "Fungal disease causing gray-brown lesions",
        symptoms: ["Rectangle-shaped lesions", "Gray-brown spots", "Leaf death"],
        treatment: "Crop rotation and fungicide application",
        imageUrl: "/diseases/gray-leaf-spot.jpg"
      }
    ],
    plantingInstructions: {
      soilType: "Well-drained loam soil",
      sunlight: "Full sun",
      watering: "Regular watering, especially during tasseling",
      spacing: "75cm between rows, 30cm between plants"
    },
    regions: ["Western", "Rift Valley", "Nyanza"]
  },
  {
    name: "Beans",
    scientificName: "Phaseolus vulgaris",
    description: "Key protein source in Kenyan diets, often intercropped with maize",
    type: "legume",
    season: "both short and long rains",
    difficulty: "easy",
    growingTime: "70-90 days",
    imageUrl: "/crops/beans.jpg",
    commonDiseases: [
      {
        name: "Bean Anthracnose",
        description: "Fungal disease causing seed rot and leaf lesions",
        symptoms: ["Dark brown lesions", "Sunken spots on pods", "Twisted leaves"],
        treatment: "Use certified seeds and apply copper-based fungicides",
        imageUrl: "/diseases/bean-anthracnose.jpg"
      },
      {
        name: "Bean Rust",
        description: "Airborne fungal infection affecting leaves",
        symptoms: ["Rust-colored pustules", "Leaf yellowing", "Premature defoliation"],
        treatment: "Plant resistant varieties and practice field sanitation",
        imageUrl: "/diseases/bean-rust.jpg"
      }
    ],
    plantingInstructions: {
      soilType: "Well-drained loam with pH 6.0-6.5",
      sunlight: "Full sun (6-8 hours daily)",
      watering: "Moderate, avoid waterlogging",
      spacing: "45cm between rows, 15cm between plants"
    },
    regions: ["Central", "Eastern", "Rift Valley"]
  },
  // Add more Kenyan crops here...
];

async function seedCrops() {
  try {
    await connectDB();
    await Crop.deleteMany({}); // Clear existing crops
    await Crop.insertMany(crops);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedCrops();
