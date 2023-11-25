import { Axios } from "axios";
const {
    CUSTOMER_URL,
    DRIVER_URL
} = process.env;

export function AuthClient(client: "CUSTOMER" | "DRIVER") {
    return new Axios({ baseURL: client === "CUSTOMER" ? CUSTOMER_URL : DRIVER_URL, });
}