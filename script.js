//1
document.body.style.backgroundImage = 'url("images/bg0.png")';
//2
const gallery1 = document.getElementById('gallery');
gallery1.style.border = '4px solid #5D9A90';
gallery1.style.margin = '30px 0';

//3
Array.from(gallery1.children).forEach((item) => {
  item.style.opacity = '0.5';
});

//4
document.querySelector('h1').textContent = 'ЗАГОЛОВОК СТОРІНКИ';
//5
document.querySelector('h2.title').style.display = 'none';

//
const articles = document.querySelectorAll('article');
articles.forEach((article, index) => {
  //6
  article.style.marginBottom = '30px';
  //7
  article.style.backgroundColor = index % 2 === 0 ? '#D8A3D5' : '#A3CFD8';
});

//8
const currentLink = document.querySelector('a.current');
currentLink.parentElement.style.borderLeft = '2px dotted red';

//9
const lastArticleLink = articles[articles.length - 1].querySelector('a');
lastArticleLink.style.color = '#fff';
lastArticleLink.style.backgroundColor = '#7F4196';
