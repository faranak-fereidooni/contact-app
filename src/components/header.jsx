import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <h1
        style={{
          fontWeight: "700",
          fontSize: "35px",
          marginTop: "0.5rem",
          padding: "1.5rem",
          borderBottom: "1px solid #ccc",
          boxShadow: "5px 5px 5px rgb(0,0,0,0.2)",
        }}
      >
        Contact Manager
      </h1>
    </div>
  );
};

export default Header;
