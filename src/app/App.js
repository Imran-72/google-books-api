import React, { useState } from "react";
import axios from "axios";
import BookCard from "./components/bookCard";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
import SearchInput from "./components/searchInput";

const App = () => {
  const [startIndex, setStartIndex] = useState(1);
  const [maxResults, setMaxResalts] = useState(40);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  console.log(cards);

  const handleSubmit = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .then((res) => setCards(res.data.items));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handlePageChange = (pageIndex) => {
    console.log(pageIndex);
    setCurrentPage(pageIndex);
  };

  const cardsCrop = paginate(cards, currentPage, pageSize);

  const handleCards = () => {
    const items = cardsCrop.map((item, i) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return (
        <div className="col-lg-4 mb-3">
          <BookCard item={thumbnail} />
        </div>
      );
    });
    return (
      <div className="container my-5">
        <div className="row">{items}</div>
      </div>
    );
  };

  return (
    <>
      <SearchInput
        query={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {handleCards()}
      <Pagination
        onPageChange={handlePageChange}
        pageSize={pageSize}
        currentPage={currentPage}
        itemsCount={cards.length}
      />
    </>
  );
};

export default App;
