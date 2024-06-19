import mongoose, {Schema} from 'mongoose';

const EmpploeeScheme = new Schema({
  name: String,
	birthday: String,
	title: String,
	idNumber: String,
  img: String,
	phoneNumber: String,
	hireOfDate: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const EmpploeeModel = mongoose.model('empploees', EmpploeeScheme)
export default EmpploeeModel