import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 2000,
  withCredentials: true,
});

const loginRequest = async () => {
  const response = await server.get("/auth/kakao");
};

const getMusicHistory = async () => {
  try {
    const res = await server.get("/history/music");
    return res.data;
  } catch (e) {
    throw new Error("error");
  }
};

const getTodayDiary = async () => {
  try {
    const res = await server.get("/diary/get/today");
    return res.data;
  } catch (e) {
    throw new Error("error");
  }
};

const getDiaryHistory = async () => {
  try {
    const res = await server.get("/diary");
    return res.data;
  } catch (e) {
    throw new Error("error");
  }
};

const getTrendingMusic = async () => {
  try {
    const todayDiary = await getTodayDiary();

    const res = await server.get(`/music/trending?mood=${todayDiary.diaries[0].mood}`);
    return res.data;
  } catch (e) {
    throw new Error("error");
  }
};

const makePlayHistory = async (id, title, src, mood, coverImg) => {
  try {
    await server.post("/music/play", {
      id,
      title,
      src,
      mood,
      coverImg,
    });
  } catch (e) {
    throw new Error(e);
  }
};

const ApiRequest = {
  server,
  loginRequest,
  getMusicHistory,
  getTodayDiary,
  getDiaryHistory,
  getTrendingMusic,
  makePlayHistory,
};

export default ApiRequest;
