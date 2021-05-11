//============ Активация бургера и меню ============//

let menuBurger = document.querySelector('.header__burger');
let menuList = document.querySelector('.header__social-menu');

menuBurger.addEventListener("click", function (e) {
	menuBurger.classList.toggle('active');
	menuList.classList.toggle('active');
});

//================================================//
//================ Спойлер на faq ================//
let itemsTitle = document.querySelectorAll('.item-question__title');

for (let itemTitle of itemsTitle) {

	itemTitle.onclick = function () {
		
		let itemsTitleActive = document.querySelectorAll('.item-question__title.active');
		
		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('active');

		for (let itemTitleActive of itemsTitleActive) {
				
			itemTitleActive.classList.remove('active');
			itemTitleActive.nextElementSibling.classList.remove('active');
			}


	}
};
//================================================//
//================ Меню на blog ================//
let itemsSubTitle = document.querySelectorAll('.side-blog__subtitle');

for (let itemSubTitle of itemsSubTitle) {

	itemSubTitle.onclick = function () {
		
		let itemsSubTitleActive = document.querySelectorAll('.side-blog__subtitle.active');
		
		this.classList.toggle('active');
		this.children[0].classList.toggle('active');
		this.nextElementSibling.classList.toggle('active');

		for (let itemSubTitleActive of itemsSubTitleActive) {
				
			itemSubTitleActive.classList.remove('active');
			itemSubTitleActive.children[0].classList.remove('active');
			itemSubTitleActive.nextElementSibling.classList.remove('active');
			}
	}
};
//================================================//
