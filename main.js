
const data = [
  {
    name: "Andrew Spurlock",
    house: "Gryffindor",
  },
  {
    name: "Katee Spurlock",
    house: "Hufflepuff"
  },  
  {
    name: "Griffy",
    house: "Gryffindor",
  },
  {
    name: "Wriggy",
    house: "Hufflepuff"
  },  
  {
    name: "Andrew Spurlock",
    house: "Ravenclaw",
  },
  {
    name: "Katee Spurlock",
    house: "Slytherin"
  },  
  {
    name: "Griffy",
    house: "Gryffindor",
  },
  {
    name: "Wriggy",
    house: "Hufflepuff"
  }]

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
  renderToDom("#enterStudent", domString)
}

//Info Form after sorting hat btn 
const studentForm = () => {
  const domString = `
 <form>
 <header>Enter First Year's Name</header>
  <div class="form-floating mb-3">
    <input class="form-control form-control-lg" type="text" placeholder="Full Name" id="fullName" aria-label="fullName" required>
    <label for="fullName">Full Name</label>
  </div>
  <button id="sort-btn"
    type="submit" 
    class="btn btn-success" 
  >
    Submit
  </button>
</form>
  `
  renderToDom("#studentForm", domString)
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
      <button class="btn btn-danger" id="delete--${pet.id}">Expel!</button> 
    </div>
  </div>`
  })
  renderToDom("#firstYearContainer", domString)
}





// EVENT LISTENERS //

// const eventListeners = () => {
//   const formCard = new bootstrap.Form(document.querySelector('#sort-btn'));
// }

//Filter Btn Listeners!
document.querySelector('#filterContainer').addEventListener('click', (e) => {
  if(e.target.id === "all") {
    cardsOnDom(data)
  } else if (e.target.id === "gryffindor") {
    const gry = data.filter(taco => taco.house === "Gryffindor");
    cardsOnDom(gry);
  } else if (e.target.id === "hufflepuff") {
    const huf = data.filter(taco => taco.house === "Hufflepuff");
    cardsOnDom(huf);
  } else if (e.target.id === "ravenclaw") {
    const rav = data.filter(taco => taco.house === "Ravenclaw");
    cardsOnDom(rav);
  } else if (e.target.id === "slytherin") {
    const sly = data.filter(taco => taco.house === "Slytherin");
    cardsOnDom(sly);
  } 
});


//On Start Functions!
const startApp = () => {
  sortingHatBtn();
  filterButtons();
  cardsOnDom(data);
  eventListeners(); // always last
};

startApp();
