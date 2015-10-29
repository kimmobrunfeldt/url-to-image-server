import express from 'express';
import * as screenshotController from './controllers/screenshot-controller';

function createRouter() {
    const router = express.Router();

    router.get('/screenshot', screenshotController.getScreenshot);

    return router;
}

export default createRouter;
