let fetchedData;
fetch('http://localhost:3000/Movies')
.then(response => response.json())
  .then(data => {
    console.log(data);
//displaying data 
document.getElementById('root').innerHTML=data.card
let card = ""
data.forEach((Movies)=>{
console.log(Movies)
card +=  `<div class="banner-card">
<img src=${Movies.image} alt="https://i.ytimg.com/vi/32RAq6JzY-w/maxresdefault.jpg">
<div class="banner-text">
    <h4>${Movies.name}</h4>
</div>`
card += `<div class="rating">
  <input type='radio' hidden name='rate' id='rating-opt5' data-idx='0'>	
  <label for='rating-opt5'><span>Very satisfied</span></label>

  <input type='radio' hidden name='rate' id='rating-opt4' data-idx='1'>
  <label for='rating-opt4'><span>Somewhat satisfied</span></label>

  <input type='radio' hidden name='rate' id='rating-opt3' data-idx='2'>
  <label for='rating-opt3'><span>Neutral</span></label>

  <input type='radio' hidden name='rate' id='rating-opt2' data-idx='3'>
  <label for='rating-opt2'><span>Dissatisfied</span></label>

  <input type='radio' hidden name='rate' id='rating-opt1' data-idx='4'>
  <label for='rating-opt1'><span>Very Dissatisfied</span></label>
</div>`})

const search = () =>{
  const searchbox = document.getElementById("searchIcon").value.toUpperCase();
  const movies = document.getElementById("banner-card")
  const product = document.querySelectorAll(".banner-text")
  const moviename = document.getElementsByTagName("h4")

  for(var i=0; i < moviename.length; i++){
    let match = movies[i].getElementsByTagName('h')[0];

    if(match){
      let textvalue = match.textContent  || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}

//ul.addEventListener('click', (event)=> {
  //if(event.target.tagName --- 'button') {
    //const button = event.target;
    //const li = button.parentNode;
    //const ul = li.parentNode;
    //if(button.textContent === 'remove') {
      //ul.removeChild(li)
    //}
  //}
//})

console.log(card)
document.querySelector('.banner-card').innerHTML=card
console.log(data);  
})
//catching any errors that may occur
.catch(error => {
    console.error(error);
  });