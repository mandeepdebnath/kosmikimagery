const card = document.querySelector(".wrapper");
let data = {};
const todayDate = new Date();
const todayDateFormatted = formatTodayDate(todayDate);
const yesterdayDate = yesterdayDateFormatted(todayDate);
console.log(yesterdayDate);

yesterdayUrl = `https://api.nasa.gov/planetary/apod?api_key=yVvbu3sZGFcknM4DgxMDdFhgnN9tfyh3YEOROveA&date=${yesterdayDate}`;

function formatTodayDate(dateObject) {
  const parts = {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth() + 1,
    day: dateObject.getDate(),
  };

  return `${parts.year}-${parts.month}-${parts.day}`;
}

function yesterdayDateFormatted(dateObject) {
  const parts = {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth() + 1,
    day: dateObject.getDate(),
  };

  return `${parts.year}-${parts.month}-${parts.day - 1}`;
}

async function renderData(data) {
  let html = `<div class="pic-card p-3">
    <div class="card-el mb-4">
    
    <h2>${data.title}</h2>
    <h5><i>Copyright: ${data.copyright}</i></h5>
    </div>
      <img src=${data.url} alt=${data.title} loading="lazy" class="img mb-4">
      <div class="card-el mb-4">
      <h5 class="mb-2">Date: ${data.date}</h5>
      <p class="mb-0">${data.explanation}</p>
      </div>
      </div>`;

  card.innerHTML = html;
}

//fetching data from API
async function fetchYesterdayData() {
  try {
    let res = await fetch(yesterdayUrl);
    data = await res.json();
    console.log(data);
    renderData(data);
  } catch (err) {
    console.log(err);
  }
}

fetchYesterdayData();
console.log(yesterdayDate);
