import React from "react";
import "../App.css";
import "../index.css";

const CarDetails = ({ data }) => {
  // You can use the history object to redirect the user
  function handleRedirect() {
    console.log("Redirecting");
  }
  console.log(data);
  return (
    <div className="text-red-500 bg-black m-5">
      <div className="">{data.title}</div>
      <div className="items-center justify-center">
        <div className="flex items-center justify-center">
          🖌Exterior: {data.exterior}
        </div>
        <div className="flex items-center justify-center">
          🕹Roof: {data.roof}
        </div>
        <div className="flex items-center justify-center">
          🪙 Wheels: {data.wheels}
        </div>
        <div className="flex items-center justify-center">
          📭Interior: {data.interior}
        </div>
      </div>
      <div className="flex justify-end">
        {" "}
        <div className="">💵Cost: ${data.cost} </div>
        <li>
          <a href={`/customcars/${data.id}`} role="button">
            Detail
          </a>
        </li>
      </div>
    </div>
  );
};

export default CarDetails;
