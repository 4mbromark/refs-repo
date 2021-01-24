export class Url {
    private static BASE_REST = '/ref-be';

    private static USER = Url.BASE_REST + '/user';
    public static USER_GETBYID = Url.USER + '/getbyid/:id';
    public static USER_GETBYEMAIL = Url.USER + '/getbyemail/:email';
}