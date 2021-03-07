export class ServiceUtil {

    public static getNumberArrayByString(s: string): number[] {
        const idNumber = [];
        if (s) {
            const idString = s.split(';');
            for (let id of idString) {
                idNumber.push(parseInt(id));
            }
        }
        return idNumber;
    }
}