/************************************ Start Registeration  ***********************************/

           /************ Start  Login / Sign Up  Hidden / show ****************/

try {
    // span =====> log Out
    document.getElementsByClassName("register")[0].children[0].children[0].children[2].onclick = clickOnSignUp;

    function clickOnSignUp() {
        this.parentElement.nextElementSibling.style = "display:block";
        this.parentElement.nextElementSibling.nextElementSibling.style = "display:none";

    }
    // span === > log In
    document.getElementsByClassName("register")[0].children[0].children[0].children[1].onclick = clickOnLogIn;

    function clickOnLogIn() {
        this.parentElement.nextElementSibling.style = "display:none";
        this.parentElement.nextElementSibling.nextElementSibling.style = "display:block";

    }


             /*********** End  Login / Sign Up  Hidden / show **************/


    /********************** Start show and hidden password ******************************/

    document.getElementsByClassName("pass")[0].onmouseover = function() {
        this.previousElementSibling.setAttribute("type", "text")
    }
    document.getElementsByClassName("pass")[0].onmouseout = function() {
        this.previousElementSibling.setAttribute("type", "password")
    }

    /********************** End show and hidden password ******************************/



    function students(email, password, fullName, gender,points =0) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.gender = gender;
        this.points = points
    }

    // validation of Register Form 
    function validate() {
        if (document.forms[0].elements[0].value == "" || document.forms[0].elements[1].value == "" ||
            document.forms[0].elements[2].value == "" || document.forms[0].elements[3].checked == false) {
            alert("PLZ Full Your Information");
        }
    }
    // Value of input Of Registeration
    var userEmail = document.forms[0].elements[0].value;
    var userPassword = document.forms[0].elements[1].value;
    var userFullName = document.forms[0].elements[2].value;
    var userGender = document.forms[0].elements[3].value;


    // function students(email, password, fullName, gender,points =0) {
    //     this.email = email;
    //     this.password = password;
    //     this.fullName = fullName;
    //     this.gender = gender;
    //     this.points = points
    // }

    // Empty array To Put inside it the Object Details Of Users
    var arrStudent = [];

    document.forms[0].elements[6].onclick = addToArray;

    function addToArray() {
        if (document.forms[0].elements[0].value == "" || document.forms[0].elements[1].value == "" ||
            document.forms[0].elements[2].value == "" || document.forms[0].elements[3].checked == false && document.forms[0].elements[4].checked == false) {
            alert("PLZ Full Your Information");
        } else {

            var foundedName = true;
            var s1 = new students(document.forms[0].elements[0].value, document.forms[0].elements[1].value,
                document.forms[0].elements[2].value, document.forms[0].elements["gender"].value)

            if (arrStudent.length == 0) {
                if (JSON.parse(localStorage.getItem(document.forms[0].elements[2].value)) == null) {
                    arrStudent.push(s1);
                    localStorage.setItem(document.forms[0].elements[2].value, JSON.stringify(s1))
                    alert("You Are Sign Up  Successfully");
                    toResetFrom();
                } else {
                    alert(`This User Name { ${document.forms[0].elements[2].value} } Is Founded  PLZ Enter Another One`)
                }
            } else if (arrStudent.length > 0) {
                if ( JSON.parse(localStorage.getItem(document.forms[0].elements[2].value)) == null) {
                    arrStudent.push(s1);
                    localStorage.setItem(document.forms[0].elements[2].value, JSON.stringify(s1))
                    alert("You Are Sign Up Successfully")
                    toResetFrom();
                    console.log(JSON.parse(localStorage.getItem(document.forms[0].elements[2].value)))
                } else {
                    alert(`Sorry The Full Name { ${document.forms[0].elements[2].value} } Is Founded PlZ Enter Another one`)
                }

            }
            console.log(arrStudent)
                // localStorage.setItem("fullName" , JSON.stringify(arrStudent)) // To strore Array Of Objects In Local Storage

        }
    }

    // function to reset the input After Sign In 
    function toResetFrom() {
        document.forms[0].elements[0].value = ""
        document.forms[0].elements[1].value = ""
        document.forms[0].elements[2].value = ""
        document.forms[0].elements[3].checked = false
        document.forms[0].elements[4].checked = false
    }

    /*************************************** End Registeration ***************************************** */


    /***************************************    Start LogIn      ************************************** */

    document.forms[1].elements[2].onclick = logIn;

    var currentUser ;

    function logIn() {
        var storedValue = JSON.parse(localStorage.getItem(document.forms[1].elements[0].value))
        console.log(storedValue)
        var jsonStoredValue = JSON.stringify(storedValue)
        console.log(jsonStoredValue)
        currentUser = document.forms[1].elements[0].value;
console.log(currentUser)
            //console.log(storedValue)
        if (document.forms[1].elements[0].value == "" || document.forms[1].elements[1].value == "") {
            alert("PLZ Full All Inputs")
        } else if (storedValue == null) {
            alert("Sorry This Name Not Founded , You Must Sign Up Before Register ")
        } else if (document.forms[1].elements[0].value == storedValue.fullName && document.forms[1].elements[1].value == storedValue.password) {

            userSession = sessionStorage.setItem(document.forms[1].elements[0].value, jsonStoredValue) // here put userInformation in session storage
            sessionStorage.setItem("fullName",document.forms[1].elements[0].value);
           console.log(sessionStorage.getItem("fullName"))
            alert(`Welcome {${document.forms[1].elements[0].value}} To Our Page`);
            window.open("index.html", "_SELF")
                //window.location.href = "index.html";

            //console.log(sessionStorage.getItem(document.forms[1].elements[0].value) )// get password 

        } else {
            alert(`Plz Check Your UserName && Password `) // like ===> if enter name ture and pass flase    
        }
    }
    /***************************************    End LogIn      ************************************** */




} catch (e) {
    console.log()
}



