import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/reducer";

export default function Pages() {
  const { page } = useSelector((state) => state.show);
  const dispatch = useDispatch();

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
          if (page > 0) dispatch(setPage(page - 1));
        }}
      >
        {"<<"}
      </button>{" "}
      <span>page</span>{" "}
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(setPage(page + 1));
        }}
      >
        {">>"}
      </button>
    </div>
  );
}
