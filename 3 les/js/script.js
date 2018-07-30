window.addEventListener('DOMContentLoaded', function() {
	// Получаем информацию для работы
	let products = document.querySelectorAll('.product'),
			buttons = document.querySelectorAll('button'),
			open = document.getElementsByClassName('open')[0];

	// Функция для создания корзины
	function createCart() {
		// Создаем элементы для нашей корзины
		let cart = document.createElement('div'),
				field = document.createElement('div'),
				heading = document.createElement('h2'),
				close = document.createElement('button');

		//Добавили классы к элементам
		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		//Добавили текст к элементам
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине:";

		//Добавляет в конец документа
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);
	}

	createCart();

	let field = document.querySelector('.cart-field'),
			cart = document.querySelector('.cart'),
			close = document.querySelector('.close');

	for (let i = 0; i < buttons.length; i++) {
		//Вашаем обработчик собыйтий на каждую кнопку
		buttons[i].addEventListener('click', function() {
				//Глубокое клонирование элемента
				let item = products[i].cloneNode(true),
						btn = item.querySelector('button');

				btn.remove();
				field.appendChild(item);
				products[i].remove();
		})
	}

	function openCart() {
		cart.style.display = 'block';
	}

	function closeCart() {
		cart.style.display = 'none';
	}

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

})