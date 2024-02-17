import React from "react";

function Footer({ length }) {
  const date = new Date();
  return (
    <footer className="Footer">
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
}

export default Footer;
