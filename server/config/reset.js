import { pool } from "../config/database.js";
import "../config/dotenv.js";
import { carData } from "../data/carData.js";

const createGiftsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      exterior VARCHAR(255) NOT NULL,
      roof VARCHAR(255) NOT NULL,
      wheels VARCHAR(255) NOT NULL,
      interior VARCHAR(255) NOT NULL,
      cost INT NOT NULL,
      customized BOOLEAN NOT NULL DEFAULT FALSE

    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedGiftsTable = async () => {
  await createGiftsTable();

  carData.forEach((car) => {
    const insertQuery = {
      text: "INSERT INTO cars (title, exterior, roof, wheels, interior, cost, customized) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };

    const values = [
      car.title,
      car.exterior,
      car.roof,
      car.wheels,
      car.interior,
      car.cost,
      car.customized,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting events", err);
        return;
      }
      console.log(`✅ ${car.title} added successfully`);
    });
  });
};

seedGiftsTable();
