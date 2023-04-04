let fetchedData;
fetch('http://localhost:3000/Movies')
.then((result) => result.json())
.then((result2) => {
 fetchedData = result2;
 console.log('results => ', result2);
//displaying data 
document.getElementById('root').innerHTML=data.card
let card = ""
data.forEach((Movies)=>{
console.log(Movies)
card +=  `<div class="banner-card">
<img src=${Movies.image} alt="https://i.ytimg.com/vi/32RAq6JzY-w/maxresdefault.jpg">
<div class="banner-text">
    <h4>${Movies.name}</h4>
</div>`})
console.log(card)
document.querySelector('.banner-card').innerHTML=card
console.log(data);  
})
//catching any errors that may occur
.catch(error => console.error(error));