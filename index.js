import express from "express";
import { engine } from "express-handlebars";
import 'dotenv/config';
import pgPromise from 'pg-promise';

import ShoeCatalogueAPIRoutes from "./routes/shoe-catalogue-api-routes.js";
import ShoeCatalogueAPIServices from "./services/shoe-catalogue-api-services.js"

const app = express();
const pgp = pgPromise({});

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString)

const PORT = process.env.PORT || 3000;

app.engine("handlebars", engine({
    layoutsDir: "./views/layouts"
}));

app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const shoeCatalogueAPIServices = ShoeCatalogueAPIServices(db);
const shoeCatalogueAPIRoutes = ShoeCatalogueAPIRoutes(shoeCatalogueAPIServices);

app.get("/api/shoes", shoeCatalogueAPIRoutes.getAllShoes)

app.get("/api/shoes/brand/:brandname", shoeCatalogueAPIRoutes.getShoesByBrand)

app.get("/api/shoes/size/:size", shoeCatalogueAPIRoutes.getShoesBySize)

app.get("/api/shoes/brand/:brandname/size/:size", shoeCatalogueAPIRoutes.getShoesByBrandAndSize)

app.get("/api/shoes/colour/:colour", shoeCatalogueAPIRoutes.getShoesByColour)

app.post("/api/shoes/sold/:id", shoeCatalogueAPIRoutes.updateShoeStock)

app.post("/api/shoes", shoeCatalogueAPIRoutes.addNewShoe)

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`));
