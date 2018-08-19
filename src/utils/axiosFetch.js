import axios from 'axios';
import { getLxdServer } from './localStorage';

// const LXD_URL = 'https://lxd.geomysiar.pl';
const LXD_USER = 'lxd-test';
const LXD_PASS = '12345678';


export default function (url = '', options = { method: 'GET' }) {
  const client = axios.create({
    baseURL: getLxdServer(),
    timeout: 6000,
    auth: {
      username: LXD_USER,
      password: LXD_PASS,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return client.request({
    ...options,
    url: getLxdServer() + url,
  });
}
