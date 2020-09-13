import { response, Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';

import uploadConfig from '../config/upload'
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Customer from '../models/Customer';
import CreateCustomerService from '../services/CreateCustomerService';

const customersRouter = Router();
customersRouter.use(ensureAuthenticated);


customersRouter.get('/', async (request, response) => {
  const customerRepository = getRepository(Customer);
  const customers = await customerRepository.find();
  return response.send(customers);
});

const upload = multer(uploadConfig);
customersRouter.post('/', upload.single('image'), async (request, response) => {

  const { name, url_link, company_id } = request.body;
  const imageName = request.file.filename;

  const createCustomerService = new CreateCustomerService();

  const customer = await createCustomerService.execute({ name, url_link, imageName, company_id });

  return response.json(customer);

});

export default customersRouter;
