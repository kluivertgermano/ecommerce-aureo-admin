import axios from 'axios';
import { BaseInfo } from '.';

const baseURL = BaseInfo.baseURL
const Entidade = BaseInfo.entidade

const config = {
  baseURL,
  maxBodyLength : Infinity,
  insecureHTTPParser: true,
  httpAgent: true,
  headers: {
      Entidade,
      authorization : BaseInfo.tokenAPI
  }
}

const instance = axios.create(config)

export default instance;