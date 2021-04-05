import { ObjectId } from 'mongoose';
import { MasterAlix } from "../../refs-object/master/MasterAlix";

/**
 * @interface
 * Interfaccia per la gestione delle alix ad alto livello
 * 
 * @author Marco Ambrosi <clsupproject@gmail.com>
 */
export interface AlixMasterInterface {

    /**
     * @public @method
     * Ottiene l'alix dato in input il nome o un alias
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param alixName il nome o l'alias da ricercare
     * 
     * @returns Promise<MasterAlix>, se l'alix esiste
     * @throws NotFoundException, se non esiste nessuna alix per i parametri correnti
     * 
     * @async
     */
    getAlix(alixName: string): Promise<MasterAlix>;

    /**
     * @public @method
     * Ritorna l'elenco delle alix di un utente
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param idUser l'id dell'utente da ricercare
     * 
     * @returns Promise<MasterAlix[]>, array che contiene tutte le alix dell'utente
     * 
     * @async
     */
    getAlixList(idUser: ObjectId): Promise<MasterAlix[]>;
}