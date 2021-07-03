var mydata = JSON.parse(movies);

var text = "" ; // text file for storing the content data written into  <div class="container"> 

text +=`<div class="row">` // overall row for the content styling to make it prsponsive

for (let val of mydata) {   // loop to fill the text with the html + data
    text += `
            <div class="col-12 col-sm-6 col-m-4 col-lg-4 mb-3 big-col">
                <div class="card bg-dark" >
                    <div class="row g-0">
                        <div class="col-5">
                            <img src="${val.image}" class="img-fluid " >
                        </div>
                        <div class="col-7 d-flex align-items-stretch">
                            <div class="card-body ">
                                <div>
                                    <h6 class="card-title text-white ">${val.movieName}</h6>
                                    <p class="card-text  text-muted ">${val.description}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="card-text d-flex justify-content-end text-warning fs-5 rate-style">
                        <span class="like">Like </span>
                        <span class="rating" >&#128077</span>
                        <span class="bg-warning text-white rate">${val.likes}</span>
                </div>
            </div>
`}

text+= `</div>`;

document.getElementById("container").innerHTML = text; // write the html into the  <div class="container">  tag


var showRating = document.getElementsByClassName("rate"); // get an arry in order to find the right place where to show the rating
var rating = document.getElementsByClassName("rating"); // get an arry of buttons to trigger the rate function

for(let i = 0; i < rating.length; i++) {
    rating[i].addEventListener("click", function(){rate(i)});  // add an event listener to the rating buttons
} 

function rate(index){
    var newNumber = Number(showRating[index].innerHTML) + 1;  // get the actual rating number of the element +1 and store it in a variable
    showRating[index].innerHTML = newNumber; //  write the number back to show the increased value
    mydata[index].likes = newNumber; /// update the Json Object with the same value 
}

document.getElementById("sort").addEventListener("click",sort);  // add an event listener to the sort button to trigger the sort function

function sort(){                        // function to sort the Jason Object mydata accoring to the likes
    mydata.sort(function(a, b){
        return b.likes - a.likes;});
    
    var text = "" ;

    text +=`<div class="row">`
        
        for (let val of mydata) {
            text += `
            <div class="col-12 col-sm-6 col-m-4 col-lg-4 mb-3 big-col">
                <div class="card bg-dark" >
                    <div class="row g-0">
                        <div class="col-5">
                            <img src="${val.image}" class="img-fluid ">
                        </div>
                        <div class="col-7 d-flex align-items-stretch">
                            <div class="card-body ">
                                <div>
                                    <h6 class="card-title text-white ">${val.movieName}</h6>
                                    <p class="card-text  text-muted ">${val.description}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="card-text d-flex justify-content-end text-warning fs-5 rate-style">
                        <span class="like">Like </span>
                        <span class="rating" >&#128077</span>
                        <span class="bg-warning text-white rate">${val.likes}</span>
                </div>
            </div>
        `}
        
    text+= `</div>`;
        
document.getElementById("container").innerHTML = text;  // overwriting the inner HTML of the <div class="container">  tag with the sortet sequence

var showRating = document.getElementsByClassName("rate"); // get the new arrays, add event listeners to buttons  and so on ... :)
var rating = document.getElementsByClassName("rating");

for(let i = 0; i < rating.length; i++) {
    rating[i].addEventListener("click", function(){rate(i)});
} 

function rate(index){
    var newNumber = Number(showRating[index].innerHTML) + 1;
    showRating[index].innerHTML = newNumber;
    mydata[index].likes = newNumber;
}

document.getElementById("sort").addEventListener("click",sort);
        
}