/*******************************  Start Exam *************************************** */

try {
    // here i will put Message beause there are not  session storage

    if (sessionStorage.length == 0) {
        document.getElementById("exam").children[0].innerHTML = `<div class='alert alert-danger text-center mt-5 mb-3' >
      Sorry You Must Be Login Before Do Exam </div>`;
        var createBtn = document.createElement("button")
        var linkToRegister = document.createElement("a")
        createBtn.setAttribute("class", "btn btn-primary mt-3 ");
        linkToRegister.setAttribute("href", "register.html ");
        linkToRegister.setAttribute("style", "color:white");

        linkToRegister.innerHTML = "Go To Register";
        createBtn.appendChild(linkToRegister);
        document.getElementById("exam").children[0].appendChild(createBtn)
            //window.open("register.html")

           console.log( document.getElementById("examing") );
        console.log(document.getElementById("exam").children[0])
    } else {
        // here i will put the exam because there are session storage
        /*********************************/
        document.getElementById("examing").style="display:block"
        // select all elements
        const start = document.getElementById("start");
        const quiz = document.getElementById("quiz");
        const question = document.getElementById("question");
        const qImg = document.getElementById("qImg");
        const choiceA = document.getElementById("A");
        const choiceB = document.getElementById("B");
        const choiceC = document.getElementById("C");
        const counter = document.getElementById("counter");
        const timeGauge = document.getElementById("timeGauge");
        const progress = document.getElementById("progress");
        const scoreDiv = document.getElementById("scoreContainer");

        // create our questions
        let questions = [{
            question: "What does HTML stand for?",
            imgSrc: "images/html.png",
            choiceA: "Correct",
            choiceB: "Wrong",
            choiceC: "Wrong",
            correct: "A"
        }, {
            question: "What does CSS stand for?",
            imgSrc: "images/css.png",
            choiceA: "Wrong",
            choiceB: "Correct",
            choiceC: "Wrong",
            correct: "B"
        }, {
            question: "What does JS stand for?",
            imgSrc: "images/js.png",
            choiceA: "Wrong",
            choiceB: "Wrong",
            choiceC: "Correct",
            correct: "C"
        }];

        // create some variables

        const lastQuestion = questions.length - 1;
        let runningQuestion = 0;
        let count = 0;
        const questionTime = 10; // 10s
        const gaugeWidth = 150; // 150px
        const gaugeUnit = gaugeWidth / questionTime;
        let TIMER;
        let score = 0;

        // render a question
        function renderQuestion() {
            let q = questions[runningQuestion];

            question.innerHTML = "<p>" + q.question + "</p>";
            qImg.innerHTML = "<img src=" + q.imgSrc + ">";
            choiceA.innerHTML = q.choiceA;
            choiceB.innerHTML = q.choiceB;
            choiceC.innerHTML = q.choiceC;
        }

        start.addEventListener("click", startQuiz);

        // start quiz
        function startQuiz() {
            start.style.display = "none";
            renderQuestion();
            quiz.style.display = "block";
            renderProgress();
            renderCounter();
            TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
        }

        // render progress
        function renderProgress() {
            for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
                progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
            }
        }

        // counter render

        function renderCounter() {
            if (count <= questionTime) {
                counter.innerHTML = count;
                timeGauge.style.width = count * gaugeUnit + "px";
                count++
            } else {
                count = 0;
                // change progress color to red
                answerIsWrong();
                if (runningQuestion < lastQuestion) {
                    runningQuestion++;
                    renderQuestion();
                } else {
                    // end the quiz and show the score
                    clearInterval(TIMER);
                    scoreRender();
                }
            }
        }

        // checkAnwer

        function checkAnswer(answer) {
            if (answer == questions[runningQuestion].correct) {
                // answer is correct
                score++;
                // change progress color to green
                answerIsCorrect();
            } else {
                // answer is wrong
                // change progress color to red
                answerIsWrong();
            }
            count = 0;
            if (runningQuestion < lastQuestion) {
                runningQuestion++;
                renderQuestion();
            } else {
                // end the quiz and show the score
                clearInterval(TIMER);
                scoreRender();
            }
        }

        // answer is correct
        function answerIsCorrect() {
            document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
        }

        // answer is Wrong
        function answerIsWrong() {
            document.getElementById(runningQuestion).style.backgroundColor = "#f00";
        }

        // score render
        function scoreRender() {
            scoreDiv.style.display = "block";

            // calculate the amount of question percent answered by the user
            const scorePerCent = Math.round(100 * score / questions.length);

            // choose the image based on the scorePerCent
            let img = (scorePerCent >= 80) ? "images/5.png" :
                (scorePerCent >= 60) ? "images/4.png" :
                (scorePerCent >= 40) ? "images/3.png" :
                (scorePerCent >= 20) ? "images/2.png" :
                "img/1.png";

            scoreDiv.innerHTML = "<img src=" + img + ">";
            scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
            console.log(sessionStorage.getItem("fullName")) // here the name of the user who is login
            var valueOfuserName = sessionStorage.getItem("fullName");
            console.log(JSON.parse( sessionStorage.getItem(valueOfuserName)));
            var userInfo = JSON.parse( sessionStorage.getItem(valueOfuserName)); //{object} information Of user {Mohamed}
            console.log(valueOfuserName)
            console.log (userInfo.points) // points = 0 
            userInfo.points = scorePerCent;
            console.log (userInfo.points) // points = 33 %
            

            var x = JSON.parse (localStorage.getItem(valueOfuserName)) // string of info but convert to object
            x.points = scorePerCent;
            
            console.log(x)
            localStorage.setItem(valueOfuserName,JSON.stringify(x) )
            sessionStorage.setItem(valueOfuserName,JSON.stringify(x) )
           console.log( document.getElementById("spanDegree").innerHTML = x.points + "%")
            //sessionStorage.setItem(valueOfuserName ,  )
            //console.log(scorePerCent)

            /****************************************** */

            /***************** start timer *****************/

            // var spanText = document.createElement("span");
            // spanText.setAttribute("style", "color:red");
            // spanText.setAttribute("class", "mb-5");
            // spanText.innerHTML = " Timer Of Exam : ";
            // document.getElementById("exam").children[0].appendChild(spanText);
            // var spanTimer = document.createElement("span");
            // document.getElementById("exam").children[0].appendChild(spanTimer);
            // console.log(spanTimer) // span 
            // var i = 180;
            // var myTimer = setInterval(function() {
            //     spanTimer.innerHTML = i--;

            //     if (i === 0) {
            //         clearInterval(myTimer)
            //     }

            // }, 1000)

            /******************** End timer *************************/

            /******************** Start Question  ******************/

            // var divParent = document.getElementById("exam").children[0];

            // var creatediv1 = document.createElement("div");
            // creatediv1.innerHTML = "<h4> 1- Is 5 + 5 = 10 ? </h4>";
            // creatediv1.innerHTML += `<input type = 'radio' name = 'sum' > True
            //                       <input type = 'radio' name = 'sum' > False `;
            // creatediv1.innerHTML += `<h5> Point From 5 </h5>`;
            // console.log(divParent.appendChild(creatediv1));


            // var creatediv2 = document.createElement("div");
            // creatediv2.innerHTML = "<h4> 1- Is 10 + 2 * 10   = 120 ? </h4>";
            // creatediv2.innerHTML += `<input type = 'radio' name = 'multi' > True
            //                       <input type = 'radio' name = 'multi' > False `;
            // creatediv2.innerHTML += `<h5>  Point  From 5 </h5>`;
            // console.log(divParent.appendChild(creatediv2))


            // var creatediv3 = document.createElement("div");
            // creatediv3.innerHTML = "<h4> 1- Do You Love ITI ? </h4>";
            // creatediv3.innerHTML += `<input type = 'radio' name = 'js' > True
            //                       <input type = 'radio' name = 'js' > False `;
            // creatediv3.innerHTML += `<h5>  Point  From 5 </h5>`;
            // console.log(divParent.appendChild(creatediv3))


            /******************** End Question  ******************/


            /*************************** End Exam**********************************/

        }

        // if you found sessionStorage hidden the login Form
    }

} catch (e) {
    console.log()
}

