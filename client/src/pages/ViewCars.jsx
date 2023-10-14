import React, { useEffect, useState } from "react";
import "../App.css";
import CarsAPI from "../service/CarsAPI";
import CarDetails from "./CarDetails";

const ViewCars = () => {
  const [cars, setCars] = useState(undefined);

  const allCars = async () => {
    try {
      console.log("can it work ?");
      const carData = await CarsAPI.getAllCars();
      console.log(carData);
      setCars(carData);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    allCars();
  }, []);

  return (
    <div>{cars ? cars.map((data) => <CarDetails data={data} />) : ""}</div>
  );
};

export default ViewCars;
