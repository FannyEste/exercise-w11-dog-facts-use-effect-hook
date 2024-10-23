import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Initialize state to store the dog fact
  const [dogFact, setDogFact] = useState(null);

  // Define the API endpoint
  const API_URL = "https://dogapi.dog/api/v2/facts";

  // Function to fetch the dog fact
  const fetchDogFact = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // Assuming the response structure contains an array of facts
      const fact = data.data[0].attributes.body;
      setDogFact(fact); // Store the fact in state
    } catch (error) {
      console.error("Error fetching dog fact:", error);
    }
  };

  // Use useEffect to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact();
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Fact</h1>
      {/* Pass the fetched dog fact as a prop to DogFact component */}
      <DogFact fact={dogFact} />
    </div>
  );
};
