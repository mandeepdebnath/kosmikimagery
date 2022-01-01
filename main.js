url =
  "https://api.nasa.gov/planetary/apod?api_key=yVvbu3sZGFcknM4DgxMDdFhgnN9tfyh3YEOROveA";

const card = document.querySelector(".wrapper");
let data = {};

async function renderData(data) {
  let html = `<div class="card p-3">
    <h2>${data.title}</h2>
    <h5><i>Courtesy: NASA</i></h5>
    <img src=${data.url} alt=${data.title} class="img mb-3">
    <h5><i>Copyright: ${data.copyright}</i></h5>
    <h5>Date: ${data.date}</h5>
    <p class="mb-0">Explanation: ${data.explanation}</p>
    </div>`;

  card.innerHTML = html;
}

//fetching data from API
async function fetchAPI() {
  try {
    let res = await fetch(url);
    data = await res.json();
    console.log(data);
    renderData(data);
  } catch (err) {
    console.log(err);
  }
}

fetchAPI();
