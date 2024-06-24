const container = document.querySelector('.container');
const paprika = document.querySelector('.paprika');

const btns = document.querySelectorAll('.btn');
const btnSmall = document.querySelector('.small');
const btnMedium = document.querySelector('.medium');
const btnLarge = document.querySelector('.large');
const btnApply = document.querySelector('.btnApply');
const label = document.querySelector('.label');
const btnReset = document.querySelector('.btnReset');
const input = document.querySelector('.input');
const labelValue = document.querySelector('.value');

//functions
const numberColumnsRows = function (n) {
  return `repeat(${n}, 1fr)`;
};

const styleGrid = function (n) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = numberColumnsRows(n);
    container.style.gridTemplateRows = numberColumnsRows(n);
    container.style.width = '600px';
    container.style.height = '600px';
    container.style.margin = `32px auto`;
    container.style.border = `2px solid #a5d8ff`;
    container.style.gap = '1px';
  };
  
  const displayGrid = function (n) {
    container.innerHTML = '';

    const append = function (colRow) {
        colRow.classList.add('paprika');
        container.appendChild(colRow);
      };

    for (let i = 0; i < n; i++) {
      const columns = document.createElement('div');
      append(columns);
  
      for (let y = 1; y < n; y++) {
        const rows = document.createElement('div');
        append(rows);
      }
    }
};

// general set up
displayGrid(16);
styleGrid('16');
input.value = 16;

label.addEventListener('click', function (e) {
  btns.forEach((el) => el.classList.remove('color'));

  console.log(e.target);

  if (e.target.classList.contains('btn')) {
    const clicked = e.target;
    clicked.classList.add('color');
  }
});

btnSmall.classList.add('color');

// change grid
btnSmall.addEventListener('click', function (e) {

  displayGrid(16);
  styleGrid('16');
});

btnMedium.addEventListener('click', function () {

  displayGrid(32);
  styleGrid('32');
});

btnLarge.addEventListener('click', function () {

  displayGrid(48);
  styleGrid('48');
});

input.addEventListener('click', function (e) {
    const val1 = input.value;
    labelValue.textContent = `${val1}x${val1}`;
  });

  btnReset.addEventListener('click', function () {
    container.innerHTML = '';
    displayGrid(16);
    styleGrid('16');
    input.value = 16;
    labelValue.textContent = `16x16`;
  });
  
  // hover effect
  container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('paprika')) {
      const hovered = e.target;
      hovered.style.backgroundColor = `#1864ab`;
    }
  });
  
  btnApply.addEventListener('click', function (e) {
  const val1 = input.value;
  console.log(val1);
  displayGrid(val1);
  styleGrid(`${val1}`);
  labelValue.textContent = `${val1}x${val1}`;
});