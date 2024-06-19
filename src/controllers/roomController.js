import RoomModel from '../models/RoomModel.js';

const addnew = async (req, res) => {
  const data = req.body 
  try {
    const room = new RoomModel(data)

   await room.save()

   res.status(200).json({
    message: 'Room added',
    data: room
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
const getRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find()

   res.status(200).json({
    message: 'Room added',
    data: rooms
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
    await RoomModel.findByIdAndUpdate(id, data)

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

const payment = async (req, res) => {
  const {id} = req.query

  try {
   const room =  await RoomModel.findById(id)

   if (!room) {
    throw new Error('Room not found!')
   }

   const date = Date.now()
   const time = new Date(room.time).getTime()
   
   const total = Math.floor((((date - time))/1000) * (parseInt(room.price)/(60*60)))

   res.status(200).json({
    message: 'Room updated',
    data: {
      ...room,
      total
    }
   })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
const deleteRoom = async (req, res) => {
  const {id} = req.query

  console.log(id)
  try {
   await RoomModel.findByIdAndDelete(id)

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
  getRooms,
  updateRooms,
  payment,
  deleteRoom
}