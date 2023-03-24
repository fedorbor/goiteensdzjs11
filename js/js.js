// 1. Отримати текст з елемента з класом "page-title" та змінити його на "Новий заголовок".
const mainTitleItem = document.querySelector(".page-title");
mainTitleItem.textContent ="Новий заголовок";

// 2. Отримати текст з елемента з класом paragraph  та замінити "Це абзац тексту." на текст рибу.
const textParagraph = document.querySelector(".paragraph");
console.log(textParagraph.textContent);
textParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies.";
// 3. Отримати список елементів з класом list маркованого списку.
const list = document.querySelectorAll(".list");
console.log(list);
// 4. Отримати зображення з класом "image" та замінити його атрибут src на будь-яке інше зображення.
const imageEl = document.querySelector(".image")
imageEl.src = `https://images.pexels.com/photos/8063855/pexels-photo-8063855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
// 5. Отримати останній елемент з класом "section-title" та змінити його текст на "Новий заголовок".
const sectionTitle = document.querySelector('.section-title:last-of-type');
sectionTitle.textContent = 'Новый заголовок';

// 6. Отримати останній елемент з класом table-cell та змінити його текст на "Оновлене значення".
const tableCell = document.querySelector('.table-cell:last-of-type');
tableCell.textContent = 'Оновлене значення';
// 7. Отримати всі елементи з класом footer-text та додати до них новий клас highlight зі стилями.
const footerTextElements = document.querySelectorAll('.footer-text');
footerTextElements.forEach((element) => {
  element.classList.add('highlight');
});

// 8. Отримати елемент з класом navigation та змінити його стиль background-color на "lightblue".
const navEl = document.querySelector(".navigation");
navEl.style.backgroundColor = 'lightblue';
