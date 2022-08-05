// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let ToggleEl = document.querySelector('.nav-toggle');
let linksEl = document.querySelector('.select-links');

ToggleEl.addEventListener('click', function () {
  console.log('toggle button clicked');
  if (linksEl.classList.contains('links')) {
    console.log('already contains thus remove');
    linksEl.classList.remove('links');
  } else {
    linksEl.classList.add('links');
    console.log('added');
  }
  //OR
  //   linksEl.classList.toggle('links');
});
