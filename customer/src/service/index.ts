import { Customer, PrismaClient } from "@prisma/client";
import { hashPassword } from "./hash"
const client = new PrismaClient();
client.$connect().then(() => console.log("Connected"));

class CustomerService {
    getCustomers(skip: number, take: number) {
        return client.customer.findMany({ skip, take, where: { deleted: false } });
    }

    getCustomer(id: string) {
        return client.customer.findUnique({
            where: {
                deleted: false,
                id
            }
        })
    }

    getCustomerByEmail(email: string) {
        return client.customer.findUnique({
            where: {
                email,
                deleted: false,
            }
        })
    }

    async createCustomer(customer: Customer) {
        const {
            email,
            password,
            username
        } = customer;

        return client.customer.create({
            data: {
                email,
                password: await hashPassword(password),
                username
            }
        })
    }

    async updateCustomer(id: string, customer: Partial<Customer>) {
        const {
            email,
            password,
            username
        } = customer;

        return client.customer.update({
            where: { id, deleted: false },
            data: {
                email,
                password: password ? await hashPassword(password) : undefined,
                username
            }
        })
    }

    deleteCustomer(id: string) {
        return client.customer.update({
            where: { id, deleted: false },
            data: { deleted: true }
        })
    }
}

export { CustomerService }; 