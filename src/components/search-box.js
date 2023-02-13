import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="search młody senior"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
