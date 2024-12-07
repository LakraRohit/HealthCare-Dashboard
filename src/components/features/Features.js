const featuresData = [
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
      ],
      lab_results: ["Blood Tests", "CT Scans"],
    },
  ];
  
  export default featuresData;
  