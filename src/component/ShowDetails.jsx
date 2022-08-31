import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "../Home";

export default function ShowDetails() {
  const parse = require("html-react-parser");
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const { currentShow, api, crewData } = useSelector((state) => state.show);
  const {
    name,
    status,
    image,
    runtime,
    language,
    schedule,
    network,
    genres,
    rating,
    officialSite,
  } = currentShow;
  const [showData, setShowData] = useState("");
  console.log("showDetails");
  useEffect(() => {
    if (api) {
      fetch(api)
        .then((resp) => resp.json())
        .then((data) => setShowData(data));
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${currentShow.name}seriesOfficialTrailer&key=AIzaSyDkMxIdZDIWOXW03zO94sy140P298BicKk`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setVideoId(data.items[0].id.videoId);
        });
    }
  }, [api]);
  if (currentShow) {
    return (
      <>
        <div className="row">
          <h2 className="text-primary">{name}</h2>

          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src={image.medium} alt=""></img>
                <button
                  href="#"
                  className="btn btn-primary mt-2"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Watch Trailer
                </button>
                {open ? showTrailer(setOpen, videoId) : ""}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h6 className="card-title text-primary">Summary</h6>
              <div className="card-text">
                {currentShow.summary ? parse(currentShow.summary) : ""}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-primary">
                  <h6>Show Info</h6>
                </li>
                <li className="list-group-item">
                  Genres: {genres[0]}|{genres[1]}|{genres[2]}
                </li>
                <li className="list-group-item">
                  Official Site: <a href={officialSite}>{officialSite}</a>
                </li>
                <li className="list-group-item">
                  Schedule: {schedule.days} {schedule.time}
                </li>
                <li className="list-group-item">Status: {status}</li>
                <li className="list-group-item">Runtime: {runtime}</li>
                <li className="list-group-item">Language: {language}</li>
                <li className="list-group-item">
                  County: {network ? network.country.name : ""}
                </li>
                <li className="list-group-item">
                  Rating : {rating.average}/10
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <h5 className="text-info">
                    Previous Episode: {showData.name}
                  </h5>
                </li>
                <li className="list-group-item">
                  Air Date: {showData.airdate}
                </li>

                <li className="list-group-item">
                  Air Time: {showData.airtime}
                </li>
                <li className="list-group-item">
                  Episode: {showData.season}X{showData.number}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <h6 className="text-info">Episode Summary:</h6>
            <>{showData.summary ? parse(showData.summary) : ""}</>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <img
                    alt="img"
                    id={!showData.image ? "img-not-found" : ""}
                    src={
                      showData.image ? showData.image.medium : "notfound.png"
                    }
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="text-primary">Cast :</h4>
          {crewData.map((crew, index) => {
            return (
              <div
                key={index}
                className="col-sm-2 p-1 col-4"
                onClick={() => {
                  //search person on google
                  const url = `https://www.google.com/search?q=${crew.person.name}`;
                  window.open(url);
                }}
              >
                <div className="card">
                  <div className="card-body">
                    <>
                      <img
                        className="card-img-top"
                        src={
                          crew.character.image
                            ? crew.character.image.medium
                            : "notfound.png"
                        }
                        alt=""
                      ></img>
                      <div className="text-info">
                        {crew.person.name}{" "}
                        <span className="text-muted"> as </span>
                        {crew.character.name}
                      </div>
                    </>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  return <Home></Home>;
}

function showTrailer(setOpen, videoId) {
  const Style = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
  };
  return (
    <div style={Style}>
      <iframe
        title="trailer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>

      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          setOpen(false);
        }}
      >
        Close
      </button>
    </div>
  );
}
