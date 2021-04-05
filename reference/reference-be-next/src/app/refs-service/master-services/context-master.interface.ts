import { ObjectId } from "mongoose";
import { MasterBoard } from "../../refs-object/master/MasterBoard";
import { MasterPage } from "../../refs-object/master/MasterPage";

/**
 * @interface
 * Interfaccia per la gestione del context ad alto livello
 * 
 * @author Marco Ambrosi <clsupproject@gmail.com>
 */
export interface ContextMasterInterface {

    /**
     * @public @method
     * Ottiene la board della relativa alix
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param idAlix l'id dell'alix associata da ricercata
     * 
     * @returns Promise<MasterBoard>, la board relativa all'alix
     * 
     * @async
     */
    getBoard(idAlix: ObjectId): Promise<MasterBoard>;

    /**
     * @public @method
     * Ottiene una pagina data un'alix e un codice
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param idAlix l'id dell'alix associata da ricercare
     * @param code il codice della pagina
     * 
     * @returns Promise<MasterPage>, la board relativa all'alix
     * @throws NotFoundException, se la pagina non esiste
     * 
     * @async
     */
     getPage(idAlix: ObjectId, code: string): Promise<MasterPage>;
}