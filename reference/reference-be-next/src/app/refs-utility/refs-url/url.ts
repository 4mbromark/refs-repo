export enum Url {
    BASE_REST = '/refs-nextbe',

    USER = '/user',
    USER_AUTH = '/auth',
    USER_VERIFY = '/verify',
    USER_REGISTER = '/register',
    USER_GETPROPIC = '/getpropic/:idUser',
    USER_SAVE = '/save',
    USER_SAVEPROPIC = '/savepropic',

    ALIX = '/alix',
    ALIX_LIST = '/alixlist/:idUser',

    CONTEXT = '/context',
    CONTEXT_BOARD = '/board',
    CONTEXT_PAGE = '/page',

    CARD = '/card',
    CARD_GETBYID = '/get/:id'

/*
    private static REST_ALIX = Url.BASE_REST + '/alix';
    public async ALIX = Url.REST_ALIX;
    public async ALIX_GETBYID = Url.ALIX + '/getbyid/:id';
    public async ALIX_GETBYALIX = Url.ALIX + '/getbyalix/:alix';
    public async ALIX_GETBYIDUSER = Url.ALIX + '/getbyiduser/:iduser';
    public async ALIX_GETBYIUA = Url.ALIX + '/getbyiua/:idUser/:alix';

    private static REST_BOARD = Url.BASE_REST + '/board';
    public async BOARD = Url.REST_BOARD;
    public async BOARD_GETBYID = Url.REST_BOARD + '/getbyid/:id';

    private static REST_PAGE = Url.BASE_REST + '/page';
    public async PAGE = Url.REST_PAGE;
    public async PAGE_GETBYID = Url.REST_PAGE + '/getbyid/:id';
    */
}