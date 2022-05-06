// const button = document.getElementById("colorSwitch");
// const bg = document.getElementById("bg");

// const colors = ["#ff0000", "#00ff00", "#0000ff"];
// const buttonColors = ["#11ffff", "#000034", "#340000"];


// button.addEventListener("click", () => {
//     //bg 
//     let color = colors.shift();
//     colors.push(color);
//     //button
//     let buttonColor = buttonColors.shift();
//     buttonColors.push(buttonColor);
//     //text

//     bg.style.background = `linear-gradient(${color}, #333)`;
//     button.style.backgroundColor = buttonColor;
// });


//generate answers
function generate_random(max_number) {

    return Math.round(Math.random()*max_number);
}


//click event
let button = document.querySelector('#ask');
let answer = document.querySelector('#answer');
// let answerTwo = document.querySelector('#answerTwo');


button.addEventListener("click", function() {

    let randomNumber = generate_random(3);
    
    let answerText = "";

    if (randomNumber === 0) {
        answerText = "Most Likely";
    }
    else if (randomNumber === 1) {
        answerText = "Check with me later";
    }
    else if (randomNumber === 2) {
        answerText = "Probably";
    }
    else{
        answerText = "Thinking...";
    }

    answer.innerHTML = answerText;

    console.log(answer)




    
});



