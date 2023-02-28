
const calculateUserScore = (vote_average, vote_count) => {
    const VOTE_COUNT_WEIGHT = 5;
    if (isNaN(vote_average) || isNaN(vote_count)) {
      throw new Error('Invalid voting');
    }

    if (vote_count === 0) {
      return 0;
    }

    const rating = vote_average * 10;
    const percent = vote_count === 0 ? 0 : (vote_count / 10) * 10;
    const userScore = (rating * vote_count + VOTE_COUNT_WEIGHT * percent) / vote_count;
    return userScore.toFixed(1);
  };

  export default calculateUserScore;