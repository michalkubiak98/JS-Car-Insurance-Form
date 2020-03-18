


//https://www.w3schools.com/bootstrap4/bootstrap_forms.asp 
//validation technique

(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

        }
        form.classList.add('was-validated');
        return true;
      }, false);
    });
  }, false);
})();



//https://stackoverflow.com/questions/23039374/allow-only-numbers-into-a-input-text-box
function allowNumbersOnly(e) {
  var code = (e.which) ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
    e.preventDefault();
  }
}

function onlyAlpha(e) {
  var char = e.which;
  if (char > 31 && char != 32 && (char < 65 || char > 90) && (char < 97 || char > 122)) {
    return false;
  }
}









function populate() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let length = model.options.length;

  if (make.value == "Toyota") {
    var cars = ["Mirai", "Avalon", "Camry", "Corolla", "Prius"];
  } else if (make.value == "Ford") {
    var cars = ["Fiesta", "Mustang", "Focus", "Shelby", "Fusion"];
  } else if (make.value == "Mazda") {
    var cars = ["Mazda 3", "Mazda 6", "CX-3", "CX-30", "CX-5"];
  } else if (make.value == "BMW") {
    var cars = ["1 Series", "3 Series", "5 Series", "BMW X3", "BMW x5"];
  } else if (make.value == "Audi") {
    var cars = ["A3", "A3", "A4", "A5", "A6"];
  }
  for (i = length - 1; i >= 0; i--) {
    model.options[i] = null;
  }
  for (car in cars) {
    model.add(new Option(cars[car]));
  }
}




function calculateCost() {

  let final = document.getElementById("final");
  let genderCost = 0,
    ageCost = 0,
    coverCost = 0,
    fuelCost = 0,
    carAgeCost = 0,
    claimsCost = 0,
    milageCost = 0,
    carValue = 0,
    safetyCost = 0,
    usageCost = 0;

  let age = document.getElementById("age").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");

  let full = document.getElementById("coverType").options[1];
  let half = document.getElementById("coverType").options[2];

  let diesel = document.getElementById("fuelType").options[1];
  let petrol = document.getElementById("fuelType").options[2];
  let hybrid = document.getElementById("fuelType").options[3];

  let one = document.getElementById("claims").options[1];
  let two = document.getElementById("claims").options[2];
  let three = document.getElementById("claims").options[3];
  let four = document.getElementById("claims").options[4];
  let five = document.getElementById("claims").options[5];

  let carAge = document.getElementById("carAge").value;
  let milage = document.getElementById("milage").value;

  if (document.getElementById("carValue").value.length < 1) {
    carValue = 0;
  } else {
    carValue = document.getElementById("carValue").value / 100 * 10;
  }

  let none = document.getElementById("none");
  let alarm = document.getElementById("alarm");
  let immobiliser = document.getElementById("immobiliser");
  let both = document.getElementById("both");
  let all = document.getElementById("all");

  let pleasure = document.getElementById("pleasure");
  let classOne = document.getElementById("classOne");




  if (age < 25) {
    ageCost = 500;
  } else if (age >= 25 && age <= 30) {
    ageCost = 350;
  } else if (age > 30 && age < 65) {
    ageCost = 200;
  } else if (age > 65) {
    ageCost = 500;
  }

  if (male.checked) {
    genderCost = 400;
  } else if (female.checked) {
    genderCost = 250;
  }

  if (full.selected) {
    coverCost = 400;
  } else if (half.selected) {
    coverCost = 200;
  }

  if (diesel.selected) {
    fuelCost = 50;
  } else if (petrol.selected) {
    fuelCost = 40;
  } else if (hybrid.selected) {
    fuelCost = 20;
  }

  if (carAge < 3) {
    carAgeCost = 100;
  } else if (carAge > 3 && carAge < 6) {
    carAgeCost = 70;
  } else if (carAge > 6 && carAge < 10) {
    carAgeCost = 50;
  } else if (carAge > 10) {
    carAgeCost = 20;
  }

  if (one.selected) {
    claimsCost = 100;
  } else if (two.selected) {
    claimsCost = 80;
  } else if (three.selected) {
    claimsCost = 60;
  } else if (four.selected) {
    claimsCost = 40;
  } else if (five.selected) {
    claimsCost = 20;
  }

  if (milage < 15000) {
    milageCost = 30;
  } else if (milage > 15000 && milage < 25000) {
    milageCost = 40;
  } else if (milage > 25000) {
    milageCost = 50;
  }

  if (none.checked) {
    safetyCost = 100;
  } else if (alarm.checked) {
    safetyCost = 70;
  } else if (immobiliser.checked) {
    safetyCost = 50;
  } else if (both.checked) {
    safetyCost = 30;
  } else if (all.checked) {
    safetyCost = 10;
  }

  if (pleasure.checked) {
    usageCost = 30;
  } else if (classOne.checked) {
    usageCost = 50;
  }


  final.value = (ageCost + genderCost + coverCost + fuelCost +
    carAgeCost + claimsCost + milageCost + carValue +
    safetyCost + usageCost).toFixed(2);
}



//Stop from refreshing
let form = document.getElementById("myForm");

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);





let modal = document.getElementById('id01');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//https://stackoverflow.com/questions/11719202/how-to-compare-the-date-entered-in-textbox-to-the-current-date-using-javascript
//https://www.codexworld.com/how-to/check-given-date-is-greater-than-today-javascript/

let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
let dateCompare = document.getElementById('date').value;
let dateInput = new Date(dateCompare); //dd-mm-YYYY
let today = new Date();



