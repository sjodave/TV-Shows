import React from "react";

export default function Pages({ page, setPage }) {
  return (
    <div
      id="pages"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "1.5vh",
      }}
    >
      <button
        className="btn btn-primary"
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        {"<<"}
      </button>{" "}
      <span>page</span>{" "}
      <button
        className="btn btn-primary"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {">>"}
      </button>
    </div>
  );
}
