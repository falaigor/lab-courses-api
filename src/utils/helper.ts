import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const compareHash = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash);
