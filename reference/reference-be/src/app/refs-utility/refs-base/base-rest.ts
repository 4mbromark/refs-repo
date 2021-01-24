import express, { Router } from 'express';

export class BaseRest {
    protected router: Router;

    constructor() {
        this.router = express.Router();
    }

    public getRouter(): Router {
        return this.router;
    }
}