import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
export default function Loading(props) {
  const { loading } = useSelector((state) => state.show);
  if (!loading) return;
  return (
    <div className="loader" style={{ display: "flex" }}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
}
