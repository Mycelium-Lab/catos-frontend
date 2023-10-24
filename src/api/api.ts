import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default {
  usersRegister() {
    return apiClient.post('/users/register', 
    {
        "email": "user@example.com",
        "password": "string",
        "role": "borrower",
        "phone": "string",
        "tonwallet": "string",
        "passport": {
            "name": "string",
            "surname": "string",
            "middlename": "string",
            "birthdate": "2023-10-16",
            "country": "string",
            "gender": "М",
            "series": 0,
            "number": 0,
            "issue_date": "2023-10-16",
            "issuing_organization": "string",
            "registration_address": {
            "region": "string",
            "neighborhood": "string",
            "city": "string",
            "street": "string",
            "house": "string",
            "housing": "string",
            "building": "string",
            "apartment": "string",
            "index": 0
            },
            "living_address": {
            "region": "string",
            "neighborhood": "string",
            "city": "string",
            "street": "string",
            "house": "string",
            "housing": "string",
            "building": "string",
            "apartment": "string",
            "index": 0
            },
            "first_photo": "string",
            "second_photo": "string",
            "selfie": "string"
        },
        "paper": {
            "country": "string",
            "registration_form": "ОАО",
            "name": "string",
            "registration_number": 0,
            "address": {
            "region": "string",
            "neighborhood": "string",
            "city": "string",
            "street": "string",
            "house": "string",
            "housing": "string",
            "building": "string",
            "apartment": "string",
            "index": 0
            },
            "website": "string",
            "first_photo": "string",
            "second_photo": "string",
            "third_photo": "string"
        }
    });
  },
  usersConnectWallet() {
    return axios.get('http://localhost:8000/api/users/connectWallet/', {
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      },
    });
  },
  usersSendEmail() {

  },

};
