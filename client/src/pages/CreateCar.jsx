import React from "react";
import "../App.css";
import CarDetails from "./CarDetails";
const customizeCar = {
  title: "Lambo Car",
  exterior: "Blue Tint",
  roof: "Yellow",
  wheels: "Yellow 26 spoke",
  interior: "Yellow",
  cost: 350000,
  customized: true, // Add the customized property and set it to false
};
const CreateCar = () => {
  return (
    <div>
      <CarDetails data={customizeCar} />
    </div>
  );
};

export default CreateCar;
