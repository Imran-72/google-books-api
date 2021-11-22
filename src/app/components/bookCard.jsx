import React from "react";

const BookCard = ({ item }) => {
  return (
    <div className="m-2">
      <img src={item} alt="Обложка книги" />
    </div>
  );
};

export default BookCard;
