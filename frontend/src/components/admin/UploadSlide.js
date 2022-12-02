import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

const UploadSlide = () => {
  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("Slide Uploaded successfully!!");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("Slide Uploaded successfully!!");
      }
    });
  };

  const handleSlideSubmit = (formdata) => {
    formdata.thumbnail = selImage;
    formdata.file = selFile;
    console.log(formdata);

    fetch("http://localhost:5000/slide/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Slide Uploaded Successfully!!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Some Error Occurred:(",
        });
      }
    });
  };

  return (
    <div style={{ backgroundColor: "#2779e2" }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-8">
            <h1 className="text-white mb-4">Upload Slide here</h1>

            <div className="card" style={{ borderRadius: "10px", marginBottom: "5rem" }}>
              <div className="card-body">
                <Formik
                  initialValues={{
                    title: "",
                    description: "",
                    numOfSlide: "",
                    category: "",
                    file: "",
                    thumbnail: "",
                    createdAt: "",
                  }}
                  onSubmit={handleSlideSubmit}
                >
                  {({ values, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row align-items-center pt-2 pb-2">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Title of Slide</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input
                            id="title"
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Slide Title"
                            value={values.title}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

<div className="row align-items-center py-2">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Slide Description</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input
                            id="description"
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Description here"
                            value={values.description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      

                      <div className="row align-items-center py-2">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Number of Slides</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input
                            id="num_slide"
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Number of Slides"
                            value={values.numOfSlide}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      

                      <div className="row align-items-center py-2">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Slide Category</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input
                            id="cat_slide"
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Slide Category"
                            value={values.category}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      

                      <div className="row align-items-center py-2">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Slide Thumbnail</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                        <input
                            className="form-control form-control-md"
                            onChange={uploadImage}
                            type="file"
                          />
                        </div>
                      </div>

                      

                      <div className="row align-items-center py-2">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Upload File</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input
                            className="form-control form-control-md"
                            onChange={uploadFile}
                            type="file"
                          />
                          <div className="small text-muted mt-2">
                            Upload your Slide/PPT or any other relevant file.
                            Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      

                     
                      <div className="row align-items-center py-3" style={{marginLeft : '20rem'}}>
                      <div className="px-0">
                        <button type="submit"  className="btn btn-primary btn-md">  Upload Slide     </button>
                      </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSlide;
