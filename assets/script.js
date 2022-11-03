'use strict'

const button = document.querySelector('button');

const fetchData = async function() {
  const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
  const json = await response.json();
  const data = json.data;
  const container = await document.getElementById('container');

  container.innerHTML = "";

  for(let i = 0; i < data.length-1; i++)
  {
    const name = data[i].anime_name;
    const img = data[i].anime_img;
    const api = 'https://anime-facts-rest-api.herokuapp.com/api/v1/' + name;

    const factResponse = await fetch(api);
    const factJson = await factResponse.json();

    const fact = factJson.data[Math.floor(Math.random() * factJson.data.length)].fact;

    container.innerHTML += 
    `<div class="gallery">
      <a target="_blank" href="#">
      <img src="${img}" class="img" alt="">
      </a>
      <h2 id="name">${name.split('_').join(' ')}</h2>
      <div class="desc">${fact}</div>
    </div>`
  }
}

fetchData();
//button.addEventListener('click', fetchData);

