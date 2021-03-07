export declare class CryptService {
    encrypt(ax: string): Promise<string>;
    check(ax: string, av: string): Promise<string>;
    /** @deprecated */
    encrpt(ax: string): string;
    /** @deprecated */
    decrpt(ax: string): string;
}
