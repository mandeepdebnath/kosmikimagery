/**
 *
 * @param {Date} dateObject
 */

url =
  "https://api.nasa.gov/planetary/apod?api_key=yVvbu3sZGFcknM4DgxMDdFhgnN9tfyh3YEOROveA";

const card = document.querySelector(".wrapper");
let data = {};

async function renderData(data) {
  let html = `<div class="pic-card p-3">
  <div class="card-el mb-4">
  
  <h2>${data.title}</h2>
  <h5><i>Copyright: ${data.copyright}</i></h5>
  </div>

    <img src=${data.hdurl} alt=${data.title} loading="lazy" class="img mb-4">

    <div class="card-el mb-4">
 
    <h5 class="mb-2">Date: ${data.date}</h5>
    <p class="mb-0">${data.explanation}</p>
    </div>
    </div>`;

  card.innerHTML = html;
}

//fetching data from API
async function fetchTodayData() {
  try {
    let res = await fetch(url);
    data = await res.json();
    console.log(data);
    renderData(data);
  } catch (err) {
    console.log(err);
  }
}

fetchTodayData();
