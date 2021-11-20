import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [startIndex, setStartIndex] = useState(1);
  const [maxResults, setMaxResalts] = useState(10);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);

  console.log(cards);

  const handleSubmit = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .then((response) => setCards(response.data.items));
  };
  const handleSubmit = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .then((response) => setCards(response.data.items));
  };

  const handleSubmit = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .then((response) => setCards(response.data.items));
  };
  return (
    <div className="app">
      <div className="wrapper">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={handleSubmit}>поиск</button>
      </div>
      <div>
        {cards &&
          cards.map((item) => (
            <img src={item.volumeInfo.imageLinks.thumbnail} />
          ))}
      </div>
    </div>
  );
};

export default App;
