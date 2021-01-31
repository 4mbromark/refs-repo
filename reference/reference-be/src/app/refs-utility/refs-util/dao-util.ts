import { User } from '../refs-db/entity/reguser-withdefine';
import { Alix } from '../refs-db/entity/alix-withdefine';
import { Model } from "sequelize/types";

export class DaoUtil {
    public static ifNotNull(o: Model | null): typeof Alix | typeof User | null {
        if (o) {
            return o.get();
        } else {
            return null;
        }
    }
    public static ifListNotNull(ol: Model[]) { // TODO
        if (ol.length > 0) {
            let list = [];
            for (let o of ol) {
                list.push(o.get());
            }
            return list;
        } else {
            return [];
        }
    }
}