export class Url {
    private static BASE_REST = '/refs-be'
    public static REST = Url.BASE_REST;

    private static REST_USER = Url.BASE_REST + '/user';
    public static USER_AUTH = Url.REST_USER + '/auth';
    public static USER_GETBYID = Url.REST_USER + '/getbyid/:id';
    public static USER_GETBYEMAIL = Url.REST_USER + '/getbyemail/:email';

    private static REST_ALIX = Url.BASE_REST + '/alix';
    public static ALIX = Url.REST_ALIX;
    public static ALIX_GETBYID = Url.ALIX + '/getbyid/:id';
    public static ALIX_GETBYALIX = Url.ALIX + '/getbyalix/:alix';
    public static ALIX_GETBYIDUSER = Url.ALIX + '/getbyiduser/:iduser';
    public static ALIX_GETBYIUA = Url.ALIX + '/getbyiua/:idUser/:alix';
}