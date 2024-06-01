import './style.css';
import title from './title.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';

const main = document.getElementById('content');
main.appendChild(title);
main.appendChild(menu);

const menu_btn = document.getElementById('menu-btn');
menu_btn.addEventListener('click', function() {
    main.innerHTML = '';
    main.appendChild(title);
    main.appendChild(menu);
})

const about_btn = document.getElementById('about-btn');
about_btn.addEventListener('click', function() {
    main.innerHTML = '';
    main.appendChild(about);
})

const contact_btn = document.getElementById('contact-btn');
contact_btn.addEventListener('click', function() {
    main.innerHTML = '';
    main.appendChild(contact);
})