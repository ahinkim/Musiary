const axios = require("axios");
const sstk = require("shutterstock-api");
const moodConverter = require("./moodConverter");
require("dotenv").config();

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

sstk.setAccessToken(process.env.SHUTTERSTOCK_TOKEN);
const audioApi = new sstk.AudioApi();

const getMusicByMood = async (mood) => {
  mood = moodConverter.diaryToMusic(mood);
  const { data } = await audioApi.searchTracks({ sort: "ranking_all", moods: mood });
  return data.map((v) => ({ src: v.assets.preview_mp3.url, title: v.title, description: v.description }));
};

const apiRequest = { getMood, getMusicByMood };

module.exports = apiRequest;
