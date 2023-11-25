import { Router } from "express";
import { driverController } from "../controller"
const router = Router();

router.get("/", driverController.getDrivers);
router.get("/:id", driverController.getDriver);
router.get("/email/:email", driverController.getDriverByEmail);
router.post("/", driverController.createDriver);
router.put("/:id", driverController.updateDriver);
router.delete("/:id", driverController.deleteDriver);

export { router };