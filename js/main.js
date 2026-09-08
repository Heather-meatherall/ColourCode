

colours = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', 'white'];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


questionsAnswered = 1
correctAnswers = 0

var randColour;
var randNumber;

var isQuiz = false;

function getRandomColour() 
{
  x = getRandomInt()

  return colours[x];

}

function changeColour()
{
    randColour = getRandomColour();

    console.log(randColour)

    var box = document.getElementById('square');

    box.style.backgroundColor = randColour;
    if (randColour == 'white' || randColour == 'yellow')
    {
        box.style.color = 'black'
    }
    else
    {
        box.style.color = 'white'
    }

    box.innerHTML = randColour;
}

function checkColourToNumber(isQuiz=false)
{
    var value = document.getElementById('input').value;
    console.log(questionsAnswered) 

    if (questionsAnswered != 20)
    {
        if (randColour == colours[parseInt(value)])
        {
            document.getElementById('endScreen').style.visibility = 'hidden';
            correctAnswers += 1
            questionsAnswered += 1;
            changeColour()
        }
        else if (randColour != colours[parseInt(value)] && !isQuiz)
        {
            document.getElementById('endScreen').style.visibility = 'visible';
            document.querySelector("#endText").innerText  = 'Not Quite! Try Again!';
        }
        else
        {
            questionsAnswered += 1;
            changeColour()
        }
    }
    else
    {
        document.getElementById('question').style.visibility = 'hidden';
        document.getElementById('endScreen').style.visibility = 'visible';
        
        if (isQuiz)
        {
            document.querySelector("#endText").innerText  = `Good Job! Final Score: ${correctAnswers} / 1`;
        }
        else
        {
            document.querySelector("#endText").innerText  = `Good Job!`;
        }
    }
}

function getRandomInt() 
{
  return Math.floor(Math.random() * 10);
}

function changeNumber()
{
    randNumber = getRandomInt()

    var box = document.getElementById('square');

    box.innerHTML = randNumber;
}

function checkNumberToColour(isQuiz=false)
{
    var value = document.getElementById('input').value;
    
    if (questionsAnswered != 20)
    {
        if (colours[parseInt(randNumber)] == value.toLowerCase())
        {
            document.getElementById('endScreen').style.visibility = 'hidden';
            correctAnswers += 1
            questionsAnswered += 1;
            changeNumber()
        }
        else if (colours[parseInt(randNumber)] != value.toLowerCase() && !isQuiz)
        {
            document.getElementById('endScreen').style.visibility = 'visible';
            document.querySelector("#endText").innerText  = 'Not Quite! Try Again!';
        }
        else
        {
            questionsAnswered += 1;
            changeColour()
        }
    }
    else
    {
        document.getElementById('question').style.visibility = 'hidden';
        document.getElementById('endScreen').style.visibility = 'visible';
        
        if (isQuiz)
        {
            document.querySelector("#endText").innerText  = `Good Job! Final Score: ${correctAnswers} / 1`;
        }
        else
        {
            document.querySelector("#endText").innerText  = `Good Job!`;
        }
    }
}
