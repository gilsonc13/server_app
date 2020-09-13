import { getRepository } from "typeorm";
import Customer from "../models/Customer";

interface Request {
  name: string;
  url_link: string;
  imageName: string;
  company_id: string;
}

class CreateCustomerService {
  public async execute( { name, url_link, imageName, company_id }: Request ): Promise<Customer>{
    const  customerRespository = getRepository(Customer);

    const customer = customerRespository.create({
      name,
      url_link,
      image: imageName,
      company_id
    });

    await customerRespository.save(customer);

    return customer;

  }
}

export default CreateCustomerService;
