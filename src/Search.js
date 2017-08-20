import React from "react";
import { func } from "prop-types";
import "./Search.css";

const Search = ({ findSchool }) => {
  return (
    <div className="search">
      <input
        onChange={e => findSchool(e.target.value)}
        className="search-bar"
        placeholder="Search for school..."
      />
    </div>
  );
};

Search.propTypes = {
  findSchool: func
};

export default Search;
