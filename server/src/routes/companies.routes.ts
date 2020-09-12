import { Router } from 'express';
import { getRepository } from 'typeorm';
import Company from '../models/Company';
import CreateCompanyService from '../services/CreateCompanyService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const companiesRouter = Router();

companiesRouter.use(ensureAuthenticated);

companiesRouter.get('/', async (request, response) => {
  const companyRepository = getRepository(Company);
  const companies = await companyRepository.find();
  return response.json(companies);
});

companiesRouter.post('/', async (request, response) => {
  const { name, description, social_facebook, social_instagram } = request.body;

  const createCompany = new CreateCompanyService();

  const company = await createCompany.execute({
    name,
    description,
    social_facebook,
    social_instagram
  });

  return response.json(company);

});

export default companiesRouter;


