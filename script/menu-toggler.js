const toggler = document.getElementById('toggler');
const togglerOpen = document.getElementById('toggler__open');
const togglerClose = document.getElementById('toggler__close');

const menuList = document.getElementById('menu-list');

toggler.addEventListener('click', (event) => {
	if (togglerOpen.classList.contains('hidden')) {
		togglerOpen.classList.remove('hidden');
		togglerClose.classList.add('hidden');
		menuList.classList.remove('opacity-100');
		menuList.classList.add('opacity-0');
	} else {
		togglerOpen.classList.add('hidden');
		togglerClose.classList.remove('hidden');
		menuList.classList.remove('opacity-0');
		menuList.classList.add('opacity-100');
	}
});
