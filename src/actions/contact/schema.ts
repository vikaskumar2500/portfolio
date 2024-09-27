import mongoose from 'mongoose'

export interface Contacts extends mongoose.Document {
  email: string
  description: string
  count:number;
}
const ContactSchema = new mongoose.Schema<Contacts>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    description: {
      type: String,
      required: [true, 'Min 10 words are required'],
    },
    count:{
      type:Number,
      default:1,
    }
  },
  { timestamps: true, toJSON: { transform:true} },
)

export default mongoose.models.Contacts ||
  mongoose.model<Contacts>('Contacts', ContactSchema);
