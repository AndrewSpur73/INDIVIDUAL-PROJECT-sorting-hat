const students = []

  //Setup Utility Functions - RENDERTODOM 
renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//Sorting Hat Section w/ button - Needs event listener
const sortingHatBtn = () => {
  const domString = `
  <div class="card">
    <div class="card-header">
    </div>
  <div class="card-body">
    <h1 class="card-title">Welcome to Hogwarts!</h1>
    <p class="card-text">To begin, please click the button below and provide your information. You will be sorted accordingly!</p>
    <button id="sort-btn" type="button" class="btn btn-warning">Start Sorting</button>
  </div>
</div>
  `
  renderToDom("#enterStudent", domString);
}

//Info Form after sorting hat btn 
const studentForm = () => {
  const domString = `
 <form id="inputForm">
 <header>Enter First Year's Name</header>
  <div class="form-floating mb-3">
    <input class="form-control form-control-lg" type="text" placeholder="Full Name" id="fullName" aria-label="fullName" required>
    <label for="fullName">Full Name</label>
  </div>
  <button type="submit" class="btn btn-success" id="form-submit">Submit</button>
</form>
  `
  renderToDom("#studentForm", domString);

   // Form Submit and New Student

   const form = document.querySelector('#inputForm');
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     
     const newStudentObj = {
      //  id: students.length +1,
       name: document.querySelector ('#fullName').value,
       house: randomHouse()
     }
     students.push(newStudentObj);
     cardsOnDom(students);
     form.reset();
   })
}


//Random House Function
const randomHouse = () => {
let randomNumber = Math.floor(Math.random() * 5);
let house = '';
if (randomNumber === 0) {
  house = 'Gryffindor';
} else if (randomNumber === 1) {
  house = 'Hufflepuff';
} else if (randomNumber === 2) {
  house = 'Ravenclaw'
} else {
  house = 'Slytherin'
}
return house
}

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
  renderToDom('#filterContainer', domString);
};

//Cards to DOM!
const cardsOnDom = (array) => {
  let domString = ''
  array.map(item => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.house}</p>
      <button class="btn btn-danger" id="expel--${item.id}">Expel!</button> 
    </div>
  </div>`
  })
  renderToDom("#firstYearCards", domString)
  filterButtons();
}





// EVENT LISTENERS //

const eventListeners = () => {
  document.querySelector('#sort-btn').addEventListener('click', () => {
    studentForm()
  });

}

//Filter Btn Listeners!
document.querySelector('#filterContainer').addEventListener('click', (e) => {
  if(e.target.id === "all") {
    cardsOnDom(students)
  } else if (e.target.id === "gryffindor") {
    const gry = students.filter(taco => taco.house === "Gryffindor");
    cardsOnDom(gry);
  } else if (e.target.id === "hufflepuff") {
    const huf = students.filter(taco => taco.house === "Hufflepuff");
    cardsOnDom(huf);
  } else if (e.target.id === "ravenclaw") {
    const rav = students.filter(taco => taco.house === "Ravenclaw");
    cardsOnDom(rav);
  } else if (e.target.id === "slytherin") {
    const sly = students.filter(taco => taco.house === "Slytherin");
    cardsOnDom(sly);
  } 
});


//On Start Functions!
const startApp = () => {
  sortingHatBtn();

  // filterButtons();
  // cardsOnDom(students);
  eventListeners(); // always last
};

startApp();
