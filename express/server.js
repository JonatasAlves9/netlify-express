const axios = require('axios')
'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const api = axios.create({
  baseURL: 'https://multtvadmin.multtv.tv.br/OB/user/endpoint?wsdl',
});

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.post('/test', async (request, response) => {
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

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
