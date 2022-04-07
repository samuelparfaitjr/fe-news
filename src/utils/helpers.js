export const excerpt = (text, charcount) => {
  return text.length > charcount ? `${text.substring(0, charcount)}...` : text;
};
