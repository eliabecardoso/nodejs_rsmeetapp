import * as Yup from 'yup';

import File from '../models/File';

class FileController {
  async store(req, res) {
    const schema = Yup.object().shape({
      typeFile: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(401).json({ error: 'Validation fails' });

    const { originalname: name, filename: path } = req.file;
    const { typeFile } = req.body;

    const file = await File.create({
      name,
      path,
      type: typeFile,
    });

    return res.json(file);
  }
}

export default new FileController();
