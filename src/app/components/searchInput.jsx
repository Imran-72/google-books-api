import React from "react";

const SearchInput = ({ query, onChange, onSubmit }) => {
  return (
    <div className="app">
      <div className="d-flex wrapper">
        <input
          className="form-control inpuT"
          value={query}
          onChange={onChange}
        />

        <button onClick={onSubmit} className="btn btn-secondary">
          поиск
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
