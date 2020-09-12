import { getRepository } from "typeorm";
import Company from "../models/Company";

interface Request {
  name: string;
  description: string;
  social_facebook?: string;
  social_instagram?: string;
}

class CreateCompanyService {
  public async execute({ name, description, social_facebook, social_instagram}: Request): Promise<Company> {
    const companyRespository = getRepository(Company);

    const company = companyRespository.create({
      name,
      description,
      social_instagram,
      social_facebook
    });

    await companyRespository.save(company);

    return company;
  }
}

export default CreateCompanyService;
