import express from 'express';
import {getUser2, changeEmail , changePassword , changeExpD , addItem, getUser, createUser, login, getList, deleteItem, getItemData} from '../controllers/posts.js'

const router = express.Router();

router.get("/user/create",getUser).post("/user/create",createUser);
router.patch("/user/addItem",addItem);
router.post("/user/login",login);
router.get('/user/:id',getUser2)
router.get("/user/list",getList); 
router.patch("/user/deleteItem",deleteItem);

router.get("/item",getItemData);

router.post("/user/changeEmail",changeEmail);
router.post("/user/changePassword",changePassword);
router.post("/user/changeExpD",changeExpD);


export default router;
