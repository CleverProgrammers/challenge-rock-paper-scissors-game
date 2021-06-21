let game = {
  Paper: false,
  Rock: false,
  Scissors: false,
  computerHand: false,
};

const pickHand = (hand) => {
  let contest = document.querySelector(".contest");
  contest.style.visibility = "visible";
  contest.style.opacity = 1;
  contest.style.display = "flex";

  let userhand = document.getElementById(hand);
  userhand.style.visibility = "visible";
  userhand.style.opacity = 1;
  userhand.style.display = "flex";

  let hands = document.querySelector(".hands");
  hands.style.visibility = "hidden";
  hands.style.opacity = 0;
  hands.style.zIndex = -10;
};

const computerhand = () => {
  console.log("hello computerHand");
};
