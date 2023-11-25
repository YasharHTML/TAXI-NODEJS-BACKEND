import { IAuthService } from "../types/auth_service";
import { AuthClient } from "./axios"
import { comparePasswords } from "./hash";

class AuthService {
    customer = new CustomerAuthService();
    driver = new DriverAuthService();
}

class CustomerAuthService implements IAuthService {
    private client = AuthClient("CUSTOMER");
    async login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {
        const { data } = await this.client.get("/api/customer/email/" + email);
        const result = JSON.parse(data);
        try {
            const status = await comparePasswords(password, result.password);
            if (status)
                return {
                    accessToken: "",
                    refreshToken: ""
                }
            throw new Error("Wrong password");
        } catch (error) {
            throw error
        }
    }
}

class DriverAuthService implements IAuthService {
    private client = AuthClient("DRIVER");
    async login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {
        const { data } = await this.client.get("/api/driver/email/" + email);
        const result = JSON.parse(data);
        try {
            const status = await comparePasswords(password, result.password);
            if (status)
                return {
                    accessToken: "",
                    refreshToken: ""
                }
            throw new Error("Wrong password");
        } catch (error) {
            throw error
        }
    }
}

export const authService = new AuthService();