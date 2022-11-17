import {categories} from "./categories.js";
import {news,getNews} from './news.js';

const API_KEY = "196614289b844c178f12ecdc82854dc3";
// select DOM elements
const categoryList = document.querySelector("#categoryList");
const categoryTemplate = document.querySelector("#categoryTemplate").content;
const searchForm = document.querySelector("#searchForm");
const searchInput = searchForm.querySelector("#searchInput");
const newsList = document.querySelector("#newsList");
const newsTemplate = document.querySelector("#newsTemplate").content;
const localNews = JSON.parse(window.localStorage.getItem("localNews")) || [];

// FUNCTIONS
function renderCategories(categories,categoryList ){
    const newFragment = new DocumentFragment();
    categories.forEach(category => {
        const categoryTemplateClone = categoryTemplate.cloneNode(true).children[0];
        categoryTemplateClone.dataset.searchQuery = category.toLowerCase();
        categoryTemplateClone.textContent = category;
        newFragment.appendChild(categoryTemplateClone);
    });
    categoryList.appendChild(newFragment);
}
function renderNews(news,newsList,regex = new RegExp()){
    const newFragment = new DocumentFragment();
    newsList.innerHTML = "";
    news.forEach(newsItem => {
        const newsTemplateClone = newsTemplate.cloneNode(true).children[0];
        newsTemplateClone.querySelector("#newsLink").textContent = newsItem.title;
        newsTemplateClone.querySelector("#newsDescription").textContent = newsItem.description;
        newsTemplateClone.querySelector("#newsImg").src = newsItem.urlToImage;
        newsTemplateClone.querySelector("#newsSource").textContent = newsItem.source.name;
        newsTemplateClone.querySelector("#newsTime").textContent = newsItem.publishedAt;
        newFragment.appendChild(newsTemplateClone);
    });
    newsList.appendChild(newFragment);
}
function debounce(cb,delay = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },delay);
    }
}

const updateInputText = debounce(text => {
    console.log(text);
});

const searchNews = debounce((searchQuery) => {
    if(!searchQuery) return;
    const newsResponse =  getNews("https://newsapi.org/v2/everything?",{
        q:searchQuery,
        apiKey:API_KEY
    }).then(res => res.json()).then(data => {
        renderNews(data.articles,newsList);
    })
});

// EVENTS
searchInput.addEventListener("input",evt => {
    searchNews(evt.target.value);
});
categoryList.addEventListener("click",evt => {
    const targetElem = evt.target;
    if(targetElem.matches("#categoryItem")){
        searchNews(targetElem.dataset.searchQuery);
    }
})


// FUNCTION CALLS
// getNews("https://newsapi.org/v2/everything?",{
//     q:"messi",
//     apiKey:API_KEY
// });

// renderNews(localNews,newsList);
renderCategories(categories,categoryList);