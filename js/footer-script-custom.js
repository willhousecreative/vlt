/** Toggles content using ID and data-target as the binding */

// TODO: for expanded useage consider adding multiple sections
// at present, only one section can be used
const elContainer = document.querySelectorAll(
  'section[data-section-id="65398b1efeed1d69b2a95eb2"] .list-item-content__description'
);
const el = document.querySelectorAll(
  'section[data-section-id="65398b1efeed1d69b2a95eb2"] .list-item-content__description p'
);
console.log(el);

// global namespace
let buttonAnchor;

// create a button for each container element
elContainer.forEach((ele, index) => {
  ele.id = 'item-' + index;

  buttonAnchor = document.createElement('a');
  buttonAnchor.innerText = 'Show More';
  buttonAnchor.classList.add('show-more');
  buttonAnchor.classList.add('list-item-content__button');
  buttonAnchor.classList.add('sqs-block-button-element');
  buttonAnchor.classList.add('sqs-block-button-element--medium');
  buttonAnchor.classList.add('sqs-button-element--primary');
  buttonAnchor.setAttribute('data-target', 'item-' + index);
  buttonAnchor.title = 'Show More';
  ele.appendChild(buttonAnchor);
});

// select all the newly created buttons
const buttons = document.getElementsByClassName('show-more');

// show/hid functionality on click
const onButtonClick = (event) => {
  console.log('click');
  const button = event.target;
  const dataTarget = button.getAttribute('data-target');
  const extraContent = document.getElementById(dataTarget);
  button.innerHTML =
    button.innerHTML === 'Show Less' ? 'Show More' : 'Show Less';
  extraContent.classList.toggle('show');
  extraContent.classList.toggle('display-block');
};

// invoke an function to attach the click listener to each button
const attachingEvent = (e) => e.addEventListener('click', onButtonClick);

// loop through button array and call the click listener
Array.prototype.forEach.call(buttons, attachingEvent);
