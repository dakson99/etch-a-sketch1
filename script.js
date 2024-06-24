const container = document.querySelector('.container');
const paprika = document.querySelector('.paprika');

//btns
const btns = document.querySelectorAll('.btn');
const btnSmall = document.querySelector('.small');
const btnMedium = document.querySelector('.medium');
const btnLarge = document.querySelector('.large');
const btnDefault = document.querySelector('.default');
const label = document.querySelector('.label');

const numberColumnsRows = function (n) {
  return `repeat(${n}, 1fr)`;
};

const styleGrid = function (n) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = numberColumnsRows(n);
    container.style.gridTemplateRows = numberColumnsRows(n);
    container.style.width = '600px';
    container.style.height = '600px';
    container.style.margin = `0 auto`;
    container.style.marginTop = `50px`;
    container.style.border = `2px solid #a5d8ff`;
  
    container.style.gap = '1px';
  };
  
  const displayGrid = function (n) {
    for (let i = 0; i < n; i++) {
      const columns = document.createElement('div');
      columns.classList.add('paprika');
      container.appendChild(columns);
  
      for (let y = 1; y < n; y++) {
        const rows = document.createElement('div');
        rows.classList.add('paprika');
        container.appendChild(rows);
      }
    }
};

displayGrid(8);
styleGrid('8');

label.addEventListener('click', function (e) {
  btnDefault.classList.remove('color');
  btns.forEach((el) => el.classList.remove('color'));

  console.log(e.target);

  if (e.target.classList.contains('btn')) {
    const clicked = e.target;
    clicked.classList.add('color');
  }
});

btnDefault.classList.add('color');

// set Default
btnDefault.addEventListener('click', function () {
  container.innerHTML = '';

  displayGrid(8);
  styleGrid('8');
});

// change grid
btnSmall.addEventListener('click', function (e) {
  container.innerHTML = '';
  displayGrid(16);
  styleGrid('16');
});

btnMedium.addEventListener('click', function () {
  container.innerHTML = '';
  displayGrid(32);
  styleGrid('32');
});

btnLarge.addEventListener('click', function () {
  container.innerHTML = '';
  displayGrid(48);
  styleGrid('48');
});

const input = document.querySelector('.input');
console.log(input.value);
const labelValue = document.querySelector('.value');

input.addEventListener('click', function (e) {
  container.innerHTML = '';
  const val1 = input.value;
  console.log(val1);
  displayGrid(val1);
  styleGrid(`${val1}`);
  labelValue.textContent = `${val1}x${val1}`;
});