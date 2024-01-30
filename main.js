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
    <a href="#studentForm" class="btn btn-primary">Start Sorting</a>
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
  <button 
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
    <button class="btn all btn-lg buttonRow" id="All">All</button>
    <button class="btn gryff btn-lg buttonRow" id="Gryffindor">Gryffindor</button>
    <button class="btn huff btn-lg buttonRow" id="Hufflepuff">Hufflepuff</button>
    <button class="btn raven btn-lg buttonRow" id="Ravenclaw">Ravenclaw</button>
    <button class="btn slyth btn-lg buttonRow" id="Slytherin">Slytherin</button>
  </div>
  `;
  renderToDom('#filterContainer', domString);
};







const startApp = () => {
  sortingHatBtn();
  filterButtons();
  // eventListeners(); // always last
};

startApp();
