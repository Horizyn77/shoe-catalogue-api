import express from "express";
import 'dotenv/config';
import pgPromise from 'pg-promise';
import cors from "cors";

import ShoeCatalogueAPIRoutes from "./routes/shoe-catalogue-api-routes.js";
import ShoeCatalogueAPIServices from "./services/shoe-catalogue-api-services.js"

const app = express();
const pgp = pgPromise({});

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString)

const PORT = process.env.PORT || 3010;

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const shoeCatalogueAPIServices = ShoeCatalogueAPIServices(db);
const shoeCatalogueAPIRoutes = ShoeCatalogueAPIRoutes(shoeCatalogueAPIServices);

app.get("/api/shoes", shoeCatalogueAPIRoutes.getAllShoes)

app.get("/api/shoes/brand/:brandname", shoeCatalogueAPIRoutes.getShoesByBrand)

app.get("/api/shoes/size/:size", shoeCatalogueAPIRoutes.getShoesBySize)

app.get("/api/shoes/brand/:brandname/size/:size", shoeCatalogueAPIRoutes.getShoesByBrandAndSize)

app.get("/api/shoes/colour/:colour", shoeCatalogueAPIRoutes.getShoesByColour)

app.get("/api/shoes/brand/:brandname/colour/:colour", shoeCatalogueAPIRoutes.getShoesByBrandAndColour)

app.get("/api/shoes/brand/:brandname/colour/:colour/size/:size", shoeCatalogueAPIRoutes.getShoesByBrandAndColourAndSize)

app.get("/api/shoes/colour/:colour/size/:size", shoeCatalogueAPIRoutes.getShoesByColourAndSize)

app.post("/api/shoes/sold/:id", shoeCatalogueAPIRoutes.updateShoeStock)

app.post("/api/shoes", shoeCatalogueAPIRoutes.addNewShoe)

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`));