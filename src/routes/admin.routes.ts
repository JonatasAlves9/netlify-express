import { Router } from 'express';
import { getRepository } from 'typeorm';
import Admin from '../models/Admin';
import CreateAdminService from '../services/CreateAdminService';
import axios from 'axios';

const adminsRouter = Router();

const api = axios.create({
  baseURL: 'https://multtvadmin.multtv.tv.br/OB/user/endpoint?wsdl',
});

adminsRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const createAdmin = new CreateAdminService();

    const admin = await createAdmin.execute({
      name,
      email,
      password
    });

    return response.json(admin);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

adminsRouter.post('/test', async (request, response) => {
  console.log("Teste")
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"   xmlns:bees="http://www.beesmart.tv/">    <soapenv:Header/>  <httpProtocol>      <customHeaders>        <add name="Access-Control-Allow-Origin" value="*" />      </customHeaders>    </httpProtocol>    <soapenv:Body>    <bees:getFilteredProfilesV4>       <profileFilter >      <regionUid >BALNEARIO_CAMBORIU</regionUid >    </profileFilter >    </bees:getFilteredProfilesV4> </soapenv:Body ></soapenv:Envelope >`;

  try {
    const { data } = await api.post('', xml);
    console.log(data)
    return response.json(data);
  } catch (error) {
    console.log(error)
  }
});

adminsRouter.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body;

    const repositoryAdmin = getRepository(Admin);

    const checkAdminExists = await repositoryAdmin.findOne({
      where: { email, password },
    });


    if (!checkAdminExists) {
      return response.status(400).json({ error: "user not exist" });
    }

    return response.json(checkAdminExists)

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default adminsRouter;
