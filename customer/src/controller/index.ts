import { Request, Response } from "express";
import { CustomerService } from "../service";

const customerService = new CustomerService();

async function getCustomers(req: Request, res: Response) {
    const { page = "0", limit = "10" } = req.query;
    const skip = (+page) * (+limit);
    const take = +limit;
    try {
        const result = await customerService.getCustomers(skip, take);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function getCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await customerService.getCustomer(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function getCustomerByEmail(req: Request, res: Response) {
    const { email } = req.params;
    try {
        const result = await customerService.getCustomerByEmail(email);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function createCustomer(req: Request, res: Response) {
    const customer = req.body;
    try {
        const result = await customerService.createCustomer(customer);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const customer = req.body;
    try {
        const result = await customerService.updateCustomer(id, customer);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await customerService.deleteCustomer(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

export const customerController = {
    getCustomers,
    getCustomer,
    getCustomerByEmail,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};