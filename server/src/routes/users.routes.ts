import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  return response.send(users);
});

userRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const user =  await createUserService.execute({
    name,
    email,
    password
  });

  delete user.password;

  return response.json(user);

});

export default userRouter;


