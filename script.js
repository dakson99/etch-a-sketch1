const container = document.querySelector('.container');
const paprika = document.querySelector('.paprika');

const numberColumnsRows = function (n) {
  return `repeat(${n}, 1fr)`;
};

container.style.display = 'grid';
container.style.gridTemplateColumns = numberColumnsRows('16');
container.style.gridTemplateRows = numberColumnsRows('16');
container.style.width = '800px';
container.style.height = '800px';
container.style.margin = `0 auto`;
/* container.style.border = `2px solid blue`; */

container.style.gap = '4px';

for (let i = 0; i < 16; i++) {
  const columns = document.createElement('div');
  columns.classList.add('paprika');
  container.appendChild(columns);

  for (let y = 1; y < 16; y++) {
    const rows = document.createElement('div');
    rows.classList.add('paprika');
    container.appendChild(rows);
  }
}