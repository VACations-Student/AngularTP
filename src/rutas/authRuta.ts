import {Router} from 'express';
const router : Router = Router();
import { signin, signup, profile } from '../controladores/authController';
import {validacionDeToken} from '../lib/verificarToken'

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', validacionDeToken,profile);

export default router;
