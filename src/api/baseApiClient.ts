import axios from 'axios';
import { baseApiURL } from '@/config';

export const baseApiClient = axios.create({
    baseURL: baseApiURL,
  });