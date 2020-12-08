import React from "react";

import "./App.css";
import axios from "axios";

const todosList = () => { 
    const todoListV = () => {
        axios
          .get("http://localhost:4000/api/all")
          .then(function (response) {
            console.log("fnh", response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      return (
fnh
      )

}