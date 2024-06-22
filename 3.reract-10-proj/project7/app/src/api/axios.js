import axios from "axios";
// import { cors } from "cors";
// response_object.header("Access-Control-Allow-Origin", "*");
// response_object.header(
//   "Access-Control-Allow-Headers",
//   "Origin, X-Requested-With, Content-Type, Accept"
// );
// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions)); // Use cors middleware

// const cors = require("cors");
// const express = require("express");
// const app = express();
// app.use(cors());

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default Axios;
