const students = [];
let expelledStudents = [];

//Setup Utility Functions - RENDERTODOM
renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//Sorting Hat Section w/ button - Needs event listener
const sortingHatBtn = () => {
  const domString = `
  <div class="card hat">
  <img src="https://jonnegroni.com/wp-content/uploads/2016/10/harry-potter1-disneyscreencaps-com-5582.jpg" alt="Sorting Hat Picture">
  <div class="card-body welcome">
    <h1 class="card-title">Welcome to Hogwarts!</h1>
    <p class="card-text quote">"For Gryffindor, the bravest are prized far beyond the rest,
    For Ravenclaw, the cleverest will always be the best,
    For Hufflepuff, hardworkers are most worthy of admission,
    And power-hungry Slytherin love those of great ambition."</p>
    <h3 class="card-text">To begin, please click the button below and provide your information. You will be sorted accordingly!</h3>
    <button id="sort-btn" type="button" class="btn btn-warning">Start Sorting</button>
  </div>
</div>
  `;
  renderToDom("#enterStudent", domString);
};

//Info Form after sorting hat btn
const studentForm = () => {
  const domString = `
 <form id="inputForm">
 <h3 class="form-header">Enter First Year's Name</h3>
  <div class="form-floating mb-3">
    <input class="form-control form-control-lg" type="text" placeholder="Full Name" id="fullName" aria-label="fullName" required>
    <label for="fullName">Full Name</label>
  </div>
  <button type="submit" class="btn btn-success" id="form-submit">Submit</button>
</form>
  `;
  renderToDom("#studentForm", domString);
//Scroll down to new cards until top of filter is reached
  document.querySelector("#studentForm").scrollIntoView({behavior: 'smooth'});

  // Form Submit and New Student
  const form = document.querySelector("#inputForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector("#fullName").value,
      house: randomHouse(),
    };
    students.push(newStudentObj);
    cardsOnDom(students);
    form.reset();
  });
};

//Random House Function
const randomHouse = () => {
  let randomNumber = Math.floor(Math.random() * 5);
  let house = "";
  if (randomNumber === 0) {
    house = "Gryffindor";
  } else if (randomNumber === 1) {
    house = "Hufflepuff";
  } else if (randomNumber === 2) {
    house = "Ravenclaw";
  } else {
    house = "Slytherin";
  }
  return house;
};

const randomQuote = () => {
  let randomNumber = Math.floor(Math.random() * 5);
  let quote = "";
  if (randomNumber === 0) {
    quote =
      '"There Is No Good And Evil. There Is Only Power And Those Too Weak To Seek It."';
  } else if (randomNumber === 1) {
    quote = '"Harry Potter. The Boy Who Lived, Come To Die."';
  } else if (randomNumber === 2) {
    quote =
      '"Greatness Inspires Envy, Envy Engenders Spite, Spite Spawns Lies."';
  } else {
    quote = '"Out Of Fear, Not Loyalty."';
  }
  return quote;
};

//Filter Buttons
const filterButtons = () => {
  const domString = `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button class="btn all btn-lg buttonRow" id="all">All</button>
    <button class="btn gryff btn-lg buttonRow" id="gryffindor">Gryffindor</button>
    <button class="btn huff btn-lg buttonRow" id="hufflepuff">Hufflepuff</button>
    <button class="btn raven btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
    <button class="btn slyth btn-lg buttonRow" id="slytherin">Slytherin</button>
  </div>
  `;
  renderToDom("#filterContainer", domString);
};

//Cards to DOM!
const cardsOnDom = (array) => {
  let domString = `
  <div class="first-years">
    <h1 class="card-title-first">FIRST YEAR STUDENTS</h1>`;
  //Sort Function for Each Card
  array.sort(compareStudents).forEach((item) => {
    domString += `<div class="card ${item.house}" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.house}</p>
          <button class="btn btn-danger" id="expel--${item.id}">Expel!</button> 
          </div>
        </div>
    </div>`;
  });
  renderToDom("#firstYearCards", domString);
  filterButtons();
//Scroll down to new cards until top of filter is reached
  document.querySelector("#firstYearCards").scrollIntoView({behavior: 'smooth'});
};

//Voldy's Army
const voldyOnDaDom = (army) => {
  let domString = `
  <div class="vold-army">
    <h1 class="card-title-first">Voldemort's Army</h1>`;
  //Sort Function for Each Card
  army.sort(compareStudents).forEach((member) => {
    domString += `<div class="card voldy-card" style="width: 18rem;">
        <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${randomQuote()}</p>
    </div>
  </div>`;
  });
  renderToDom("#expelCards", domString);
//Scroll down to new cards until top of filter is reached
  document.querySelector("#expelCards").scrollIntoView({behavior: 'smooth'});
};

//To sort cards Alphabetically
function compareStudents(student1, student2) {
  if (student1.name < student2.name) {
    return -1;
  } else if (student1.name > student2.name) {
    return 1;
  } else {
    return 0;
  }
}

// EVENT LISTENERS //

const eventListeners = () => {
  document.querySelector("#sort-btn").addEventListener("click", () => {
    studentForm();
  });
  document.querySelector("#firstYearCards").addEventListener("click", (e) => {
    if (e.target.id) {
      const [, id] = e.target.id.split("--");
      const index = students.findIndex((taco) => taco.id === Number(id));

      if (e.target.id.includes("expel")) {
        expelled = students.splice(index, 1);
        expelledStudents = expelledStudents.concat(expelled);
//The push() adds elements to the end of an array and returns the new length of the array.
// The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
        cardsOnDom(students);
        voldyOnDaDom(expelledStudents);
      }
    }
  });
};

//Filter Btn Listeners!
document.querySelector("#filterContainer").addEventListener("click", (e) => {
  if (e.target.id === "all") {
    cardsOnDom(students);
  } else if (e.target.id === "gryffindor") {
    const gry = students.filter((taco) => taco.house === "Gryffindor");
    cardsOnDom(gry);
  } else if (e.target.id === "hufflepuff") {
    const huf = students.filter((taco) => taco.house === "Hufflepuff");
    cardsOnDom(huf);
  } else if (e.target.id === "ravenclaw") {
    const rav = students.filter((taco) => taco.house === "Ravenclaw");
    cardsOnDom(rav);
  } else if (e.target.id === "slytherin") {
    const sly = students.filter((taco) => taco.house === "Slytherin");
    cardsOnDom(sly);
  }
});

//On Start Functions!
const startApp = () => {
  sortingHatBtn();
  eventListeners(); // always last
};

startApp();
