const elContainer = document.querySelector(
  'section[data-section-id="649da269c19d844c02d40cf4"] .list-item-content__description'
);
const el = document.querySelector(
  'section[data-section-id="649da269c19d844c02d40cf4"] .list-item-content__description p'
);
console.log(el);

// create a button element
let buttonAnchor = document.createElement('a');
buttonAnchor.innerText = 'Read More';
buttonAnchor.classList.add('list-item-content__button');
buttonAnchor.classList.add('sqs-block-button-element');
buttonAnchor.classList.add('sqs-block-button-element--medium');
buttonAnchor.classList.add('sqs-button-element--primary');
buttonAnchor.title = 'Read More';
buttonAnchor.href = '#';
elContainer.appendChild(buttonAnchor);

// toggle classes and text on click
buttonAnchor.addEventListener('click', (evt) => {
  console.log('clicked');
  txt = buttonAnchor.innerText;
  buttonAnchor.innerText = txt == 'Read More' ? 'Read Less' : 'Read More';
  el.classList.toggle('show');
  el.classList.toggle('display-block');
});
