// DogFact Component
export const DogFact = ({ fact }) => {
  // Render the dog fact if available, otherwise show a loading message
  return (
    <div>
      {fact ? <p>{fact}</p> : <p>Loading dog fact...</p>}
    </div>
  );
};
