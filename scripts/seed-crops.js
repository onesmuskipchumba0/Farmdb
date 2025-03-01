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