//Good practice advice on W3 schools said not to use the == operator but nothing else worked
function submitIt() {




  if (document.getElementById('age').value == "" ||
    document.getElementById("carValue").value == "" ||
    document.getElementById("fuelType").selectedIndex == -1 ||
    document.getElementById("coverType").selectedIndex == -1 ||
    document.getElementById("claims").selectedIndex == -1 ||
    document.getElementById("make").selectedIndex == -1 ||
    document.getElementById("name").value == "" ||
    document.getElementById("surname").value == "" ||
    document.getElementById("carAge").value == "" ||
    document.getElementById("tel").value == "" ||
    document.getElementById("milage").value == "" ||
    document.getElementById("model").selectedIndex == -1
  ) {




    return false;

  } else {


    //if(document.getElementById('model').selectedIndex == -1)
    //document.getElementById('model').selectedIndex == 0;

    if (document.getElementById('age').value > 17) {


      //compare if date is in the future
      if (regex.test(document.getElementById('date').value)
        //&& dateInput >= today
      ) {


        document.getElementById('ageError').setAttribute("style", "display: none");
        document.getElementById('ageErrorValid').setAttribute("style", "display: block");
        document.getElementById('age').setAttribute("style", "border-color: green;");
        document.getElementById('dateErr').setAttribute("style", "display: none");
        document.getElementById('dateErrorValid').setAttribute("style", "display: block");
        document.getElementById('date').setAttribute("style", "border-color: green;");

        document.getElementById('dateErr').setAttribute("style", "display: none");
        document.getElementById('id01').style.display = 'block';


        document.getElementById('popName').innerHTML = "Name: " +
          document.getElementById('name').value + " " + document.getElementById('surname').value;

        document.getElementById('popAge').innerHTML = "Age: " +
          document.getElementById('age').value;


        if (document.getElementById('male').checked) {
          document.getElementById('popGender').innerHTML = "Gender: male";
        } else {
          document.getElementById('popGender').innerHTML = "Gender: female";
        }

        document.getElementById('popTel').innerHTML = "Tel: " +
          document.getElementById('tel').value;

        document.getElementById('popPolicy').innerHTML = "Policy Start Date: " +
          document.getElementById('date').value;

        document.getElementById('popCover').innerHTML = "Type of cover: " +
          document.getElementById('coverType').options[document.getElementById('coverType').selectedIndex].text;

        document.getElementById('popMake').innerHTML = "Make: " +
          document.getElementById('make').options[document.getElementById('make').selectedIndex].text;

        document.getElementById('popModel').innerHTML = "Model: " +
          document.getElementById('model').options[document.getElementById('model').selectedIndex].text;


        document.getElementById('popFuel').innerHTML = "Fuel: " +
          document.getElementById('fuelType').options[document.getElementById('fuelType').selectedIndex].text;


        document.getElementById('popCarAge').innerHTML = "Car Age: " +
          document.getElementById('carAge').value;

        document.getElementById('popClaims').innerHTML = "Claims free for: " +
          document.getElementById('claims').options[document.getElementById('claims').selectedIndex].text;

        document.getElementById('popMilage').innerHTML = "Car Milage: " +
          document.getElementById('milage').value;

        document.getElementById('popCarAge').innerHTML = "Car Value: " +
          document.getElementById('carValue').value;

        if (document.getElementById('none').checked) {
          document.getElementById('popSecurity').innerHTML = "Security: None";

        } else if (document.getElementById('alarm').checked) {
          document.getElementById('popSecurity').innerHTML = "Security: Alarm";

        } else if (document.getElementById('immobiliser').checked) {
          document.getElementById('popSecurity').innerHTML = "Security: Immobiliser";

        } else if (document.getElementById('both').checked) {
          document.getElementById('popSecurity').innerHTML = "Security: Alarm & Immobiliser";

        } else {
          document.getElementById('popSecurity').innerHTML = "Security: Tracking Device, Alarm, & Immobiliser";
        }



        if (document.getElementById('pleasure').checked) {
          document.getElementById('popUsage').innerHTML = "Car is used for: Pleasure";

        } else {
          document.getElementById('popUsage').innerHTML = "Security: Alarm";

        }


        document.getElementById('popTotal').innerHTML = "Total: " +
          document.getElementById('final').value;








      } else {
        document.getElementById('dateErr').setAttribute("style", "display: block");
        document.getElementById('dateErrorValid').setAttribute("style", "display: none");
        document.getElementById('date').setAttribute("style", "border-color: red;");
        document.getElementById('ageError').setAttribute("style", "display: none");
        document.getElementById('ageErrorValid').setAttribute("style", "display: block");
        document.getElementById('age').setAttribute("style", "border-color: green;");
      }




    } else {

      document.getElementById('ageError').setAttribute("style", "display: block");
      document.getElementById('ageErrorValid').setAttribute("style", "display: none");
      document.getElementById('age').setAttribute("style", "border-color: red;");
    }


  }
}



//https://codepen.io/ishanbakshi/pen/pgzNMv

document.getElementById('timer').innerHTML =
  005 + ":" + 00;
startTimer();





//no where where i put the alert worked it just kept popping up every 1 sec

function startTimer() {
  let presentTime = document.getElementById('timer').innerHTML;
  let timeArray = presentTime.split(/[:]+/);
  let m = timeArray[0];
  let s = checkSecond((timeArray[1] - 1));
  if (s == 59) {
    m = m - 1
  }


  document.getElementById('timer').innerHTML =
    m + ":" + s;
  
    
    setTimeout(startTimer, 1000);
    
    
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  };
  if (sec < 0) {
    sec = "59"
  };
  return sec;
}



