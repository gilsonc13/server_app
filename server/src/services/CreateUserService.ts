import { getRepository } from "typeorm";
import User from "../models/User";

import { hash } from 'bcryptjs';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {

  public async execute({ name, email, password }: Request): Promise<User>{
    const userRepository = getRepository(User);

    const findEmailExists = userRepository.findOne({
      where: { email }
     });

    if(findEmailExists) {
      // return 'Email address alredy used!';
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash
    });

    await userRepository.save(user);

    return user;

  }

}

export default CreateUserService;
