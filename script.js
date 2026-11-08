document.body.style.backgroundImage = 'url("images/bg0.png")';

const gallery1 = document.getElementById('gallery');
gallery1.style.border = '4px solid #5D9A90';
gallery1.style.margin = '30px 0';

Array.from(gallery1.children).forEach((item) => {
  item.style.opacity = '0.5';
});

document.querySelector('h1').textContent = 'ЗАГОЛОВОК СТОРІНКИ';
document.querySelector('h2.title').style.display = 'none';

const articles = document.querySelectorAll('article');
articles.forEach((article, index) => {
  article.style.marginBottom = '30px';
  article.style.backgroundColor = index % 2 === 0 ? '#D8A3D5' : '#A3CFD8';
});

const currentLink = document.querySelector('a.current');
currentLink.parentElement.style.borderLeft = '2px dotted red';

const lastArticleLink = articles[articles.length - 1].querySelector('a');
lastArticleLink.style.color = '#fff';
lastArticleLink.style.backgroundColor = '#7F4196';
