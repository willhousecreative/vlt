const elContainer = document.querySelectorAll(
  'section[data-section-id="65398b1efeed1d69b2a95eb2"] .list-item-content__description'
);
const el = document.querySelectorAll(
  'section[data-section-id="65398b1efeed1d69b2a95eb2"] .list-item-content__description p'
);
console.log(el);

let buttonAnchor;

// create a button element

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
  //   buttonAnchor.href = '#';
  //   ele.innerHTML = 'Hello World';
  ele.appendChild(buttonAnchor);

  //   buttonAnchor.addEventListener('click', (evt) => {
  //     console.log('clicked');
  //     txt = buttonAnchor.innerText;
  //     buttonAnchor.innerText = txt == 'Read More' ? 'Read Less' : 'Read More';
  //     el.classList.toggle('show');
  //     el.classList.toggle('display-block');
  //   });
});

const buttons = document.getElementsByClassName('show-more');
console.log(buttons);

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

const attachingEvent = (e) => e.addEventListener('click', onButtonClick);

Array.prototype.forEach.call(buttons, attachingEvent);
// toggle classes and text on click

/* From Squarspace
 * https://forum.squarespace.com/topic/240607-read-more-read-less-accordion-toggle/
 */
// Add an event listener to run the code once the DOM content has been loaded
// Select all elements with the 'list-item-content__button' class
// var readToggleButtons = document.querySelectorAll('.list-item-content__button');
// console.log(readToggleButtons);

// // Check if the buttons exist on the page
// if (readToggleButtons) {
//   // Iterate through all the buttons
//   readToggleButtons.forEach(function (readToggleButton) {
//     // Add a click event listener to each button
//     readToggleButton.addEventListener('click', function () {
//       console.log('clicked');
//       txt = buttonAnchor.innerText;
//       buttonAnchor.innerText = txt == 'Read More' ? 'Read Less' : 'Read More';
//       el.classList.toggle('show');
//       el.classList.toggle('display-block');

//       // Set a timeout to run the code after a short delay (50ms) to ensure the 'aria-expanded' attribute is updated before toggling the text
//       //   setTimeout(function () {
//       //     // Select the span element with the 'accordion-item__title' class inside the current button
//       //     var readToggleSpan = readToggleButton.querySelector('#page article .accordion-item__title');
//       //     // Determine if the current button is expanded based on the 'aria-expanded' attribute value
//       //     var isExpanded = readToggleButton.getAttribute('aria-expanded') === 'true';
//       //     // Toggle the text based on whether the button is expanded or not
//       //     toggleText(readToggleSpan, isExpanded);
//       //   }, 50);
//     });
//   });
// }

// Define the 'toggleText' function that changes the text of the given element based on the 'isExpanded' parameter
//     function toggleText(element, isExpanded) {
//       // If the button is expanded, set the text to 'Read less'
//       if (isExpanded) {
//         element.innerHTML = 'Read less';
//       // Otherwise, set the text to 'Read more'
//       } else {
//         element.innerHTML = 'Read more';
//       }
//     }
