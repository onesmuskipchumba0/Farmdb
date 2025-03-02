export const cropImages = {
    maize: "/crops/maize.jpg",
    tea: "/crops/tea.jpeg",
    beans: "/crops/bean.jpg",
    coffee: "/crops/coffee.jpeg",
    sweetPotato: "/crops/sweet-potato.jpeg",
    cassava: "/crops/cassava.jpg",
    rice: "/crops/rice.jpeg",
    wheat: "/crops/wheat.jpeg",
    sorghum: "/crops/sorghum.jpeg",
    millet: "/crops/millet.jpeg",
    barley: "/crops/barley.webp",
    tomato: "/crops/tomato.jpeg",
    potato: "/crops/potato.jpeg",
    onion: "/crops/onion.webp",
    garlic: "/crops/garlic.webp",
    pepper: "/crops/pepper.jpeg",
    carrot: "/crops/carrot.jpeg",
    cabbage: "/crops/cabbage.jpeg",
    spinach: "/crops/spinach.jpg",
    broccoli: "/crops/brocolli.jpeg",
    eggplant: "/crops/eggplant.jpg",
    cucumber: "/crops/cucumber.jpeg",
    pumpkin: "/crops/pumkin.jpg",
    banana: "/crops/banana.jpg",
    mango: "/crops/mango.jpeg"
  };
  
  export const diseaseImages = {
    maizeStreak: "/diseases/maize-streak.jpeg",
    teaBlight: "/diseases/tea-blight.jpg",
    beanRust: "/diseases/bean-rust.jpg",
    coffeeDisease: "/diseases/coffee-disease.jpg",
    sweetPotatoVirus: "/diseases/sweet-potato-virus.jpg",
    cassavaMosaic: "/diseases/cassava-mosaic.jpg",
    riceBlast: "/diseases/rice-blast.jpg",
    wheatRust: "/diseases/wheat-rust.jpg",
    sorghumDowny: "/diseases/sorghum-downy.jpg",
    milletSmuts: "/diseases/millet-smuts.jpg",
    barleyNetBlotch: "/diseases/barley-net-blotch.jpg",
    tomatoEarlyBlight: "/diseases/tomato-early-blight.jpg",
    potatoLateBlight: "/diseases/potato-late-blight.jpg",
    onionDowny: "/diseases/onion-downy.jpg",
    garlicWhiteRot: "/diseases/garlic-white-rot.jpg",
    pepperAnthracnose: "/diseases/pepper-anthracnose.jpg",
    carrotLeafBlight: "/diseases/carrot-leaf-blight.jpg",
    cabbageBlackRot: "/diseases/cabbage-black-rot.jpg",
    spinachDowny: "/diseases/spinach-downy.jpg",
    broccoliClubroot: "/diseases/broccoli-clubroot.jpg",
    eggplantVerticillium: "/diseases/eggplant-verticillium.jpg",
    cucumberPowdery: "/diseases/cucumber-powdery.jpg",
    pumpkinPowdery: "/diseases/pumpkin-powdery.jpg",
    bananaPanama: "/diseases/banana-panama.jpg",
    mangoAnthracnose: "/diseases/mango-anthracnose.jpg"
  };
  
  export const crops = [
    {
      name: "Maize",
      scientificName: "Zea mays",
      description: "Kenya's most important cereal crop, grown in various regions.",
      type: "grain",
      season: "long rains",
      difficulty: "intermediate",
      growingTime: "90-120 days",
      imageUrl: cropImages.maize,
      commonDiseases: [
        {
          name: "Maize Streak Virus",
          description: "Viral disease causing yellow streaks on leaves.",
          symptoms: ["Yellow streaks", "Stunted growth"],
          treatment: "Use resistant varieties and manage vector populations.",
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
      description: "A perennial plant used to produce tea, thriving in high-altitude regions.",
      type: "beverage",
      season: "year-round",
      difficulty: "intermediate",
      growingTime: "3-5 years to full production",
      imageUrl: cropImages.tea,
      commonDiseases: [
        {
          name: "Tea Blight",
          description: "Fungal disease affecting tea leaves.",
          symptoms: ["Leaf spots", "Defoliation"],
          treatment: "Apply fungicides and use resistant varieties.",
          imageUrl: diseaseImages.teaBlight
        }
      ],
      plantingInstructions: {
        soilType: "Acidic, well-drained soil",
        sunlight: "Partial shade",
        watering: "Consistent moisture without waterlogging",
        spacing: "1-1.5m between bushes"
      },
      regions: ["Central", "Highlands"]
    },
    {
      name: "Beans",
      scientificName: "Phaseolus vulgaris",
      description: "A versatile legume used as a staple protein source.",
      type: "legume",
      season: "warm seasons",
      difficulty: "easy",
      growingTime: "50-70 days",
      imageUrl: cropImages.beans,
      commonDiseases: [
        {
          name: "Bean Rust",
          description: "Fungal disease causing rust-colored spots on leaves.",
          symptoms: ["Rust spots", "Premature leaf drop"],
          treatment: "Apply appropriate fungicides.",
          imageUrl: diseaseImages.beanRust
        }
      ],
      plantingInstructions: {
        soilType: "Fertile, well-drained soil",
        sunlight: "Full sun",
        watering: "Moderate watering",
        spacing: "40cm between plants"
      },
      regions: ["Central", "Coastal"]
    },
    {
      name: "Coffee",
      scientificName: "Coffea arabica",
      description: "A high-value crop grown in tropical regions for its beans.",
      type: "beverage",
      season: "year-round",
      difficulty: "hard",
      growingTime: "3-4 years to production",
      imageUrl: cropImages.coffee,
      commonDiseases: [
        {
          name: "Coffee Disease",
          description: "Includes various fungal diseases affecting coffee plants.",
          symptoms: ["Leaf spots", "Defoliation"],
          treatment: "Fungicide application and proper spacing.",
          imageUrl: diseaseImages.coffeeDisease
        }
      ],
      plantingInstructions: {
        soilType: "Rich, well-drained soil",
        sunlight: "Partial shade",
        watering: "Regular, moderate watering",
        spacing: "1.5-2m between trees"
      },
      regions: ["Central", "Western"]
    },
    {
      name: "Sweet Potato",
      scientificName: "Ipomoea batatas",
      description: "A nutrient-rich tuber crop grown for its edible roots.",
      type: "root vegetable",
      season: "year-round in warm climates",
      difficulty: "easy",
      growingTime: "100-150 days",
      imageUrl: cropImages.sweetPotato,
      commonDiseases: [
        {
          name: "Sweet Potato Virus",
          description: "Viral infection leading to reduced yield and quality.",
          symptoms: ["Mottled leaves", "Stunted growth"],
          treatment: "Use certified virus-free seeds and proper crop rotation.",
          imageUrl: diseaseImages.sweetPotatoVirus
        }
      ],
      plantingInstructions: {
        soilType: "Loose, well-drained sandy soil",
        sunlight: "Full sun",
        watering: "Consistent moisture",
        spacing: "30cm between plants"
      },
      regions: ["Eastern", "Coastal"]
    },
    {
      name: "Cassava",
      scientificName: "Manihot esculenta",
      description: "A drought-tolerant root crop vital for food security in many regions.",
      type: "root vegetable",
      season: "year-round in tropical climates",
      difficulty: "intermediate",
      growingTime: "8-24 months",
      imageUrl: cropImages.cassava,
      commonDiseases: [
        {
          name: "Cassava Mosaic",
          description: "Viral disease that distorts leaves and reduces yield.",
          symptoms: ["Mottled leaves", "Stunted growth"],
          treatment: "Use resistant varieties and control insect vectors.",
          imageUrl: diseaseImages.cassavaMosaic
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, loamy soil",
        sunlight: "Full sun",
        watering: "Occasional deep watering",
        spacing: "1m between plants"
      },
      regions: ["Western", "Rift Valley"]
    },
    {
      name: "Rice",
      scientificName: "Oryza sativa",
      description: "A staple cereal crop grown in flooded fields.",
      type: "grain",
      season: "monsoon",
      difficulty: "intermediate",
      growingTime: "120-150 days",
      imageUrl: cropImages.rice,
      commonDiseases: [
        {
          name: "Rice Blast",
          description: "Fungal disease causing lesions on leaves.",
          symptoms: ["Spots on leaves", "Plant wilt"],
          treatment: "Use resistant varieties and fungicides.",
          imageUrl: diseaseImages.riceBlast
        }
      ],
      plantingInstructions: {
        soilType: "Clayey or silty soil with good water retention",
        sunlight: "Full sun",
        watering: "Flooded fields with controlled drainage",
        spacing: "20-25cm between hills"
      },
      regions: ["Eastern", "Coastal"]
    },
    {
      name: "Wheat",
      scientificName: "Triticum aestivum",
      description: "A major cereal crop used for making bread and other staples.",
      type: "grain",
      season: "winter",
      difficulty: "intermediate",
      growingTime: "120-150 days",
      imageUrl: cropImages.wheat,
      commonDiseases: [
        {
          name: "Wheat Rust",
          description: "Fungal disease causing reddish-brown rust on leaves.",
          symptoms: ["Rusty spots", "Premature leaf drop"],
          treatment: "Apply fungicides and use resistant varieties.",
          imageUrl: diseaseImages.wheatRust
        }
      ],
      plantingInstructions: {
        soilType: "Fertile, well-drained soil",
        sunlight: "Full sun",
        watering: "Regular watering, avoid overwatering",
        spacing: "20-25cm between plants"
      },
      regions: ["Northern", "Central"]
    },
    {
      name: "Sorghum",
      scientificName: "Sorghum bicolor",
      description: "A drought-tolerant cereal crop grown in arid and semi-arid regions.",
      type: "grain",
      season: "short rains",
      difficulty: "easy",
      growingTime: "90-120 days",
      imageUrl: cropImages.sorghum,
      commonDiseases: [
        {
          name: "Sorghum Downy Mildew",
          description: "Fungal disease causing mildew on leaves.",
          symptoms: ["Grayish mold", "Leaf discoloration"],
          treatment: "Apply fungicides and improve air circulation.",
          imageUrl: diseaseImages.sorghumDowny
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained loamy soil",
        sunlight: "Full sun",
        watering: "Moderate watering",
        spacing: "30-40cm between plants"
      },
      regions: ["Arid", "Semi-arid regions"]
    },
    {
      name: "Millet",
      scientificName: "Panicum miliaceum",
      description: "A small-grained cereal crop valued for its resilience in harsh climates.",
      type: "grain",
      season: "summer",
      difficulty: "easy",
      growingTime: "60-90 days",
      imageUrl: cropImages.millet,
      commonDiseases: [
        {
          name: "Millet Smuts",
          description: "Fungal diseases causing smut in millet crops.",
          symptoms: ["Spore masses", "Knot-like growths"],
          treatment: "Remove infected plants and apply fungicides.",
          imageUrl: diseaseImages.milletSmuts
        }
      ],
      plantingInstructions: {
        soilType: "Sandy to loamy soil",
        sunlight: "Full sun",
        watering: "Low to moderate watering",
        spacing: "25-30cm between plants"
      },
      regions: ["Arid", "Semi-arid regions"]
    },
    {
      name: "Barley",
      scientificName: "Hordeum vulgare",
      description: "A cereal crop used for food, feed, and brewing.",
      type: "grain",
      season: "spring",
      difficulty: "intermediate",
      growingTime: "90-120 days",
      imageUrl: cropImages.barley,
      commonDiseases: [
        {
          name: "Barley Net Blotch",
          description: "Fungal disease causing dark lesions on leaves.",
          symptoms: ["Dark lesions", "Leaf discoloration"],
          treatment: "Use resistant varieties and fungicides.",
          imageUrl: diseaseImages.barleyNetBlotch
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained loamy soil",
        sunlight: "Full sun",
        watering: "Regular watering",
        spacing: "20-25cm between plants"
      },
      regions: ["Northern", "Central"]
    },
    {
      name: "Tomato",
      scientificName: "Solanum lycopersicum",
      description: "A popular vegetable crop known for its juicy red fruits.",
      type: "vegetable",
      season: "summer",
      difficulty: "intermediate",
      growingTime: "60-85 days",
      imageUrl: cropImages.tomato,
      commonDiseases: [
        {
          name: "Tomato Early Blight",
          description: "Fungal disease causing dark spots on leaves and fruits.",
          symptoms: ["Dark spots", "Leaf drop"],
          treatment: "Apply fungicides and practice crop rotation.",
          imageUrl: diseaseImages.tomatoEarlyBlight
        }
      ],
      plantingInstructions: {
        soilType: "Fertile, well-drained soil",
        sunlight: "Full sun",
        watering: "Consistent watering",
        spacing: "50-60cm between plants"
      },
      regions: ["Central", "Eastern"]
    },
    {
      name: "Potato",
      scientificName: "Solanum tuberosum",
      description: "A staple root crop grown for its edible tubers.",
      type: "root vegetable",
      season: "spring",
      difficulty: "intermediate",
      growingTime: "90-120 days",
      imageUrl: cropImages.potato,
      commonDiseases: [
        {
          name: "Potato Late Blight",
          description: "A fungal disease affecting tubers and foliage.",
          symptoms: ["Dark lesions", "Tubers rotting"],
          treatment: "Use resistant varieties and fungicides.",
          imageUrl: diseaseImages.potatoLateBlight
        }
      ],
      plantingInstructions: {
        soilType: "Loose, well-drained soil",
        sunlight: "Full sun",
        watering: "Regular watering, avoid overwatering",
        spacing: "30-40cm between plants"
      },
      regions: ["Western", "Central"]
    },
    {
      name: "Onion",
      scientificName: "Allium cepa",
      description: "A widely used vegetable known for its pungent bulbs.",
      type: "vegetable",
      season: "year-round",
      difficulty: "easy",
      growingTime: "90-120 days",
      imageUrl: cropImages.onion,
      commonDiseases: [
        {
          name: "Onion Downy Mildew",
          description: "Fungal disease causing patches on leaves.",
          symptoms: ["Discolored patches", "Leaf drop"],
          treatment: "Improve air circulation and apply fungicides.",
          imageUrl: diseaseImages.onionDowny
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, fertile soil",
        sunlight: "Full sun",
        watering: "Regular watering",
        spacing: "10-15cm between bulbs"
      },
      regions: ["Central", "Northern"]
    },
    {
      name: "Garlic",
      scientificName: "Allium sativum",
      description: "A pungent crop used in various cuisines for its strong flavor.",
      type: "vegetable",
      season: "autumn",
      difficulty: "easy",
      growingTime: "180-210 days",
      imageUrl: cropImages.garlic,
      commonDiseases: [
        {
          name: "Garlic White Rot",
          description: "A fungal disease leading to rotting of garlic bulbs.",
          symptoms: ["White rot", "Discolored leaves"],
          treatment: "Practice crop rotation and remove infected bulbs.",
          imageUrl: diseaseImages.garlicWhiteRot
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, fertile soil",
        sunlight: "Full sun",
        watering: "Moderate, regular watering",
        spacing: "10-15cm between cloves"
      },
      regions: ["Western", "Central"]
    },
    {
      name: "Pepper",
      scientificName: "Capsicum annuum",
      description: "A versatile vegetable used as a spice or fresh produce.",
      type: "vegetable",
      season: "summer",
      difficulty: "intermediate",
      growingTime: "70-90 days",
      imageUrl: cropImages.pepper,
      commonDiseases: [
        {
          name: "Pepper Anthracnose",
          description: "Fungal disease causing dark lesions on fruits.",
          symptoms: ["Dark lesions", "Fruit rot"],
          treatment: "Apply fungicides and ensure proper plant spacing.",
          imageUrl: diseaseImages.pepperAnthracnose
        }
      ],
      plantingInstructions: {
        soilType: "Fertile, well-drained soil",
        sunlight: "Full sun",
        watering: "Regular watering",
        spacing: "40-50cm between plants"
      },
      regions: ["Central", "Coastal"]
    },
    {
      name: "Carrot",
      scientificName: "Daucus carota subsp. sativus",
      description: "A root vegetable known for its vibrant color and nutritional value.",
      type: "vegetable",
      season: "spring",
      difficulty: "easy",
      growingTime: "70-80 days",
      imageUrl: cropImages.carrot,
      commonDiseases: [
        {
          name: "Carrot Leaf Blight",
          description: "Fungal disease causing spots on leaves.",
          symptoms: ["Spotted leaves", "Stunted growth"],
          treatment: "Remove affected leaves and apply fungicides.",
          imageUrl: diseaseImages.carrotLeafBlight
        }
      ],
      plantingInstructions: {
        soilType: "Loose, sandy loam",
        sunlight: "Full sun",
        watering: "Regular, moderate watering",
        spacing: "5-8cm between plants"
      },
      regions: ["Eastern", "Central"]
    },
    {
      name: "Cabbage",
      scientificName: "Brassica oleracea var. capitata",
      description: "A leafy vegetable grown for its dense heads and versatility in cooking.",
      type: "vegetable",
      season: "cool weather",
      difficulty: "easy",
      growingTime: "80-100 days",
      imageUrl: cropImages.cabbage,
      commonDiseases: [
        {
          name: "Cabbage Black Rot",
          description: "Bacterial disease causing dark lesions on leaves.",
          symptoms: ["Dark lesions", "Leaf curling"],
          treatment: "Use disease-free seeds and practice crop rotation.",
          imageUrl: diseaseImages.cabbageBlackRot
        }
      ],
      plantingInstructions: {
        soilType: "Rich, well-drained soil",
        sunlight: "Full sun",
        watering: "Regular watering",
        spacing: "40-50cm between plants"
      },
      regions: ["Central", "Northern"]
    },
    {
      name: "Spinach",
      scientificName: "Spinacia oleracea",
      description: "A nutrient-dense leafy green vegetable, rich in iron and vitamins.",
      type: "vegetable",
      season: "cool weather",
      difficulty: "easy",
      growingTime: "40-50 days",
      imageUrl: cropImages.spinach,
      commonDiseases: [
        {
          name: "Spinach Downy Mildew",
          description: "Fungal disease causing yellow spots and mold on leaves.",
          symptoms: ["Yellow spots", "Leaf deformation"],
          treatment: "Remove infected leaves and apply fungicides.",
          imageUrl: diseaseImages.spinachDowny
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, fertile soil",
        sunlight: "Partial to full sun",
        watering: "Regular, light watering",
        spacing: "10-15cm between plants"
      },
      regions: ["Coastal", "Central"]
    },
    {
      name: "Broccoli",
      scientificName: "Brassica oleracea var. italica",
      description: "A cool-weather crop grown for its nutrient-rich heads.",
      type: "vegetable",
      season: "cool weather",
      difficulty: "intermediate",
      growingTime: "60-100 days",
      imageUrl: cropImages.broccoli,
      commonDiseases: [
        {
          name: "Broccoli Clubroot",
          description: "Soil-borne disease causing swollen roots and stunted growth.",
          symptoms: ["Swollen roots", "Wilting"],
          treatment: "Practice crop rotation and soil treatment.",
          imageUrl: diseaseImages.broccoliClubroot
        }
      ],
      plantingInstructions: {
        soilType: "Fertile, well-drained soil",
        sunlight: "Full sun",
        watering: "Consistent watering",
        spacing: "50-60cm between plants"
      },
      regions: ["Central", "Northern"]
    },
    {
      name: "Eggplant",
      scientificName: "Solanum melongena",
      description: "A warm-season crop known for its glossy, purple fruits.",
      type: "vegetable",
      season: "summer",
      difficulty: "intermediate",
      growingTime: "70-90 days",
      imageUrl: cropImages.eggplant,
      commonDiseases: [
        {
          name: "Eggplant Verticillium Wilt",
          description: "A fungal disease causing wilting and discoloration.",
          symptoms: ["Wilting", "Discolored leaves"],
          treatment: "Use resistant varieties and crop rotation.",
          imageUrl: diseaseImages.eggplantVerticillium
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, fertile soil",
        sunlight: "Full sun",
        watering: "Regular watering",
        spacing: "60-70cm between plants"
      },
      regions: ["Central", "Eastern"]
    },
    {
      name: "Cucumber",
      scientificName: "Cucumis sativus",
      description: "A refreshing vine crop widely grown for its crisp fruits.",
      type: "vegetable",
      season: "summer",
      difficulty: "easy",
      growingTime: "50-70 days",
      imageUrl: cropImages.cucumber,
      commonDiseases: [
        {
          name: "Cucumber Powdery Mildew",
          description: "Fungal disease causing white powdery patches on leaves.",
          symptoms: ["White powder on leaves", "Leaf curling"],
          treatment: "Apply fungicides and ensure proper spacing.",
          imageUrl: diseaseImages.cucumberPowdery
        }
      ],
      plantingInstructions: {
        soilType: "Rich, well-drained soil",
        sunlight: "Full sun",
        watering: "Regular watering",
        spacing: "60-70cm between plants"
      },
      regions: ["Central", "Eastern"]
    },
    {
      name: "Pumpkin",
      scientificName: "Cucurbita pepo",
      description: "A versatile squash crop grown for its edible flesh and seeds.",
      type: "vegetable",
      season: "autumn",
      difficulty: "easy",
      growingTime: "90-120 days",
      imageUrl: cropImages.pumpkin,
      commonDiseases: [
        {
          name: "Pumpkin Powdery Mildew",
          description: "Fungal disease affecting pumpkins with a white coating.",
          symptoms: ["White powder on foliage", "Leaf curling"],
          treatment: "Apply fungicides and ensure proper spacing.",
          imageUrl: diseaseImages.pumpkinPowdery
        }
      ],
      plantingInstructions: {
        soilType: "Rich, well-drained soil",
        sunlight: "Full sun",
        watering: "Regular watering, especially in dry spells",
        spacing: "1-1.5m between plants"
      },
      regions: ["Central", "Western"]
    },
    {
      name: "Banana",
      scientificName: "Musa spp.",
      description: "A tropical fruit crop grown for its sweet, edible fruits.",
      type: "fruit",
      season: "year-round in tropical climates",
      difficulty: "intermediate",
      growingTime: "9-12 months",
      imageUrl: cropImages.banana,
      commonDiseases: [
        {
          name: "Banana Panama Disease",
          description: "A fungal disease affecting banana plants.",
          symptoms: ["Yellowing leaves", "Stunted growth"],
          treatment: "Use resistant varieties and maintain soil health.",
          imageUrl: diseaseImages.bananaPanama
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, fertile soil",
        sunlight: "Full sun",
        watering: "Regular watering with good drainage",
        spacing: "2-3m between plants"
      },
      regions: ["Tropical", "Coastal"]
    },
    {
      name: "Mango",
      scientificName: "Mangifera indica",
      description: "A tropical fruit tree prized for its sweet, juicy fruits.",
      type: "fruit",
      season: "summer",
      difficulty: "intermediate",
      growingTime: "3-5 years to full production",
      imageUrl: cropImages.mango,
      commonDiseases: [
        {
          name: "Mango Anthracnose",
          description: "A fungal disease causing dark lesions on fruits and leaves.",
          symptoms: ["Dark lesions", "Premature fruit drop"],
          treatment: "Apply fungicides and prune affected branches.",
          imageUrl: diseaseImages.mangoAnthracnose
        }
      ],
      plantingInstructions: {
        soilType: "Well-drained, slightly acidic soil",
        sunlight: "Full sun",
        watering: "Moderate watering",
        spacing: "8-10m between trees"
      },
      regions: ["Tropical", "Coastal"]
    }
  ];
  