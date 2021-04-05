import { ObjectId } from "mongoose";
import { User } from "../../refs-dao/schema/user.schema";
import { MasterUser } from "../../refs-object/master/MasterUser";
import { MasterUserWithToken } from "../../refs-object/master/MasterUserWithToken";

/**
 * @interface
 * Interfaccia per la gestione degli utenti ad alto livello
 * 
 * @author Marco Ambrosi <clsupproject@gmail.com>
 */
export interface UserMasterInterface {

    /**
     * @public @method
     * Metodo che prova ad autenticare un utente con la password inserita,
     * e ritorna un oggetto con utente e token se va a buon fine
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param uid mail o username dell'utente che si vuole autenticare
     * @param pwd password dell'utente che si vuole autenticare
     * 
     * @returns Promise<MasterUserWithToken>, se l'autenticazione va a buon fine
     * @throws UnauthorizedException, se la password non è corretta
     * @throws NotFoundException, se l'utente non esiste
     * 
     * @async
     */
    authUser(uid: string, pwd: string): Promise<MasterUserWithToken>;

    /**
     * @public @method
     * Verifica che il token sia ancora valido
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param token il token che deve essere verificato
     * 
     * @returns Promise<MasterUser>, se il token è ancora valido
     * @throws UnauthorizedException, se il token è scaduto o nonè valido
     * 
     * @async
     */
    verifyUser(token: string): Promise<MasterUser>;

    /**
     * @public @method
     * Ritorna l'immagine profilo dell'utente
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param idUser l'id dell'utente da ricercare
     * 
     * @returns Promise<string>, immagine profilo in byte[] se esiste
     * @throws NotFoundException, se l'immagine profilo non è stata impostata
     */
    getUserPropic(idUser: ObjectId): Promise<string>;

    /**
     * @public @method
     * Aggiorna i dati di un utente (nome, cognome, username)
     * 
     * @author Marco Ambrosi <clsupproject@gmail.com>
     * 
     * @param user i dati dell'utente da aggiornare
     * 
     * @returns Promise<MasterUser>, se il salvataggio va a buon fine
     * @throws InternalServerErrorException, se il salvataggio fallisce
     */
    saveUser(user: User): Promise<MasterUser>;
}