try {
    if (sessionStorage.length != 0) {

        document.getElementsByClassName("register")[0].children[0].children[0].children[1].style = "display:none"
            // document.getElementsByClassName("register")[0].children[0].children[0].childNodes[4].textContent = " "  // ||
            // to show Log Out
        document.getElementsByClassName("register")[0].children[0].children[0].children[0].style = "display:inline"
    } else {

    }

    // to clear session storage

    document.getElementsByClassName("register")[0].children[0].children[0].children[0].onclick = function() {
        var logOut = confirm("Are Youe Sure ?")
        if (logOut === true) {
            alert("You Are Log Out Successfully");
            sessionStorage.clear();
            window.open("index.html", "_SELF")
        } else {

        }
    }

} catch (e) {

}


if (sessionStorage != null)
{
    console.log(sessionStorage.getItem("fullName")) // here the name of the user who is login
var valueOfuserName = sessionStorage.getItem("fullName");
console.log(JSON.parse (sessionStorage.getItem(valueOfuserName))) // here get the object
var z = JSON.parse (sessionStorage.getItem(valueOfuserName))
var userPoint = z.points;
console.log( document.getElementById("spanDegree").innerHTML = userPoint + "%")

}

// Start Footer Map
// window.addEventListener("load", doitfirst)
try {
    document.getElementById("getlocation").addEventListener("click", function() {
        // function doitfirst() {
        mymap = document.getElementById("location")
            // }
            //check availability
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getposition, errorhandeler)
        } else {
            mymap.innerText = "Update Ur Browser"
        }

        // function initMap() {
        //     map = new google.maps.Map(document.getElementById('location'), {
        //         center: { lat: lat, lng: log },
        //         zoom: 17
        //     });
        // }

        function getposition(position) {
            // alert("succes")
            // console.log(arguments)
            //get location data and display it witin div
            lat = position.coords.latitude;
            log = position.coords.longitude;
            // latlog = lat + "," + log;
            // mymap.innerText = latlog;
            // time = position.timestamp;

            //google
            //create latlog object "google"

            mylocation = new google.maps.LatLng(lat, log)
                //2-specs
            myspecs = { zoom: 17, center: mylocation }
                //3-create img to recive map
            var myimg = new Image();
            myimg.src = new google.maps.Map(mymap, myspecs);
            //4-display img
            mymap.appendChild(myimg)
        }

        function errorhandeler(error) {
            //console.log(arguments[0])
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    mymap.innerText = "USER DENIED GEOLOCATION PERMITION";
                    break;
                case error.POSITION_UNAVAILABLE:
                    mymap.innerText = "POSITION_UNAVAILABLE";
                    break;
                case error.TIMEOUT:
                    mymap.innerText = "TIMEOUT"
                    break;
                case error.UNKOWN_ERROR:
                    mymap.innerText = "UNKOWN_ERROR"
                    break;
                default:
                    break;
            }
        }
    });
} catch (e) {

}
try {

} catch (e) {

}