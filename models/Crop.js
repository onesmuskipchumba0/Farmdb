import mongoose from 'mongoose';

const diseaseSchema = new mongoose.Schema({
  name: String,
  description: String,
  symptoms: [String],
  treatment: String,
  imageUrl: String,
});

const cropSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  description: String,
  type: String,
  season: String,
  difficulty: String,
  growingTime: String,
  imageUrl: String,
  commonDiseases: [diseaseSchema],
  plantingInstructions: {
    soilType: String,
    sunlight: String,
    watering: String,
    spacing: String,
  },
  regions: [String], // Kenyan regions where the crop grows well
});

export default mongoose.models.Crop || mongoose.model('Crop', cropSchema);
