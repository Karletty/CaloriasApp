class Categoria {
    constructor(categoryName, images, calorieValue, isClicked) {
        this.categoryName = categoryName;
        this.images = images;
        this.calorieValue = calorieValue;
        this.isClicked = isClicked;
    }
}
let carbohydrates = new Categoria;
carbohydrates.categoryName = 'Carbohidratos';
carbohydrates.images = ['bread', 'cereal', 'pasta', 'rice'];
carbohydrates.calorieValue = [265, 380, 135, 130];
carbohydrates.isClicked = [false, false, false, false];

let dairyProducts = new Categoria;
dairyProducts.categoryName = 'Lácteos';
dairyProducts.images = ['cheese', 'icecream', 'milk', 'yogurt'];
dairyProducts.calorieValue = [402, 207, 42, 60];
dairyProducts.isClicked = [false, false, false, false];

let fruits = new Categoria;
fruits.categoryName = 'Frutas';
fruits.images = ['apple', 'banana', 'strawberry', 'watermelon'];
fruits.calorieValue = [52, 89, 33, 30];
fruits.isClicked = [false, false, false, false];

let vegetables = new Categoria;
vegetables.categoryName = 'Verduras';
vegetables.images = ['broccoli', 'cucumber', 'lettuce', 'pepper'];
vegetables.calorieValue = [34, 16, 15, 40];
vegetables.isClicked = [false, false, false, false];

let meats = new Categoria;
meats.categoryName = 'Carnes';
meats.images = ['chicken', 'fish', 'meat', 'pork'];
meats.calorieValue = [239, 206, 250, 242];
meats.isClicked = [false, false, false, false];


const allCategories = [carbohydrates, vegetables, fruits, meats, dairyProducts];
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
const socialMedia = document.getElementsByClassName("social-media");
const darkSocialMedia = ["dark-twitter.png", "dark-facebook.png", "dark-instagram.png", "dark-github.png"];
const normalSocialMedia = ["twitter.png", "facebook.png", "instagram.png", "github.png"]

let clickedMode = false;
let count = 0;
let caloriesResult = 0;
prev.style.display = 'none';
categoryText.innerText = allCategories[0].categoryName;

prev.addEventListener('click', function () {
    changeCount('prev');
    changeBtnStyle(allCategories[count].isClicked, clickedMode);
});

next.addEventListener('click', function () {
    changeCount('next');
    changeBtnStyle(allCategories[count].isClicked, clickedMode);
});

for (let k = 0; k < 4; k++) {
    allBtns[k].addEventListener('click', function () {
        allCategories[count].isClicked[k] = !allCategories[count].isClicked[k];
        changeBtnStyle(allCategories[count].isClicked, clickedMode);
        sumCalories(allCategories[count].calorieValue[k], allCategories[count].isClicked[k]);
    });
}
modeImage.addEventListener('click', function () {
    clickedMode = !clickedMode;
    changePageStyle(clickedMode);
    changeBtnStyle(allCategories[count].isClicked, clickedMode);
});

function changeBtnStyle(clickedBtns, clickedMode) {
    for (let l = 0; l < clickedBtns.length; l++) {
        if (clickedMode) {
            if (clickedBtns[l]) {
                allBtns[l].classList.add('dark-clicked-btn');
                allBtns[l].classList.remove('no-clicked-btn', 'dark-no-clicked-btn', 'clicked-btn');
            }
            else {
                allBtns[l].classList.add('dark-no-clicked-btn');
                allBtns[l].classList.remove('no-clicked-btn');
                allBtns[l].classList.remove('dark-clicked-btn');
                allBtns[l].classList.remove('clicked-btn');
            }
        }
        else {
            if (clickedBtns[l]) {
                allBtns[l].classList.add('clicked-btn');
                allBtns[l].classList.remove('no-clicked-btn');
                allBtns[l].classList.remove('dark-clicked-btn');
                allBtns[l].classList.remove('dark-no-clicked-btn');
            }
            else {
                allBtns[l].classList.add('no-clicked-btn');
                allBtns[l].classList.remove('clicked-btn');
                allBtns[l].classList.remove('dark-clicked-btn');
                allBtns[l].classList.remove('dark-no-clicked-btn');
            }
        }
    }
}
function changeCount(direction) {
    if (direction === 'prev') {
        changeImages(count, direction)
        count = count - 1;
    }
    if (direction === 'next') {
        changeImages(count, direction)
        count = count + 1;
    }
    changeCategory(count);

}
function changeCategory(count) {
    if (count > 0) {
        prev.style.display = 'inline';
    } else {
        prev.style.display = 'none'
    }
    if (count < (allCategories.length - 1)) {
        next.style.display = 'inline';
    } else {
        next.style.display = 'none'
    }
    categoryText.innerText = allCategories[count].categoryName;
}
function changeImages(count, direction) {
    for (let j = 0; j < allBtns.length; j++) {
        if (direction === 'next') {
            allBtns[j].classList.remove(allCategories[count].images[j]);
            allBtns[j].classList.add(allCategories[(count + 1)].images[j]);
        }
        else {
            allBtns[j].classList.remove(allCategories[count].images[j]);
            allBtns[j].classList.add(allCategories[(count - 1)].images[j]);
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
            socialMedia[l].src = "Images/socialMedia/" + darkSocialMedia[l];
            socialMedia[l].classList.add('dark-social-media');
        } else {
            socialMedia[l].src = "Images/socialMedia/" + normalSocialMedia[l];
            socialMedia[l].classList.remove('dark-social-media');
        }
    }
}