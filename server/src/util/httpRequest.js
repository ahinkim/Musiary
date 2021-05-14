const axios = require("axios");

const emotionAxios = axios.create({
  baseURL: "http://svc.saltlux.ai:31781",
});

const getMood = async (text) => {
  const { data: res } = await emotionAxios.post("/", {
    key: "f8a2db96-1881-45ef-a947-f896cdd56136",
    serviceId: "11987300804",
    argument: {
      type: "1",
      query: text,
    },
  });

  console.log(res.Result[0][1]);
  return res.Result[0][1];
};

const apiRequest = { getMood };

module.exports = apiRequest;
