const axios = require("axios");
const sstk = require("shutterstock-api");
const moodConverter = require("./moodConverter");
require("dotenv").config();

const emotionAxios = axios.create({
  baseURL: "http://svc.saltlux.ai:31781",
});

const getMood = async (text) => {
  try {
    const { data: res } = await emotionAxios.post("/", {
      key: "f8a2db96-1881-45ef-a947-f896cdd56136",
      serviceId: "11987300804",
      argument: {
        type: "1",
        query: text,
      },
    });
    return res.Result[0][1];
  } catch (e) {
    console.log("솔트룩스 에러");
  }
};

sstk.setAccessToken(process.env.SHUTTERSTOCK_TOKEN);
const audioApi = new sstk.AudioApi();

const getMusicByMood = async (mood) => {
  mood = moodConverter.diaryToMusic(mood);
  const queryParams = {
    moods: [mood],
  };

  const { data } = await audioApi.searchTracks(queryParams);
  return data.map((v) => ({
    src: v.assets.preview_mp3.url,
    title: v.title,
    description: v.description,
    waveform: v.assets.waveform.url,
  }));
};

const getPopularMusicByMood = async (mood) => {
  mood = moodConverter.diaryToMusic(mood);
  const queryParams = {
    moods: [mood],
    sort: "ranking_all",
  };

  const { data } = await audioApi.searchTracks(queryParams);
  return data.map((v) => ({
    src: v.assets.preview_mp3.url,
    title: v.title,
    description: v.description,
    waveform: v.assets.waveform.url,
  }));
};

const apiRequest = { getMood, getMusicByMood, getPopularMusicByMood };

module.exports = apiRequest;
