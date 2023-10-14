const baseUrl = "http://localhost:3000";
const locationMap = {
  0: "chasearena",
  1: "levistadium",
  3: "staplescenter",
  2: "sapcenter",
};
import axios from "axios";

const getAllCars = async () => {
  try {
    const response = await fetch(`${baseUrl}/api`);

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getCarById = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`${baseUrl}/api/${id}`);
    const data = await response.json();
    console.log(data);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
const editCarById = async (id, changes) => {
  console.log(id);
  console.log(changes);
  try {
    axios
      .put(`${baseUrl}/api/car/${id}`, changes)
      .then((response) => {
        console.log("PUT request successful:", response.data);
      })
      .catch((error) => {
        console.error("PUT request failed:", error);
      });
    // const response = await fetch(`${baseUrl}/api/car/${id}`, {
    //   method: "PUT", // Use the appropriate HTTP method for updating data
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(changes), // Convert the changes object to JSON
    // });
    // console.log(response);

    // if (response.ok) {
    //   const data = await response.json();
    //   console.log(data);
    //   return data;
    // } else {
    //   // Handle errors here
    //   console.log("Error:", response.status, response.statusText);
    //   return null; // You may want to handle errors differently
    // }
  } catch (err) {
    console.log(err);
    return null; // You may want to handle errors differently
  }
};

// const getEventsByLocation = async (id) => {
//   try {
//     const response = await fetch(`${baseUrl}/events/${locationMap[id]}`);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

export default {
  getAllCars,
  getCarById,
  editCarById,
};
