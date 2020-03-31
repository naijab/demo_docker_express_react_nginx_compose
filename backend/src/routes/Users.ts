import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

// Init shared
const router = Router();


/******************************************************************************
 *                      Get All Users - "GET /api/users"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    return res.status(OK).json({
        "user": {
            "id": 1,
            "name": "John",
        }
    });
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
