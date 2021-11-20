import React from "react";

const BookCard = ({ item }) => {
  return (
    <div className="m-2">
      <img src={item.volumeInfo.imageLinks.thumbnail} alt="Обложка книги" />
    </div>
  );
};

export default BookCard;
