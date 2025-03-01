import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import Crop from '@/models/Crop';

async function getCrop(id) {
  await connectDB();
  const crop = await Crop.findById(id).lean();
  return crop;
}

export default async function CropDetailPage({ params }) {
  const crop = await getCrop(params.id);

  if (!crop) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Crop not found</h1>
          <Link href="/cropdb" className="btn btn-primary">
            Return to Crop Database
          </Link>
        </div>
      </div>
    );
  }

  // Destructure with default values to prevent undefined errors
  const {
    name = '',
    scientificName = '',
    description = '',
    type = '',
    season = '',
    difficulty = '',
    growingTime = '',
    regions = [],
    imageUrl = '',
    plantingInstructions = {
      soilType: '',
      sunlight: '',
      watering: '',
      spacing: ''
    },
    commonDiseases = []
  } = crop;

  return (
    <div className="container mx-auto p-6">
      <Link href="/cropdb" className="btn btn-ghost mb-6">
        ← Back to Crops
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 bg-base-200 rounded-lg overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            {scientificName && (
              <p className="text-xl text-base-content/70 italic">{scientificName}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {type && <div className="badge badge-primary">{type}</div>}
            {difficulty && <div className="badge badge-secondary">{difficulty}</div>}
            {season && <div className="badge badge-accent">{season}</div>}
          </div>

          {description && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-base-content/80">{description}</p>
            </div>
          )}

          <div className="bg-base-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Growing Information</h2>
            <div className="grid grid-cols-2 gap-4">
              {growingTime && (
                <div>
                  <h3 className="font-medium text-base-content/70">Growing Time</h3>
                  <p className="text-base-content">{growingTime}</p>
                </div>
              )}
              {regions?.length > 0 && (
                <div>
                  <h3 className="font-medium text-base-content/70">Regions</h3>
                  <p className="text-base-content">{regions.join(', ')}</p>
                </div>
              )}
            </div>
          </div>

          {plantingInstructions && (
            <div className="bg-base-200 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Planting Instructions</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(plantingInstructions).map(([key, value]) => (
                  value && (
                    <div key={key}>
                      <h3 className="font-medium text-base-content/70 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <p className="text-base-content">{value}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {commonDiseases?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Common Diseases</h2>
              <div className="grid grid-cols-1 gap-4">
                {commonDiseases.map((disease, index) => (
                  <div key={index} className="card bg-base-200">
                    <div className="card-body">
                      <h3 className="card-title text-base-content">{disease.name}</h3>
                      <p className="text-base-content/80">{disease.description}</p>
                      {disease.symptoms?.length > 0 && (
                        <div>
                          <h4 className="font-medium mt-2 text-base-content/70">Symptoms:</h4>
                          <ul className="list-disc list-inside text-base-content/80">
                            {disease.symptoms.map((symptom, idx) => (
                              <li key={idx}>{symptom}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {disease.treatment && (
                        <div>
                          <h4 className="font-medium mt-2 text-base-content/70">Treatment:</h4>
                          <p className="text-base-content/80">{disease.treatment}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
