import { Env } from "../refs-utility/refs-env/future-env";

var CryptoJS = require("crypto-js");

export class CryptService {

    public static encrypt(ax: string): string {
        const a = CryptoJS.AES.encrypt(ax, Env.CRYPT_KEY);
        return a.toString();
    }

    public static decrypt(ax: string): string {
        const a = CryptoJS.AES.decrypt(ax, Env.CRYPT_KEY);
        return a.toString();
    }
}