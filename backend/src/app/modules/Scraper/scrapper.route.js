import express from "express";
import { ScrapperController } from "./scraper.controller.js";
const ScraperRoutes = express.Router();

ScraperRoutes.get("/:product", ScrapperController.getAllScrape);
ScraperRoutes.get("/", ScrapperController.getAllScrape);

export default ScraperRoutes;
