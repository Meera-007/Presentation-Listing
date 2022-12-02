import React, { useEffect, useState } from "react";
import app_config from "../../config";

const BrowseSlides = () => {
  const url = app_config.apiUrl;
  const [slideList, setSlideList] = useState([]);

  // to track data loading
  const [loading, setLoading] = useState(false);

  const getDataFromBackend = () => {
    fetch("http://localhost:5000/slide/getall").then((res) => {
      if (res.status === 200) {
        console.log("Data Fetched successfully!!");
        res.json().then((data) => {
          console.log(data);
          setSlideList(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displaySlides = () => {
    if (loading) return <h1>Loading ...</h1>;

    return slideList.map((slide) => (
      <div className="col-md-3">
        <div className="card">
          <img src={url + "/" + slide.thumbnail} />
          <div className="card-body">
            <h4>{slide.title}</h4>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <div className="row">{displaySlides()}</div>
      </div>
    </div>
  );
};

export default BrowseSlides;
