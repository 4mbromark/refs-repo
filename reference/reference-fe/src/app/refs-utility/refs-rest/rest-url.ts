export class RestUrl {
  private static BASE_REST = '/refs-be';

  private static REST_USER = RestUrl.BASE_REST + '/user';
  public static USER_AUTH = RestUrl.REST_USER + '/auth';
  public static USER_VERIFY = RestUrl.REST_USER + '/verify';
  // public static USER_LOGOUT = RestUrl.REST_USER + '/logout';
  public static USER_REGISTER = RestUrl.REST_USER + '/register';
  public static USER_GETPROPIC = RestUrl.REST_USER + '/getpropic/';

  private static REST_ALIX = RestUrl.BASE_REST + '/alix';
  public static ALIX = RestUrl.REST_ALIX;

  private static REST_BOARD = RestUrl.BASE_REST + '/board';
  public static BOARD = RestUrl.REST_BOARD;

  private static REST_PAGE = RestUrl.BASE_REST + '/page';
  public static PAGE = RestUrl.REST_PAGE;
}
