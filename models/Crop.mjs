import mongoose from 'mongoose';

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  symptoms: [String],
  treatment: String,
  imageUrl: String
});

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  season: { type: String, required: true },
  difficulty: { type: String, required: true },
  growingTime: { type: String, required: true },
  imageUrl: { type: String, required: true },
  commonDiseases: [diseaseSchema],
  plantingInstructions: {
    soilType: { type: String, required: true },
    sunlight: { type: String, required: true },
    watering: { type: String, required: true },
    spacing: { type: String, required: true }
  },
  regions: { type: [String], required: true }
}, {
  timestamps: true,
  strict: true
});

const Crop = mongoose.models.Crop || mongoose.model('Crop', cropSchema);
export default Crop;
