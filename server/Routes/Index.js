import { Router } from "express";
import AuthRoutes from './auth.routes.js'
// import ProductRoutes from './ProductRoutes.js'
// import UserRoutes from "./UserRoutes.js"

const router = Router();


router.use('/auth', AuthRoutes);
// router.use('/product', ProductRoutes);
// router.use('/user', UserRoutes)

export default router;
