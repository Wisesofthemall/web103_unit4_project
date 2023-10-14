import { pool } from "../config/database.js";

const getCars = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM cars ORDER BY id ASC");
    return res.status(200).json(results.rows);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: error.message });
  }
};

const getCarsById = async (req, res) => {
  try {
    const CarId = req.params.id;

    const selectQuery = `SELECT title, exterior, roof, wheels, interior, cost,customized FROM cars WHERE id = ${CarId}`;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
const editCarById = async (req, res) => {
  try {
    const CarId = req.params.id;
    console.log("Car Id: " + CarId);

    // Assuming req.body contains the changes to apply
    const changes = req.body;
    console.dir(req);

    // Construct and execute an SQL UPDATE query
    const updateQuery = `UPDATE cars SET exterior = $1, roof = $2, wheels = $3, interior = $4, customized = $5 WHERE id = $6 RETURNING *`;
    const values = [
      changes.exterior,
      changes.roof,
      changes.wheels,
      changes.interior,
      true,
      CarId,
    ];

    const updatedCar = await pool.query(updateQuery, values);
    console.log(updatedCar.rows[0]);
    res.status(200).json(updatedCar.rows[0]);
  } catch (error) {
    console.log();
    res.status(409).json({ error: error.message });
  }
};

export default {
  getCars,
  getCarsById,
  editCarById,
};
