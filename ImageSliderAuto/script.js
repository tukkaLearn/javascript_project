const imagesData = [
  {
    link: "https://st.depositphotos.com/36924814/56285/i/450/depositphotos_562858084-stock-photo-dot-blue-wave-light-screen.jpg",
    tag: "Tukka Projects",
    title: "Wave of Blue Light",
    description: "Stylish layouts using CSS ",
  },
  {
    link: "https://img.freepik.com/premium-photo/background-concept-with-abstract-data-design_327072-25004.jpg",
    tag: "Tukka Learn",
    title: "Sky Blue Background",
    description: "Sky blue background with smooth transitions",
  },
  {
    link: "https://img.freepik.com/premium-photo/background-concept-with-abstract-data-design_327072-24787.jpg",
    tag: "Tukka Projects",
    title: "Creative Modern UI ",
    description: "Stylish layouts with smooth transitions ",
  },
];

const slider = document.querySelector("#slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let index = 0;

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= imagesData.length) {
    index = 0;
  }
  createSlide();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = imagesData.length - 1;
  }
  createSlide();
});

function createSlide() {
  slider.innerHTML = `<div class="slide">
    <img src=${imagesData[index].link} alt=${imagesData[index].title}/>
    <div class="overlay">
      <div class="content">
        <span class="tag">${imagesData[index].tag}</span>
        <h2>${imagesData[index].title}</h2>
        <p>${imagesData[index].description}</p>
      </div>
    </div>
  </div>`;
}

setInterval(() => {
  index++;
  if (index >= imagesData.length) {
    index = 0;
  }
  createSlide();
}, 3000);

createSlide();
