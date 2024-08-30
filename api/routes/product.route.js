import  express  from "express";

import { createproduct, createselect,  currentuser, deletedata, getproduct, updatesdata } from "../controllers/product.controller.js";


const router = express.Router();

router.post('/Pcreate',createproduct );
router.get('/getAll', getproduct);
router.post('/Ocreate',createselect );
router.get('/getlist/:currentuserId', currentuser);
router.put("/details/:dataId",  updatesdata);
router.delete("/delete/:suId",  deletedata);


export default router;