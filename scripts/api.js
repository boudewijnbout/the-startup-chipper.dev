const baseUrl = "https://chipr.api.fdnd.nl/v1/project";
const wrapper = document.querySelector(".customers-cards-wrapper-sticky")


fetch(baseUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    renderData(data.data)
  });

function renderData(data){
  
}