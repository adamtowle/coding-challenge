import React from "react";
import "./App.css";
import { useEffect } from "react";
import Note from "./components/Note/note";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a request to your server or proxy server
      const response = await fetch('http://localhost:3000/api/notes/?from=2023-06-10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Response error');
      }

      const responseData = await response.json();
      console.log(responseData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      <Note dateTime={'2023-09-24T07:29:40.382Z'} user={'Orland Doyle'} content={'Magnam expedita iste enim cum quia qui dolores vel ut ea debitis sed ad sed qui et sint odio saepe est maxime aliquid saepe quisquam cumque architecto aut possimus deserunt.'}/>
    </div>
  );
}

export default App;
