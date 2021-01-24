export class Url {
    private static BASE_REST = '/ref-be';

    private static USER = Url.BASE_REST + '/user';
    public static USER_GETBYID = Url.USER + '/getbyid/:id';
    public static USER_GETBYEMAIL = Url.USER + '/getbyemail/:email';

    private static ALIX = Url.BASE_REST + '/alix';
    public static ALIX_GETBYID = Url.ALIX + '/getbyid/:id';
    public static ALIX_GETBYALIX = Url.ALIX + '/getbyalix/:alix';
    public static ALIX_GETBYIDUSER = Url.ALIX + '/getbyiduser/:iduser';
    public static ALIX_GETBYIUA = Url.ALIX + '/getbyiua/:idUser/:alix';
}