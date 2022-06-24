import React from "react";
import { ThreeDots } from "react-loader-spinner";
export default function Loading(props) {
  return (
    <div className="loader" style={{ display: "flex" }}>
      {props.loading ? (
        <ThreeDots color="#00BFFF" height={80} width={80} />
      ) : null}
    </div>
  );
}
