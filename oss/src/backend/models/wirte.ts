import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IWrite {
  studentNumber: number;
  age: number;
  nickname: string;
  major: string;
  title: string;
  restaurant: string;
  vaccine: boolean;
  password: string;
  body: string;
  hashedPassword?: string;
  publishedDate: Record<string, Date>
}

interface IWriteDocument extends IWrite, Document {
  setPassword: (password: string) => Promise<void>;
  checkPassword: (password: string) => Promise<boolean>;
  serialize: () => any;
  generateToken: () => string;
}

interface IWriteModel extends Model<IWriteDocument> {
  findByUsername: (nickname: string) => Promise<boolean>;
}

const WriteSchema: Schema<IWriteDocument> = new mongoose.Schema({
  studentNumber: Number,
  age: Number,
  nickname: String,
  major: String,
  title: String,
  restaurant: String,
  vaccine: Boolean,
  password: String,
  body: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  }
});

WriteSchema.methods.setPassword = async function(password: string) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
}

WriteSchema.methods.checkPassword = async function(password: string) {
  const result = await bcrypt.compare(password, this.hashedPassword!);
  return result;
}

WriteSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      nickname: this.nickname,
    },
    String(process.env.JWT_SECRET),
    {
      expiresIn: '7d',
    },
  );
  return token;
}

WriteSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
}

WriteSchema.statics.findByUsername = async function(nickname: string) {
  return this.findOne({ nickname });
}

const Write = mongoose.model<IWriteDocument, IWriteModel>('Write', WriteSchema);
export default Write;