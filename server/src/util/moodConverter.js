const DIARY_MOODS = ["기쁨", "신뢰", "공포", "놀라움", "슬픔", "혐오", "분노", "기대"];

const diaryToMusic = (textMood) => {
  switch (textMood) {
    case "기쁨": {
      return "Happy / Cheerful";
    }
    case "신뢰": {
      return "Feel Good";
    }
    case "공포": {
      return "Horror / Scary";
    }
    case "놀라움": {
      return "Magical / Mystical";
    }
    case "슬픔": {
      return "Sad / Nostalgic";
    }
    case "혐오": {
      return "Action / Sports";
    }
    case "분노": {
      return "Action / Sports";
    }
    case "기대": {
      return "Sci-Fi / Future";
    }
    default: {
      throw new Error("UnExpected TextMood Input");
    }
  }
};

const musicToDiary = (musicMood) => {
  switch (musicMood) {
    case "Happy / Cheerful": {
      return "기쁨";
    }
    case "Feel Good": {
      return "신뢰";
    }
    case "Horror / Scary": {
      return "공포";
    }
    case "Magical / Mystical": {
      return "놀라움";
    }
    case "Sad / Nostalgic": {
      return "슬픔";
    }
    case "Action / Sports": {
      return "분노";
    }
    case "Sci-Fi / Future": {
      return "기대";
    }
    default: {
      throw new Error("UnExpected MusicMood Input");
    }
  }
};

const moodConverter = { diaryToMusic, musicToDiary };

module.exports = moodConverter;
