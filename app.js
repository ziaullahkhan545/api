
const express = require('express');
const crypto = require('crypto');
const axios = require('axios');

const app = express();

app.use(express.json());


const data = '[{"email":"zia2450@gmail.com","data":{"group_id":"5542", "ipv4":"116.71.112.180"}}]';
const signature = getSignature('0c5f435ccc0ed09b34f98921cff486b7', data)

function getSignature(key, data_input) {
  const res = crypto.createHmac('sha1', key).update(data_input).digest('hex');
  console.log(res);
  return res;
}


const API_END_POINT = `https://api.trafficmansion.com/api/v1/one_click/get_live_api?arguments=[{"email":"zia2450@gmail.com","data":{"group_id":"5542","ipv4":"116.71.112.180"}}]&client=prelanderroot@av-a.net&signature=${signature}`;

async function getDataFromApiEndPoint(){
    const response = await axios({
        method: 'get',
        url: API_END_POINT,
    });
}
getDataFromApiEndPoint();

module.exports = app;
