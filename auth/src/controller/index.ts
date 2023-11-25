import { Request, Response } from "express";
import { authService } from "../service"

export async function loginForDriver(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const result = await authService.driver.login(email, password);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}