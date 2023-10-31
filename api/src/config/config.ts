import dotenv from 'dotenv'

// .env
dotenv.config();

// db
const db_name = 'core';
// use container_name
const db_url = `mongodb://db_containter:27017/${db_name}`;
const PORT = process.env.PORT || 3000;
const admin_url = "http://localhost:4000";
const site_url = "http://localhost:5000";

export const config = {
  mongo: {
    url: db_url,
  },
  server: {
    port: PORT,
    admin_url: admin_url,
    site_url: site_url,
  },
}