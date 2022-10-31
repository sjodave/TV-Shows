import React from "react";
import ReactDom from "react-dom";
export default function YoutubePortal({ isOpen, setOpen, videoId }) {
  if (!isOpen) return;
  const backdrop = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: "20",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  };
  const modal = {
    position: "fixed",
    top: "11.5vh",
    left: "5%",
    width: "90%",
    height: "90%",
    // backgroundColor: "black",
    borderRadius: "14px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: 30,
    animation: "slide-down 300ms ease-out forwards",
  };
  return ReactDom.createPortal(
    <div className="App">
      <div style={backdrop}></div>
      <div style={modal}>
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${videoId}`}
          width={"100%"}
          height="600vh"
        ></iframe>
        <button
          style={{ position: "fixed", top: "10vh", right: "5vw" }}
          className="btn btn-danger mt-2"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
