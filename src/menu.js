const menu = document.createElement('div');
menu.classList.add('menu');

const dish1 = document.createElement('div');
const dish2 = document.createElement('div');
const dish3 = document.createElement('div');

dish1.innerHTML = 'Soup';
dish2.innerHTML = 'Rice';
dish3.innerHTML = 'Frogs';

dish1.classList.add('dish');
dish2.classList.add('dish');
dish3.classList.add('dish');

menu.appendChild(dish1);
menu.appendChild(dish2);
menu.appendChild(dish3);

export default menu;