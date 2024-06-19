import mongoose, {Schema} from 'mongoose';

const RoomScheme = new Schema({
  title: String,
  price: Number,
  type: String,
  img: String,
  status: String,
  time: Date
})

const RoomModel = mongoose.model('rooms', RoomScheme)
export default RoomModel