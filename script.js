// Exercice 1 et 2
function displayFormIdentity() { //Create the function

  let containerIdentity = document.createElement("div"); // create the parent container of the form
  document.body.appendChild(containerIdentity);

  //Creating the form
  let formIdentity = document.createElement("form");
  containerIdentity.appendChild(formIdentity);


  let firstNameLastName = document.createElement("p"); //Create the <p> which includes the boxes to be filled in
  formIdentity.appendChild(firstNameLastName);

  let firstNameLB = document.createElement("label"); //First label for the first name
  firstNameLastName.appendChild(firstNameLB); // That we place in the container
  firstNameLB.textContent = "Quel est votre prénom ? ";
  let firstNameIPT = document.createElement("input");
  firstNameLastName.appendChild(firstNameIPT); //add in the element "p"
  firstNameIPT.type = "text"; // select type


  firstNameLastName.appendChild(document.createElement("br")) // Allows you to create a line break.
  firstNameLastName.appendChild(document.createElement("br"))

  let lastNameLB = document.createElement("label"); //Again for the lastName
  firstNameLastName.appendChild(lastNameLB);
  lastNameLB.textContent = "Quel est votre nom ?";
  let lastNameIPT = document.createElement("input")
  firstNameLastName.appendChild(lastNameIPT);
  lastNameIPT.type = "text";


  //Create the validation button.
  let btn = document.createElement("p");
  containerIdentity.appendChild(btn);
  let btnOk = document.createElement("input");
  btn.appendChild(btnOk);
  btnOk.type = "button";
  btnOk.value = "OK";
  btn.addEventListener("click", validation, false);

  //Create message error
  let errorMessage = document.createElement("p");
  formIdentity.appendChild(errorMessage);
  errorMessage.textContent = "Veuillez remplir toutes les cases";
  errorMessage.hidden = true; // allows you not to display the message
  errorMessage.style.color = "red"; //Change the color of the text error

  //Create message welcome
  let messageWelcome = document.createElement("p");
  containerIdentity.appendChild(messageWelcome);
  messageWelcome.textContent = "Bonjour " + firstNameIPT.value + " " + lastNameIPT.value + " !";
  messageWelcome.hidden = true;


  function validation() {
    if ((lastNameIPT.value === " " || lastNameIPT.value === null) || (firstNameIPT.value === " " || firstNameIPT.value === null)) // if the input value is absent or returns nothing
    {
      errorMessage.hidden = false; // return the error message
    } else {
      messageWelcome.hidden = false; //return the welcome message
    }
  }
};


displayFormIdentity(); // calling the function


function displayFormSalary() {
  let containerSalary = document.createElement("div"); // create the parent container of the form
  document.body.appendChild(containerSalary);

  //Creating the form
  let formSalary = document.createElement("form");
  containerSalary.appendChild(formSalary);


  let salary = document.createElement("p"); //Create the <p> which includes the boxes to be filled in
  formSalary.appendChild(salary);

  let salaryMonthGrossLB = document.createElement("label"); //First label for the first name
  salary.appendChild(salaryMonthGrossLB); // That we place in the container
  salaryMonthGrossLB.textContent = "Salaire mensuel brut ";
  let salaryMonthGrossIPT = document.createElement("input");
  salary.appendChild(salaryMonthGrossIPT); //add in the element "p"
  salaryMonthGrossIPT.type = "number"; // select type


  salary.appendChild(document.createElement("br")) // line break.
  salary.appendChild(document.createElement("br"))

  let salaryMonthNetLB = document.createElement("label"); //Salary month net
  salary.appendChild(salaryMonthNetLB);
  salaryMonthNetLB.textContent = "Salaire mensuel net ";
  let salaryMonthNetIPT = document.createElement("input");
  salary.appendChild(salaryMonthNetIPT);
  salaryMonthNetIPT.type = "number";


  salary.appendChild(document.createElement("br")) //line break.
  salary.appendChild(document.createElement("br"))

  let salaryAnnualGrossLB = document.createElement("label"); // Salary annual gross
  salary.appendChild(salaryAnnualGrossLB);
  salaryAnnualGrossLB.textContent = "Salaire annuel brut ";
  let salaryAnnualGrossIPT = document.createElement("input");
  salary.appendChild(salaryAnnualGrossIPT);
  salaryAnnualGrossIPT.type = "number";

  salary.appendChild(document.createElement("br")) //line break.
  salary.appendChild(document.createElement("br"))

  let salaryAnnualNetLB = document.createElement("label"); //Salary annual net
  salary.appendChild(salaryAnnualNetLB);
  salaryAnnualNetLB.textContent = "Salaire annuel net ";
  let salaryAnnualNetIPT = document.createElement("input");
  salary.appendChild(salaryAnnualNetIPT);
  salaryAnnualNetIPT.type = "number";

  console.log(salaryAnnualNetIPT.value);

  function converterNetGross(); {
    if ()
  }



}


displayFormSalary()





// Exercie 3
// En JavaScript, créez une fonction qui prend en paramètre un tableau d’entiers, et qui retourne une
// copie de ce tableau constituée uniquement des valeurs paires.

let tabNbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //Create table Number
function displayEvenOdd(table) {
  let i = 0; //intermediate var used for the enumeration
  let currentElement; //Intermediate var used during sequential processing
  let tabNbrEven = []; // Create table
  while (i < table.length) { // condition of continuation "As long as"
    currentElement = table[i]; //Recovery of the current element
    i = i + 1; //Update of the intermediate var used to list.
    if (currentElement % 2 == 0) { //If we divide currentElement is equal to 0 alos it is even.
      tabNbrEven.push(currentElement); // Add in the table currentElement
    }
  }
  console.log(tabNbrEven); // Return in console the tabNbrEven
};
displayEvenOdd(tabNbr);

// Exercice 4 :
// En JavaScript, créez une fonction qui prend en paramètre un tableau de chaînes de caractères et qui
// renvoie une copie de ce tableau dans laquelle seuls les mots correspondant à des conjonctions de
// coordination sont conservées.

let tabRandomWord = ["azerty", "mais", "ballon", "ou", "et", "coline", "euro", "donc", "fourchette", "hache", "ignorer"]; //Création du tableau
function displayCoordConj(table) {
  let i = 0
  let currentElement;
  while (i < table.length) {
    i = i + 1;
    currentElement = table[i]
  }
  if (currentElement === "mais" || "ou" || "et" || "donc" || "or" || "ni" || "car") {
    console.log(currentElement);
  }
};
displayCoordConj(tabRandomWord)



// Exercice 5 :
// En JavaScript, créez une fonction qui retourne un tableau contenant 128 nombres. Chacun de ces
// nombres est un entier entre 0 et 100, choisi aléatoirement.
