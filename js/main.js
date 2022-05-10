//Disables and Enables Buttons

function mode(action) {
  console.log(action);
  if (action === "ask") {
    //controls button display
    document.getElementById("ask").style.display = "none";
    document.getElementById("colorSwitch").style.display = "none";
    document.getElementById("reset").style.display = "block";
    //controls button display end

    //8ball display
    document.getElementById("answer").style.display = "none";
    document.getElementById("answerTwo").style.display = "block";
    document.getElementById("innerBallTwo").style.display = "block";
    //8ball display end

    //input display
    document.getElementById("questionArea").style.display = "none";
    document.getElementById("questionAreaTwo").style.display = "block";
    //input display end
  }

  if (action === "reset") {
    //controls button display
    document.getElementById("reset").style.display = "none";
    document.getElementById("ask").style.display = "block";
    document.getElementById("colorSwitch").style.display = "block";
    //controls button display end

    //8ball display
    document.getElementById("answer").style.display = "block";
    document.getElementById("answerTwo").style.display = "none";
    document.getElementById("innerBallTwo").style.display = "none";
    //8ball display end

    //User input display
    document.getElementById("questionArea").style.display = "block";
    document.getElementById("questionAreaTwo").style.display = "none";
    //user input display end
  }
};

//Disable and Enables Buttons end




//Theme Picker

const redTheme = document.getElementsByClassName("redTheme");
const color = document.getElementById("colorSwitch");
const danger = document.getElementById("ask");
const reset = document.getElementById("reset");

const enableRedTheme = () => {
  document.body.classList.add("redTheme");
};

const disableRedTheme = () => {
  document.body.classList.remove("redTheme");
};

danger.addEventListener("dblclick", () => {
  if (redTheme !== "enabled") {
    enableRedTheme();
    // console.log(redTheme)
  } else {
    disableRedTheme();
  }
  
});

reset.addEventListener("click", () => {
  if (redTheme !== "enabled") {
    disableRedTheme();
  }
});


const gradientColors = ["#134681", "#4A1382", "#138239", "#9E8817"];
const boxBorder = ["#315781", "#9A4DE7", "#138239", "#e0c52ee8"];
const boxShadow = ["#17559b", "#9A4DE7", "#138239", "#e0c52ee8"];
const boxText = ["#97BFEE", "#CDA4F5", "#88EFB2", "#F8EFC2"];
const boxTextShadow = ["#d896ee80", "#872ee0e6", "#2ee04ce6", "#e0c52ee8"];
const bgBox = ["#2e81e01a", "#9c2ee01a", "#2ee0371a", "#dae02e1a"];
const buttonColors = ["#1e6dc8", "#9A4DE7", "#2fb626", "#cbce29"];
const ballShadow = ["#2e81e0e6", "#9A4DE7", "#37c02be6", "#e0c52ee8"];
const questionHover = ["#1e6dc8", "#9A4DE7", "#138239", "#e0c52ee8"];
const insetInnerShadow = ["#5a95d859", "#a85ad859", "#5ad85a59", "#d6d85a59"];
const innerBallGlow = ["#2e81e0", "#9A4DE7", "#2ee051", "#e0c52ee8"];
const bgRadial = ["#30597ea6", "#6c307ea6", "#307e30a6", "#7a7e30a6"];

let colorIndex = 0;

color.addEventListener("click", () => {
  colorIndex++;
  if (colorIndex === gradientColors.length) {
    colorIndex = 0;
  }
  document
    .querySelector(":root")
    .style.setProperty(
      "--gradient",
      `linear-gradient(180deg, #292929 19.27%, ${gradientColors[colorIndex]} 100%)`
    );
  document
    .querySelector(":root")
    .style.setProperty("--boxBorder", `${boxBorder[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--boxShadow", `${boxShadow[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--boxText", `${boxText[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--boxTextShadow", `${boxTextShadow[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--bgBox", `${bgBox[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--buttonBorderHover", `${buttonColors[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--insetShadowLight", `${ballShadow[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--hoverQA", `${questionHover[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--insetShadow", `${insetInnerShadow[colorIndex]}`);
  document
    .querySelector(":root")
    .style.setProperty("--innerBallGlow", `${innerBallGlow[colorIndex]}`);
  document.querySelector(":root").style.setProperty(
    "--bgRadial",
    `radial-gradient(
        96.45% 74.31% at 50% 25.69%,
        #111f2c46 47.4%,
        ${bgRadial[colorIndex]} 100%
      )`
  );
  
let userThemes = [gradientColors,boxBorder,boxShadow,boxText,boxTextShadow,bgBox,buttonColors,ballShadow,questionHover,insetInnerShadow,innerBallGlow,bgRadial];

console.log([gradientColors,boxBorder,boxShadow,boxText,boxTextShadow,bgBox,buttonColors,ballShadow,questionHover,insetInnerShadow,innerBallGlow,bgRadial]);



  localStorage.setItem('theme', colorIndex);
  function theme () {
    if (localStorage.setItem("colorIndex")==="true") {
      
    } else (localStorage).getItem("colorIndex")==="false" 
  }

});

//Answer Generator

function generate_random(max_number) {
  return Math.round(Math.random() * max_number);
}

//click event

let ask = document.querySelector("#ask");
let answer = document.querySelector("#answer");
// var myRandom = function (action) {};

// console.log(myRandom);

ask.addEventListener("click", function () {
  let randomNumber = generate_random(9);

  let answerText = "";

  if (randomNumber === 0) {
    answerText = "Most Likely";
  } else if (randomNumber === 1) {
    answerText = "Check with me later";
  } else if (randomNumber === 2) {
    answerText = "Probably";
  } else if (randomNumber === 3) {
    answerText = "There's a good chance";
  } else if (randomNumber === 4) {
    answerText = "Nope";
  } else if (randomNumber === 5) {
    answerText = "You're asking me?";
  } else if (randomNumber === 6) {
    answerText = "Most definitely";
  } else if (randomNumber === 7) {
    answerText = "Not really";
  } else if (randomNumber === 8) {
    answerText = "Hahahaha";
  } else {
    
    answerText = "uh huh";
  }

  answer.innerHTML = answerText;

  console.log(answer);
});
