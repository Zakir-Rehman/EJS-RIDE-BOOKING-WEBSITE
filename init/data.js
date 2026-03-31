const carData = [
  {
    name: "Toyota Corolla",
    brand: "Toyota",
    modelYear: 2023,
    category: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 5000,
    location: {
      city: "Karachi",
      area: "Gulshan",
      cities: ["Karachi", "Lahore", "Islamabad"]
    },
    description: "Toyota Corolla offers comfort, reliability and excellent fuel efficiency.",
    images: [
      "https://www.carscoops.com/wp-content/uploads/2023/02/2023-Toyota-GR-Corolla-Circ-1024x576.jpg"
    ],
    available: true,
    rating: 4.5,
    withDriver: true,
    totalTrips: 120,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "Touchscreen Display"]
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    modelYear: 2024,
    category: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 6500,
    location: {
      city: "Lahore",
      area: "DHA",
      cities: ["Lahore", "Islamabad", "Karachi"]
    },
    description: "Honda Civic offers smooth drive, premium interior, and excellent road grip.",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP.tmABRn4YBOef90Q7JAamDgHaEK?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.7,
    withDriver: false,
    totalTrips: 90,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "Touchscreen Display"]
  },
  {
    name: "Suzuki Alto",
    brand: "Suzuki",
    modelYear: 2022,
    category: "Economy",
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 4,
    pricePerDay: 3000,
    location: {
      city: "Karachi",
      area: "Nazimabad",
      cities: ["Karachi", "Hyderabad", "Islamabad"]
    },
    description: "Suzuki Alto is compact, fuel-efficient, and ideal for city commutes.",
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.u6ebZcO4x9MEzPElGc9b8QHaE7?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.0,
    withDriver: false,
    totalTrips: 150,
    features: ["Air Conditioning", "ABS", "Airbags"]
  },
  {
    name: "Toyota Fortuner",
    brand: "Toyota",
    modelYear: 2023,
    category: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 7,
    pricePerDay: 15000,
    location: {
      city: "Islamabad",
      area: "F-10",
      cities: ["Islamabad", "Rawalpindi", "Lahore"]
    },
    description: "Toyota Fortuner is perfect for rough roads and long tours.",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.sAEb1EOOU1A7vlzVvdNCqgHaE8?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.8,
    withDriver: true,
    totalTrips: 60,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "4WD"]
  },
  {
    name: "KIA Sportage",
    brand: "KIA",
    modelYear: 2024,
    category: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 12000,
    location: {
      city: "Lahore",
      area: "Johar Town",
      cities: ["Lahore", "Islamabad", "Karachi"]
    },
    description: "KIA Sportage offers style, comfort and modern features.",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP.19tfrHGofPnl_hthXgp5nQHaEK?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.6,
    withDriver: false,
    totalTrips: 75,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "Touchscreen Display"]
  },
  {
    name: "Hyundai Sonata",
    brand: "Hyundai",
    modelYear: 2023,
    category: "Luxury",
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 11000,
    location: {
      city: "Karachi",
      area: "Clifton",
      cities: ["Karachi", "Lahore", "Islamabad"]
    },
    description: "Hyundai Sonata is a luxury hybrid car with premium interiors.",
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.I6c7RxZEdg3HFyTSIGMGvAHaFU?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.9,
    withDriver: false,
    totalTrips: 45,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "Touchscreen Display"]
  },
  {
    name: "Toyota Hiace",
    brand: "Toyota",
    modelYear: 2022,
    category: "7-Seater",
    fuelType: "Diesel",
    transmission: "Manual",
    seats: 12,
    pricePerDay: 18000,
    location: {
      city: "Multan",
      area: "Cantt",
      cities: ["Multan", "Lahore", "Islamabad"]
    },
    description: "Toyota Hiace is spacious, ideal for group travel and tours.",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP.ojtnHay9CitGORn3NaMAgQHaEK?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.3,
    withDriver: true,
    totalTrips: 200,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "12-Seater Capacity"]
  },
  {
    name: "MG HS",
    brand: "MG",
    modelYear: 2024,
    category: "Luxury",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 13000,
    location: {
      city: "Islamabad",
      area: "Blue Area",
      cities: ["Islamabad", "Rawalpindi", "Lahore"]
    },
    description: "MG HS is a stylish luxury SUV with comfort and performance.",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP._hZIAljCZT-pY-kOUqjCPgHaE8?pid=Api&h=220&P=0"
    ],
    available: true,
    rating: 4.4,
    withDriver: false,
    totalTrips: 55,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "Touchscreen Display"]
  },
  {
    name: "Nissan Dayz",
    brand: "Nissan",
    modelYear: 2021,
    category: "Economy",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 4,
    pricePerDay: 3500,
    location: {
      city: "Faisalabad",
      area: "Peoples Colony",
      cities: ["Faisalabad", "Lahore", "Islamabad"]
    },
    description: "Nissan Dayz is compact, fuel-efficient, and perfect for daily city commute.",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.u6fbKZM8qbn55LivqVKODwHaFj?pid=Api&h=220&P=0"
    ],
    available: true,
    withDriver: false,
    rating: 3.9,
    totalTrips: 80,
    features: ["Air Conditioning", "ABS", "Airbags"]
  },
  {
    name: "Tesla Model 3",
    brand: "Tesla",
    modelYear: 2024,
    category: "Luxury",
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 20000,
    location: {
      city: "Karachi",
      area: "DHA",
      cities: ["Karachi", "Lahore", "Islamabad"]
    },
    description: "Tesla Model 3 is premium electric car with high performance and zero emissions.",
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.O6uJG6mWPhJJN7TG2Q41FQHaEK?pid=Api&h=220&P=0"
    ],
    available: true,
    withDriver: true,
    rating: 5,
    totalTrips: 25,
    features: ["Air Conditioning", "Cruise Control", "ABS", "Airbags", "Electric Charging"]
  }
];




export default carData;
