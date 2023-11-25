import * as bcrypt from "bcrypt"

export function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export function comparePasswords(password: string, encrypted: string) {
    return bcrypt.compare(password, encrypted);
}