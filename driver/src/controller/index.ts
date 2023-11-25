import { Request, Response } from "express";
import { DriverService } from "../service";

const driverService = new DriverService();

async function getDrivers(req: Request, res: Response) {
    const { page = "0", limit = "10" } = req.query;
    const skip = (+page) * (+limit);
    const take = +limit;
    try {
        const result = await driverService.getDrivers(skip, take);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function getDriver(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await driverService.getDriver(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function getDriverByEmail(req: Request, res: Response) {
    const { email } = req.params;
    try {
        const result = await driverService.getDriverByEmail(email);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function createDriver(req: Request, res: Response) {
    const driver = req.body;
    try {
        const result = await driverService.createDriver(driver);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function updateDriver(req: Request, res: Response) {
    const { id } = req.params;
    const driver = req.body;
    try {
        const result = await driverService.updateDriver(id, driver);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function deleteDriver(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await driverService.deleteDriver(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

export const driverController = {
    getDrivers,
    getDriver,
    getDriverByEmail,
    createDriver,
    updateDriver,
    deleteDriver,
};