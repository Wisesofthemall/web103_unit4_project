import React from "react";
import "../App.css";
import CarDetails from "./CarDetails";
const customizeCar = {
  title: "Lambo Car",
  exterior: "Red Tint",
  roof: "Black",
  wheels: "Black 20 spoke",
  interior: "Space gray",
  cost: 350000,
  customized: true, // Add the customized property and set it to false
};

const EditCar = () => {
  return (
    <div>
      <CarDetails data={customizeCar} />
    </div>
  );
};

export default EditCar;
