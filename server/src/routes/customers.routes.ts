import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload'

const customersRouter = Router();

const upload = multer(uploadConfig);

customersRouter.post('/', upload.single('image'), (request, response) => {

  console.log(request.file);
  console.log(request.body);

  return response.json({ ok: true});

});

export default customersRouter;
