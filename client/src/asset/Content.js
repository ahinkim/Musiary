export const content = {
  SAD_RECOMMEND: "우울하시다면 이런 노래는 어떠세요?",
  TRUST_RECOMMEND: "믿음이 가신다면 이런 노래는 어떠세요?",
  ANGRY_RECOMMEND: "화가나신다면 이런 노래는 어떠세요?",
  HAPPY_RECOMMEND: "기쁘시다면 이런 노래는 어떠세요?",
  SCARY_RECOMMEND: "무서우셨다면 이런 노래는 어떠세요?",
  SURPRISE_RECOMMEND: "놀라우셨다면 이런 노래는 어떠세요?",
  HOPE_RECOMMEND: "기대되신다면 이런 노래는 어떠세요?",
  HOWS_TODAY: "오늘 하루는 어땠나요?",
  DIARY_PLACEHOLDER: "오늘 하루는 어땠는지 적어주세요.\n오늘 하루를 마무리하기에 좋은 노래를 추천해 드릴게요 :)",
  SAVE_AND_RECOMMEND_SONG: "저장하고 노래 추천 받기",
  DIARY_I_WROTE: "내가 썼던 일기",
  MUSIC_I_LISTENED: "내가 들었던 노래",
  SHORTCUT: "바로가기",
  MY_PAGE: "마이 페이지",
  TRENDING: "나와 같은 기분을 느끼는 사람들이 많이 듣는 노래",
  HELLO: "안녕하세요",
  MUSIARY: "MUSIARY입니다",
  KAKAO_LOGIN: "카카오톡으로 간편 로그인",
  M: "M",
};

export function getContentByMood(mood) {
  switch (mood) {
    case "기쁨": {
      return content.HAPPY_RECOMMEND;
    }
    case "신뢰": {
      return content.TRUST_RECOMMEND;
    }
    case "공포": {
      return content.SCARY_RECOMMEND;
    }
    case "놀라움": {
      return content.SURPRISE_RECOMMEND;
    }
    case "슬픔": {
      return content.SAD_RECOMMEND;
    }
    case "혐오":
    case "분노": {
      return content.ANGRY_RECOMMEND;
    }
    case "기대": {
      return content.HOPE_RECOMMEND;
    }
    default:
      throw new Error();
  }
}
