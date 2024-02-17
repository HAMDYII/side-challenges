import React from "react";
import SearchItem from "./SearchItem";

function Header({ title, search, setSearch }) {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <SearchItem search={search} setSearch={setSearch} />
    </div>
  );
}

Header.defaultProps = {
  title: "default title",
};

export default Header;
