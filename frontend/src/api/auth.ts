import axios from "axios";

type CredType = {
  username: string;
  password: string;
};

const login = async (creds: CredType) => {
  return axios.post('http://localhost:8080/api/auth/login', creds)
}


export { login };

export type { CredType }