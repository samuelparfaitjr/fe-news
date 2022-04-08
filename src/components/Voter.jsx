import { useState } from "react";
import { updateVote } from "../api/be-news";

import * as utils from "../utils/helpers";
import Icon from "./Icon";

const Voter = ({ currentVote, voteId }) => {
  const [vote, setVote] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  let count = 0;
  let renderVote = currentVote + vote;

  const increaseVote = () => {
    setVote(vote + 1);
    count++;
    setIsDisabled(true);
    updateVote(voteId, count);
  };

  const decreaseVote = () => {
    if (renderVote === 0) {
      setVote(0);
    } else {
      setVote(vote - 1);
      count--;
      setIsDisabled(true);
      updateVote(voteId, count);
    }
  };

  return (
    <div className="vote-controls">
      <strong>Did you like this article?</strong>
      <button
        disabled={isDisabled}
        className="vote-btn"
        onClick={() => {
          increaseVote();
        }}
      >
        <Icon name="hand-thumbs-up" size={20} />
      </button>
      <span className="meta-votes">{utils.properWord(currentVote + vote)}</span>
      <button
        disabled={isDisabled}
        className="vote-btn"
        onClick={() => {
          decreaseVote();
        }}
      >
        <Icon name="hand-thumbs-down" size={20} />
      </button>
    </div>
  );
};

export default Voter;
