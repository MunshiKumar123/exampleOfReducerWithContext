import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from "./components/Product"
// import Demo from "./components/Demo"
// import Test from "./components/Test"
// import UseReduccer from "./components/UseReduccer"
import ReducerContext from "./components/reduceContext/ReducerContext"

const App = () => {



  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            {/* <Product /> */}
            {/* <Demo /> */}
            {/* <Test /> */}
            <ReducerContext />
          </div>
          <div className="col">
            {/* <UseReduccer /> */}

          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 bg-primary">
            <h3>Column 1</h3>
            <p>I am a Bachelor of Engineering graduate in computer science from Sant Longowal Institute of Engineering and Technology. I have done Diploma in Electronics Engineering from Aligarh Muslim University. I have completed a full stack web development course from Udemy.com (link of certificate).In which, I got to learn HTML, CSS3, JavaScript. I have recently done fifteen days internship on JavaScript and earned JavaScript Data Structure and Algorithm Certificate from Freecodecamp (link of certificate). As a final year degree project, I made a Resume Classifier web app. This web app is used to classify the resume according to your need from bundle of resumes. I have done forty days training on Python at Naresh I Technology, Hyedrabad. In this training i learned basic concept of Python and OOPS.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div className="col-sm-4 bg-danger">
            <h3>Column 2</h3>
            <p>I am a Bachelor of Engineering graduate in computer science from Sant Longowal Institute of Engineering and Technology. I have done Diploma in Electronics Engineering from Aligarh Muslim University. I have completed a full stack web development course from Udemy.com (link of certificate).In which, I got to learn HTML, CSS3, JavaScript. I have recently done fifteen days internship on JavaScript and earned JavaScript Data Structure and Algorithm Certificate from Freecodecamp (link of certificate). As a final year degree project, I made a Resume Classifier web app. This web app is used to classify the resume according to your need from bundle of resumes. I have done forty days training on Python at Naresh I Technology, Hyedrabad. In this training i learned basic concept of Python and OOPS.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>

          </div>
          <div className="col-sm-4 bg-warning">
            <h3>Column 3</h3>
            <p>I am a Bachelor of Engineering graduate in computer science from Sant Longowal Institute of Engineering and Technology. I have done Diploma in Electronics Engineering from Aligarh Muslim University. I have completed a full stack web development course from Udemy.com (link of certificate).In which, I got to learn HTML, CSS3, JavaScript. I have recently done fifteen days internship on JavaScript and earned JavaScript Data Structure and Algorithm Certificate from Freecodecamp (link of certificate). As a final year degree project, I made a Resume Classifier web app. This web app is used to classify the resume according to your need from bundle of resumes. I have done forty days training on Python at Naresh I Technology, Hyedrabad. In this training i learned basic concept of Python and OOPS.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default App;
