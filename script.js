const allBtns = document.getElementsByClassName('btn');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const categoryText = document.querySelector('.category-name');
const textResult = document.querySelector('.total-result');

const modeImage = document.querySelector('.mode');
const header = document.querySelector('.header');
const navbar = document.getElementsByClassName('navbar');
const navbarBtn = document.getElementsByClassName('info-btn');
const carrousel = document.querySelector('.carrousel');
const resultContainer = document.querySelector('.result-container');
const articleTitle = document.querySelector('.articles-title');
const articles = document.getElementsByClassName('article');
const articleNavbarContainer = document.querySelector('.articles');
const footer = document.querySelector('.footer');
const socialMedia = document.getElementsByClassName('social-media');
const darkSocialMedia = ['dark-twitter.png', 'dark-facebook.png', 'dark-instagram.png', 'dark-github.png'];
const normalSocialMedia = ['twitter.png', 'facebook.png', 'instagram.png', 'github.png']

const allCategories = [carbohydrates, vegetables, fruits, meats, dairyProducts];
let clickedMode = false;
let carrouselCount = 0;
let caloriesResult = 0;
prev.classList.add('none');
categoryText.innerText = allCategories[0].categoryName;

prev.addEventListener('click', function () {
    changeCount('prev');
    for(let i = 0; i < allBtns.length; i++){
        changeBtnStyle(allCategories[carrouselCount].dishes[i].isClicked, clickedMode,i);
    }
});

next.addEventListener('click', function () {
    changeCount('next');
    for(let i = 0; i < allBtns.length; i++){
        changeBtnStyle(allCategories[carrouselCount].dishes[i].isClicked, clickedMode,i);
    }
});

for (let k = 0; k < allBtns.length; k++) {
    allBtns[k].addEventListener('click', function () {
        allCategories[carrouselCount].dishes[k].isClicked = !allCategories[carrouselCount].dishes[k].isClicked;
        changeBtnStyle(allCategories[carrouselCount].dishes[k].isClicked, clickedMode, k);
        sumCalories(allCategories[carrouselCount].dishes[k].calorieValue, allCategories[carrouselCount].dishes[k].isClicked);
    });
}
modeImage.addEventListener('click', function () {
    clickedMode = !clickedMode;
    changePageStyle(clickedMode);
    for(let i = 0; i < allBtns.length; i++){
        changeBtnStyle(allCategories[carrouselCount].dishes[i].isClicked, clickedMode, i);
    }
});

function changeBtnStyle(clickedBtn, clickedMode, btnPosition) {
    if (clickedMode) {
        if (clickedBtn) {
            allBtns[btnPosition].classList.add('dark-selected-btn');
        }
        else {
            allBtns[btnPosition].classList.add('dark-btn');
            allBtns[btnPosition].classList.remove('dark-selected-btn');
        }
    }
    else {
        if (clickedBtn) {
            allBtns[btnPosition].classList.add('selected-btn');
            allBtns[btnPosition].classList.remove('dark-selected-btn');
        }
        else {
            allBtns[btnPosition].classList.remove('selected-btn')
            allBtns[btnPosition].classList.remove('dark-selected-btn');
        }
    }
}
function changeCount(direction) {
    if (direction === 'prev') {
        changeImages(carrouselCount, direction)
        carrouselCount--;
    }
    if (direction === 'next') {
        changeImages(carrouselCount, direction)
        carrouselCount++;
    }
    changeCategory(carrouselCount);

}
function changeCategory(carrouselCount) {
    if (carrouselCount > 0) {
        prev.classList.remove('none');
    } else {
        prev.classList.add('none');
    }
    if (carrouselCount < (allCategories.length - 1)) {
        next.classList.remove('none');
    } else {
        next.classList.add('none');
    }
    categoryText.innerText = allCategories[carrouselCount].categoryName;
}
function changeImages(carrouselCount, direction) {
    for (let j = 0; j < allBtns.length; j++) {
        if (direction === 'next') {
            allBtns[j].classList.remove(allCategories[carrouselCount].dishes[j].dishName);
            allBtns[j].classList.add(allCategories[(carrouselCount + 1)].dishes[j].dishName);
        }
        else {
            allBtns[j].classList.remove(allCategories[carrouselCount].dishes[j].dishName);
            allBtns[j].classList.add(allCategories[(carrouselCount - 1)].dishes[j].dishName);
        }
    }
}
function sumCalories(calories, clicked) {
    if (clicked) {
        caloriesResult += calories;
    }
    if (!clicked) {
        caloriesResult -= calories;
    }
    textResult.innerText = caloriesResult;
}
function changePageStyle(clicked) {
    if (clicked) {
        modeImage.classList.add('light');
        header.classList.add('dark-header');
        carrousel.classList.add('dark-carrousel');
        resultContainer.classList.add('dark-result-container');
        articleTitle.classList.add('dark-articles-title');
        articleNavbarContainer.classList.add('dark-articles-navbar');
        footer.classList.add('dark-footer');
    }
    else {
        modeImage.classList.remove('light');
        header.classList.remove('dark-header');
        carrousel.classList.remove('dark-carrousel');
        resultContainer.classList.remove('dark-result-container');
        articleTitle.classList.remove('dark-articles-title');
        articleNavbarContainer.classList.remove('dark-articles-navbar');
        footer.classList.remove('dark-footer');
    }
    for (let i = 0; i < articles.length; i++) {
        if (clicked) {
            articles[i].classList.add('dark-article');
        }
        else {
            articles[i].classList.remove('dark-article');
        }

    }
    for (let j = 0; j < navbar.length; j++) {
        if (clicked) {
            navbar[j].classList.add('dark-navbar');
        }
        else {
            navbar[j].classList.remove('dark-navbar');
        }
    }
    for (let k = 0; k < navbarBtn.length; k++) {
        if (clicked) {
            navbarBtn[k].classList.add('dark-navbar-btn');
        }
        else {
            navbarBtn[k].classList.remove('dark-navbar-btn');
        }
    }
    for (let l = 0; l < socialMedia.length; l++) {
        if (clicked) {
            socialMedia[l].src = 'Images/socialMedia/' + darkSocialMedia[l];
            socialMedia[l].classList.add('dark-social-media');
        } else {
            socialMedia[l].src = 'Images/socialMedia/' + normalSocialMedia[l];
            socialMedia[l].classList.remove('dark-social-media');
        }
    }
}