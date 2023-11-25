import { Driver, PrismaClient } from "@prisma/client";
import { hashPassword } from "./hash"
const client = new PrismaClient();
client.$connect().then(() => console.log("Connected"));

class DriverService {
    getDrivers(skip: number, take: number) {
        return client.driver.findMany({ skip, take, where: { deleted: false } });
    }

    getDriver(id: string) {
        return client.driver.findUnique({
            where: {
                deleted: false,
                id
            }
        })
    }

    getDriverByEmail(email: string) {
        return client.driver.findUnique({
            where: {
                email,
                deleted: false,
            }
        })
    }

    async createDriver(driver: Driver) {
        const {
            email,
            password,
            username
        } = driver;

        return client.driver.create({
            data: {
                email,
                password: await hashPassword(password),
                username
            }
        })
    }

    async updateDriver(id: string, driver: Partial<Driver>) {
        const {
            email,
            password,
            username
        } = driver;

        return client.driver.update({
            where: { id, deleted: false },
            data: {
                email,
                password: password ? await hashPassword(password) : undefined,
                username
            }
        })
    }

    deleteDriver(id: string) {
        return client.driver.update({
            where: { id, deleted: false },
            data: { deleted: true }
        })
    }
}

export { DriverService }; 