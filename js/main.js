document.getElementById('language-switcher').addEventListener('change', function() {
  let lang = this.value;
  loadLanguageFile(lang);
});

function loadLanguageFile(lang) {
  fetch(`/languages/${lang}.json`)
    .then(response => response.json())
    .then(data => applyTranslations(data));
}

function applyTranslations(translations) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    element.innerText = translations[key];
  });
}

document.getElementById('language-switcher').addEventListener('change', function() {
  let lang = this.value;
  localStorage.setItem('selectedLanguage', lang);
  loadLanguageFile(lang);
});

window.onload = function() {
  let savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.getElementById('language-switcher').value = savedLanguage;
  loadLanguageFile(savedLanguage);

  if(window.location.href.indexOf("colourToNumber") > -1) 
    {
      changeColour();
    }
    else
    {
        changeNumber();
    }
};


colours = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "grey", "white"];
couleurs = ["noir", "brun", "rouge", "orange", "jaune", "vert", "bleu", "violet", "gris", "blanc"]

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


questionsAnswered = 1
correctAnswers = 0

var randColour;
var randCouleur;
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

    var box = document.getElementById("square");

    box.style.backgroundColor = randColour;
    if (randColour == "white" || randColour == "yellow")
    {
        box.style.color = "black"
    }
    else
    {
        box.style.color = "white"
    }

    if ((localStorage.getItem('selectedLanguage') || 'en') == 'en')
    {
        box.innerHTML = randColour;
    }
    else
    {
        box.innerHTML = couleurs[colours.indexOf(randColour)]
    }

    
}

function checkColourToNumber(isQuiz=false)
{
    var value = document.getElementById("input").value;
    console.log(questionsAnswered) 

    if (questionsAnswered != 20)
    {
        if (randColour == colours[parseInt(value)])
        {
            document.getElementById("endScreen").style.visibility = "hidden";
            correctAnswers += 1
            questionsAnswered += 1;
            changeColour()
        }
        else if ((randColour != colours[parseInt(value)] && !isQuiz))
        {
            document.getElementById("endScreen").style.visibility = "visible";
            

            if ((localStorage.getItem('selectedLanguage') || 'en') == 'en')
            {
                document.querySelector("#endText").innerText  = "Not Quite! Try Again!";
            }
            else
            {
                document.querySelector("#endText").innerText  = "Presque-là! Réessayez SVP!";
            }
        }
        else
        {
            questionsAnswered += 1;
            changeColour()
        }
    }
    else
    {
        document.getElementById("question").style.visibility = "hidden";
        document.getElementById("endScreen").style.visibility = "visible";
        
        if (isQuiz)
        {

            if ((localStorage.getItem('selectedLanguage') || 'en') == 'en')
            {
                document.querySelector("#endText").innerText  = "Good Job! Final Score: " + correctAnswers + " / 20";
            }
            else
            {
                document.querySelector("#endText").innerText  = "Bien Joué! Score Final: " + correctAnswers + " / 20";
            }
        }
        else
        {
             if ((localStorage.getItem('selectedLanguage') || 'en') == 'en')
                {
                document.querySelector("#endText").innerText  = 'Good Job!';
                }
            else
            {
                document.querySelector("#endText").innerText  = "Bien Joué!";
            }
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

    var box = document.getElementById("square");

    box.innerHTML = randNumber;
}

function checkNumberToColour(isQuiz=false)
{
    var value = document.getElementById("input").value;
    
    if (questionsAnswered != 20)
    {
        if (colours[parseInt(randNumber)] == value.toLowerCase())
        {
            document.getElementById("endScreen").style.visibility = "hidden";
            correctAnswers += 1
            questionsAnswered += 1;
            changeNumber()
        }
        else if (colours[parseInt(randNumber)] != value.toLowerCase() && !isQuiz)
        {
            document.getElementById("endScreen").style.visibility = "visible";
            document.querySelector("#endText").innerText  = "Not Quite! Try Again!";
        }
        else
        {
            questionsAnswered += 1;
            changeNumber()
        }
    }
    else
    {
        document.getElementById("question").style.visibility = "hidden";
        document.getElementById("endScreen").style.visibility = "visible";
        
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
