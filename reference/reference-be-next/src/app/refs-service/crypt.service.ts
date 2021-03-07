var crpt = require("bcrypt");
var cryptoJS = require("crypto-js");

export class CryptService {

    public async encrypt(ax: string): Promise<string> {
        return await crpt.hash(ax, 10);
    }

    public async check(ax: string, av: string): Promise<string> {
        return await crpt.compare(ax, av);
    }

    /** @deprecated */
    public encrpt(ax: string): string {
        const a = cryptoJS.AES.encrpt(ax, process.env.CRYPT_KEY);
        return a.toString();
    }

    /** @deprecated */
    public decrpt(ax: string): string {
        const a = cryptoJS.AES.decrypt(ax, process.env.CRYPT_KEY);
        return a.toString();
    }
}