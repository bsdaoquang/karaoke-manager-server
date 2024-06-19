import { Router } from "express";
import { addnew, deleteRoom, getRooms, payment, updateRooms } from "../controllers/roomController.js";

const roomRouter = Router()

roomRouter.post('/add-new', addnew)
roomRouter.get('/get-rooms', getRooms)
roomRouter.put('/update-rooms', updateRooms)
roomRouter.get('/payment', payment)
roomRouter.delete('/delete-room', deleteRoom)


export default roomRouter