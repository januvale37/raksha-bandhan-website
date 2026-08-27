/* =========================================
   CHANGE SCREEN
========================================= */


const screens =
    document.querySelectorAll(".screen");


function goTo(id) {


    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    document
        .getElementById(id)
        .classList.add("active");


    window.scrollTo(0, 0);

}



/* =========================================
   LEVEL UNLOCK
========================================= */


const toast =
    document.getElementById("toast");


function complete(current, next) {


    toast.classList.add("show");


    setTimeout(function() {


        toast.classList.remove("show");


        goTo(next);


    }, 650);

}



/* =========================================
   OPEN LETTER
========================================= */


let letterOpened = false;


function openLetter() {


    const envelope =
        document.getElementById("envelope");


    const letter =
        document.getElementById("letter");


    const button =
        document.getElementById("openLetter");


    if (!letterOpened) {


        envelope.classList.add("open");


        setTimeout(function() {

            letter.classList.add("show");

        }, 300);


        button.textContent =
            "MESSAGE UNLOCKED ✓";


        letterOpened = true;


    }

    else {


        complete(
            "level3",
            "level4"
        );

    }

}



/* =========================================
   ALIEN DATABASE
========================================= */


const aliens = [


    [

        "HEATBLAST",

        "When your brother gets angry! 🔥"

    ],


    [

        "XLR8",

        "When he says 'I'm coming' and disappears at lightning speed! ⚡"

    ],


    [

        "FOUR ARMS",

        "When he suddenly becomes the strongest person in the house! 💪"

    ],


    [

        "GHOSTFREAK",

        "When he mysteriously disappears when it's time to help! 👻"

    ],


    [

        "DIAMONDHEAD",

        "When he protects his sister like a shield! 💎"

    ]

];



function selectAlien() {


    const random =
        Math.floor(
            Math.random() *
            aliens.length
        );


    const alien =
        aliens[random];


    const result =
        document.getElementById(
            "alienResult"
        );


    result.innerHTML = `

        <h3>
            ${alien[0]}
        </h3>

        <p>
            ${alien[1]}
        </p>

    `;


    document
        .getElementById("finishBtn")
        .classList
        .remove("hidden");

}



/* =========================================
   RESTART
========================================= */


function restart() {


    letterOpened = false;


    document
        .getElementById("letter")
        .classList
        .remove("show");


    document
        .getElementById("envelope")
        .classList
        .remove("open");


    document
        .getElementById("openLetter")
        .textContent =
        "UNLOCK MESSAGE 💌";


    document
        .getElementById("alienResult")
        .innerHTML = `

            <h3>?</h3>

            <p>
                SELECT AN ALIEN
            </p>

        `;


    document
        .getElementById("finishBtn")
        .classList
        .add("hidden");


    goTo("start");

}



/* =========================================
   CREATE BACKGROUND STARS
========================================= */


const stars =
    document.getElementById("stars");


for (
    let i = 0;
    i < 45;
    i++
) {


    const star =
        document.createElement("i");


    star.className =
        "star";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.animationDelay =
        Math.random() * 6 + "s";


    star.style.animationDuration =
        4 +
        Math.random() * 6 +
        "s";


    stars.appendChild(star);

}