import { Router } from "express";
import { loginForDriver } from "../controller";

const router = Router();

router.post("/driver", loginForDriver);

export { router }