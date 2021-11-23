import Koa from 'koa';
import Joi from 'joi';
import Write from '../../models/wirte';
import mongoose from 'mongoose';


const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx: Koa.Context, next: () => void) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Write.findById(id);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    console.log(e);
  }
};


export const write = async (ctx: Koa.Context) => {
  const schema = Joi.object().keys({
    studentNumber: Joi.number().required(),
    age: Joi.number().required(),
    nickname: Joi.string().required(),
    major: Joi.string().required(),
    title: Joi.string().required(),
    restaurant: Joi.string().required(),
    vaccine: Joi.boolean().required(),
    password: Joi.string().required(),
    body: Joi.string().required(),
  })
  const result = schema.validate(ctx.request.body);

  if(result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    studentNumber,
    age,
    nickname,
    major,
    restaurant,
    vaccine,
    title,
    password,
    body
  } = ctx.request.body;

  try {
    const exists = await Write.findByUsername(nickname);
    if(exists) {
      console.log(exists);
      ctx.status = 409;
      return;
    }

    const write = new Write({
      studentNumber,
      nickname,
      age,
      major,
      restaurant,
      vaccine,
      title,
      body
    });
    await write.setPassword(password);
    await write.save();

    ctx.body = write.serialize();

    const token = write.generateToken();

  } catch (e) {
    console.log(e);
  }
}

export const list = async (ctx: Koa.Context) => {
  const page = parseInt(String(ctx.query.page) || '1', 10);
  if(page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const writes = await Write
      .find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
    const writeCount = await Write.countDocuments().exec();
    ctx.set('Last-page', String(Math.ceil(writeCount/10)));
    ctx.body = writes
      .map(post => post.toJSON())
      .map(post => ({
        ...post,
        body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      }));
  } catch (e) {
    console.log(e);
  }
}

export const remove = async (ctx: Koa.Context) => {
  const { id } = ctx.params;
  try {
    await Write.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    console.log(e);
  }
}