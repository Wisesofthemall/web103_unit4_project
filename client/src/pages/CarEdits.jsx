import React, { useEffect, useState } from "react";
import CarsAPI from "../service/CarsAPI";
import { useParams } from "react-router-dom";
const customParts = {
  exterior: ["Red Tint", "Green Tint", "Yellow Tint", "Blue Tint"],
  roof: ["Black", "White", "Yellow", "Green"],
  wheels: [
    "Black 20 spoke",
    "White 23 spoke",
    "Yellow 26 spoke",
    "Green 32 spoke ",
  ],
  interior: ["Black", "White", "Yellow", "Green"],
};

function CarEdits() {
  const { id } = useParams();
  const [car, setCar] = useState(undefined);
  const [exterior, setExterior] = useState();
  const [roof, setRoof] = useState();
  const [wheels, setWheels] = useState();
  const [interior, setInterior] = useState();
  const handleSelectChange = (event) => {
    const { id, value } = event.target;

    // Update the state variable based on the select's id
    if (id === "exterior") {
      setExterior(value);
      console.log(value);
    } else if (id === "roof") {
      setRoof(value);
    } else if (id === "wheels") {
      setWheels(value);
    } else if (id === "interior") {
      setInterior(value);
    }
  };
  const getCarById = async () => {
    try {
      console.log("can it work ?");
      const carData = await CarsAPI.getCarById(id);
      console.log(carData);
      setCar(carData);
      setExterior(carData.exterior);

      setRoof(carData.roof);

      setWheels(carData.wheels);

      setInterior(carData.interior);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async () => {
    try {
      console.log("can it work ?");
      const carData = await CarsAPI.editCarById(id, {
        exterior,
        roof,
        wheels,
        interior,
      });
      console.log(carData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarById();
  }, []);
  return (
    <div className="text-red-500 bg-black m-5">
      <div className="">{car ? car.title : ""}</div>
      <div className="">💵{car ? car.cost : ""}</div>
      <div>
        {Object.entries(customParts).map(([part, options]) => (
          <div key={part}>
            <label htmlFor={part}>{part}</label>
            <select id={part} onChange={handleSelectChange} value={eval(part)}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="flex">
        <div onClick={handleEdit} className="">
          <button>Edit</button>
        </div>
        <div className="">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CarEdits;
