import React, { useState } from "react";
import "./App.css";
import { Spinner } from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
import BookCard from "./components/BookCard";
import MainHeader from "./components/mainHeader";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
function App() {
  // States
  const [maxResults, setMaxResults] = useState(40);
  const [startIndex, setStartIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Handle Search

  const cardsCrop = paginate(cards, currentPage, pageSize);

  const handleCards = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      const items = cardsCrop.map((item, i) => {
        let thumbnail = "";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };
  return (
    <div className="w-100 h-100">
      <MainHeader
        query={query}
        setQuery={setQuery}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        maxResults={maxResults}
        setMaxResults={setMaxResults}
        setCards={setCards}
        setLoading={setLoading}
      />
      {handleCards()}
      <div className="d-flex justify-content-center">
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          itemsCount={cards.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
