
'use strict';
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');



const api = axios.create({
  baseURL: 'https://multtvadmin.multtv.tv.br/OB',
});

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/test', async (request, response) => {
  console.log("Teste")
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"   xmlns:bees="http://www.beesmart.tv/">    <soapenv:Header/>  <httpProtocol>      <customHeaders>        <add name="Access-Control-Allow-Origin" value="*" />      </customHeaders>    </httpProtocol>    <soapenv:Body>    <bees:getFilteredProfilesV4>       <profileFilter >      <regionUid >BALNEARIO_CAMBORIU</regionUid >    </profileFilter >    </bees:getFilteredProfilesV4> </soapenv:Body ></soapenv:Envelope >`;

  try {
    const { data } = await api.post('/user/endpoint?wsdl', xml);

    const parser = require("fast-xml-parser");

    const jsonData = parser.parse(
      data,
      {
        attrNodeName: "#attr",
        textNodeName: "#text",
        attributeNamePrefix: "",
        arrayMode: "false",
        ignoreAttributes: false,
        parseAttributeValue: true,
      },
      true
    );

    return response.json(jsonData);
  } catch (error) {
    console.log(error)
  }
});

router.get('/info-canais', async (request, response) => {
  console.log("Teste")
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bees="http://www.beesmart.tv/">
  <soapenv:Header/>
  <soapenv:Body>
    <bees:getFilteredLiveChannels>
     <liveChannelFilter   >
        <regionUid>BALNEARIO_CAMBORIU</regionUid>
     </liveChannelFilter   >
      </bees:getFilteredLiveChannels>
  </soapenv:Body>
</soapenv:Envelope>`;

  try {
    const { data } = await api.post('/live/endpoint?wsdl', xml);

    const parser = require("fast-xml-parser");

    const jsonData = parser.parse(
      data,
      {
        attrNodeName: "#attr",
        textNodeName: "#text",
        attributeNamePrefix: "",
        arrayMode: "false",
        ignoreAttributes: false,
        parseAttributeValue: true,
      },
      true
    );


    return response.json(jsonData);
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
