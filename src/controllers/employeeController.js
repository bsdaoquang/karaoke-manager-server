import EmploeeModel from '../models/EmploeeModel.js';

const addnew = async (req, res) => {
  const data = req.body 
  try {
    const employee = new EmploeeModel(data)

   await employee.save()

   res.status(200).json({
    message: 'Employee added',
    data: employee
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
const getEmploese = async (req, res) => {
  try {
    const emploese = await EmploeeModel.find()

   res.status(200).json({
    message: 'Room added',
    data: emploese
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

const getEmploeseDetail = async (req, res) => {
  const {id} = req.query
  try {
    const emploese = await EmploeeModel.findById(id)

   res.status(200).json({
    message: 'Room added',
    data: emploese
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}


const updateRooms = async (req, res) => {
  const data = req.body
  const {id} = req.query

  try {
    await EmploeeModel.findByIdAndUpdate(id, data)

   res.status(200).json({
    message: 'Room updated',
    data: []
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

const deleteRoom = async (req, res) => {
  const {id} = req.query

  try {
   await EmploeeModel.findByIdAndDelete(id)

   res.status(200).json({
    message: 'Deleted',
    data: []
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}



export {
  addnew,
  getEmploese,
  getEmploeseDetail,
  updateRooms,
  deleteRoom
}