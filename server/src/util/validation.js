const isValidDiaryPostBody = (title, content, mood) => {
  const TITLE_MAX_LENGTH = 30;
  const MOOD_MAX_LENGTH = 30;
  const CONTENT_MAX_LENGTH = 200;

  if (typeof title !== "string") return false;
  if (typeof content !== "string") return false;
  if (typeof mood !== "string") return false;

  if (title.length > TITLE_MAX_LENGTH) return false;
  if (content.length > CONTENT_MAX_LENGTH) return false;
  if (mood.length > MOOD_MAX_LENGTH) return false;

  return true;
};

const validation = {
  isValidDiaryPostBody,
};

module.exports = validation;
