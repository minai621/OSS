import Koa from 'koa';
import jwt from 'jsonwebtoken';
import Write from '../models/wirte';

interface WriteIDJWTPayload extends jwt.JwtPayload {
  _id: string;
  nickname: string;
  exp: number;
}

const jwtMiddleware = async (ctx: Koa.Context, next: () => Promise<void>) => {
  const token = ctx.cookies.get('access_token');
  if(!token) return next();
  try {
    const decoded = <WriteIDJWTPayload>jwt.verify(token, String(process.env.JWT_SECRET));
    ctx.state.write = {
      _id: decoded._id,
      nickname: decoded.nickname,
    };
    const now = Math.floor(Date.now() / 1000);
    if(decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const write = await Write.findById(decoded._id);
      const token = write!.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    return next();
  }
};

export default jwtMiddleware;