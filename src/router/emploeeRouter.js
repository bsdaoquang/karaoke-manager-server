import { Router } from "express";
import { addnew, deleteRoom, getEmploese, getEmploeseDetail, updateRooms } from "../controllers/employeeController.js";

const employeeRouter = Router()

employeeRouter.post('/add-new', addnew)
employeeRouter.get('/get-emploese', getEmploese)
employeeRouter.get('/get-emploese-detail', getEmploeseDetail)
employeeRouter.delete('/remove-emploee', deleteRoom)
employeeRouter.put('/update-emploee', updateRooms)


export default employeeRouter