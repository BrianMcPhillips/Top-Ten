// Import DOM elements
const draggableList = document.getElementById('draggable-list'),
  check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffet',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Oretega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomburg',
  'Larry Page'
];

const listItems = [];

let dragStartIndex;

createList();

// Create List Items into DOM
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => { console.log(person);
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);
      draggableList.appendChild(listItem);
  });
}