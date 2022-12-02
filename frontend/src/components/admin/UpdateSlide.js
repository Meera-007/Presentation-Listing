import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { Formik } from "formik";
  import React from "react";
  import Swal from "sweetalert2";
  import UploadSlide from "./UploadSlide";
  
  const UpdateSlide = ({slideFormData, fetchData, setShowUpdateForm}) => {
    const handleFormSubmit = (formdata) => {
      console.log(formdata);
  
      // 1. address
      // 2. request method
      // 3. data to be sent
      // 4. data format
  
      fetch("http://localhost:5000/slide/update/"+slideFormData._id, {
        method: "PUT",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          fetchData();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Updated Successfully!!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!!",
            text: "Some Error Occured",
          });
        }
      });
    };
  
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-muted text-center">Update Slide</h3>
  
            <Formik
              initialValues={slideFormData}
              onSubmit={handleFormSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-4">Title</label>
                  <input
                    className="form-control"
                    placeholder="Slide Title"
                    value={values.title}
                    id="title"
                    onChange={handleChange}
                  />
                  <label className="mt-4">Description</label>
                  <input
                    className="form-control"
                    placeholder="Description"
                    value={values.description}
                    id="desc"
                    onChange={handleChange}
                  />
                  <label className="mt-4">Num Of Slide</label>
                  <input
                    className="form-control"
                    placeholder="Num Of Slide"
                    value={values.numOfSlide}
                    id="numOfSlide"
                    onChange={handleChange}
                  />

<label className="mt-4">Category</label>
                  <input
                    className="form-control"
                    placeholder="Category"
                    value={values.category}
                    id="category"
                    onChange={handleChange}
                  />
                  <label className="mt-4">File</label>
                  <input
                    className="form-control"
                    placeholder="File"
                    value={values.file}
                    id="file"
                    onChange={handleChange}
                  />
                  <label className="mt-4">Thumbnail</label>
                  <input
                    className="form-control"
                    placeholder="Thumbnail"
                    value={values.thumbnail}
                    id="thumbnail"
                    onChange={handleChange}
                  />
                  
                  {/* <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={values.gender}
                      name="gender"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl> */}
  
                  <button className="btn btn-primary mt-5">Update Slide</button>
                  <button className="btn btn-danger mt-5" type="button" onClick={e => setShowUpdateForm(false)}>Cancel</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpdateSlide;
  