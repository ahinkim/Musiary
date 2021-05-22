import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 2000,
  withCredentials: true,
});

const loginRequest = async () => {
  const response = await server.get("/auth/kakao");
  console.log(response.data);
};

const ApiRequest = {
  server,
  loginRequest,
};

export default ApiRequest;
