import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/entities')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  let values = Object.values(data);
  // console.log(values)

  return (
    
    <div className="App">
      <div className ="Landing">
        <header className="header">
          <h1>The Descent</h1>
          <p>How to Lose Everything in 15 Days</p>
        </header>

        <section className="main-content">
          <p>Embark on a journey to lose it all...</p>
          <p>Step into the darkness and embrace the solitude of our haunted manor. Here, amidst the shadows and echoes of the past, you'll find solace in your loneliness.</p>
          <p>Our haunted halls whisper tales of sorrow and despair, inviting you to wander aimlessly through the corridors of melancholy.</p>
          <p>Now it's on to you, what to do on your last day of happiness, that is <span>16th</span> Day.</p>
        </section>
      </div>
      <div className="entity-container">
        {values.map((entity, index) => (
          // console.log(entity)
          <div className="entity" key={index}>
            <h2>Day {entity.id}: {entity.title}</h2>
            <p>{entity.actions}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2024 The Descent. All rights forfeited.</p>
      </footer>
    </div>
  );
}

export default App;


