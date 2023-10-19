import * as bcrypt from 'bcryptjs';

const saltOrRounds = 10;

async function generateHash(plainText: string): Promise<string> {
  const hash = await bcrypt.hash(plainText, saltOrRounds);
  return hash;
}

async function compareHash(plainText: string, hash: string): Promise<any> {
  return await bcrypt.compare(plainText, hash);
}

export { generateHash, compareHash };
