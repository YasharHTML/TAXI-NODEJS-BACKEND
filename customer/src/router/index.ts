import { Router } from "express";
import { customerController } from "../controller"
const router = Router();

router.get("/", customerController.getCustomers);
router.get("/:id", customerController.getCustomer);
router.get("/email/:email", customerController.getCustomerByEmail);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export { router };