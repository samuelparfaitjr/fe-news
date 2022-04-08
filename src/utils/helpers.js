export const excerpt = (str, charcount) => {
  return str.length > charcount ? `${str.substring(0, charcount)}...` : str;
};

// Returns an excerpt 20 words long
export const wordExcerpt = (str, char) => {
  let words = str.split(" ");
  if (words.length <= 20) return words.join(" ");
  else return words.slice(0, -(words.length - char || 20)).join(" ") + "[…]";
};

// Adds p tags after full stops
export const paraText = (str) => {
  const arr = str.split(/\.\s/g).map((p, i) => {
	if (i % 2 === 0) {
  	return `<p>${p}`;
	} else {
  	return `${p}.</p>`;
	}
  });
  return `${arr.join("").replace(/'/gi, "")}</p>`;
};

// Returns likes with an s if vote is more than 1
export const properWord = (n) => {
  return n > 1 ? `${n} Likes` : `${n} Like`;
};



