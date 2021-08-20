const pickUserHand = (hand) => {
  let contest = document.querySelector(".contest");
  contest.style.visibility = "visible";
  contest.style.opacity = 1;
  contest.style.display = "flex";

  let userHand = document.querySelector(".userhand");
  userHand.style.visibility = "visible";
  userHand.style.opacity = 1;
  userHand.style.display = "flex";
  userHand.style.flexDirection = "column";

  let imageHandUser = document.getElementById(hand);
  imageHandUser.style.visibility = "visible";
  imageHandUser.style.opacity = 1;
  imageHandUser.style.display = "flex";
  imageHandUser.style.flexDirection = "column";

  let hands = document.querySelector(".hands");
  hands.style.visibility = "hidden";
  hands.style.opacity = 0;
  hands.style.zIndex = -10;

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  setTimeout(function () {
    let hands = ["cpPaper", "cpRock", "cpScissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    let computerHand = document.querySelector(".computerhand");
    computerHand.style.visibility = "visible";
    computerHand.style.opacity = 1;
    computerHand.style.display = "flex";
    computerHand.style.flexDirection = "column";

    let imageHandCp = document.getElementById(cpHand);
    imageHandCp.style.visibility = "visible";
    imageHandCp.style.opacity = 1;
    imageHandCp.style.display = "flex";
    imageHandCp.style.flexDirection = "column";
  }, 1000);

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "Paper" && cpHand == "cpScissors") {
    setDecision("You Lose!");
  }
  if (userHand == "Paper" && cpHand == "cpRock") {
    setDecision("You Win!");
    dispatch(setScore(1));
  }
  if (userHand == "Paper" && cpHand == "cpPaper") {
    setDecision("It's a tie!");
  }
  if (userHand == "Rock" && cpHand == "cpScissors") {
    setDecision("You Win!");
    dispatch(setScore(1));
  }
  if (userHand == "Rock" && cpHand == "cpPaper") {
    setDecision("You Lose!");
  }
  if (userHand == "Rock" && cpHand == "cpRock") {
    setDecision("It's a tie!");
  }
  if (userHand == "Scissors" && cpHand == "cpScissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "Scissors" && cpHand == "cpRock") {
    setDecision("You Lose!");
  }
  if (userHand == "Scissors" && cpHand == "cpPaper") {
    setDecision("You Win!");
  }
};
