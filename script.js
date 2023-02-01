console.log("Script is running...")

const ratingEls = document.querySelectorAll(".rating");      //targeting all rating elements
const container = document.getElementById("container");
const btn = document.getElementById("btn");
let ratingCont = '';

ratingEls.forEach((ratingEl) => {                           //Iterating each rating element
    ratingEl.addEventListener("click", (e) => {        //Adding event listener    
        // console.log(action.target.innerText || action.target.parentElement.innerText);  //targeting inner text and parent element 
        // console.log(action.target.parentElement.innerText);      //Works same as above
        removeActive();                                             //Removes style from the rating emojis after clicking another
        ratingCont = e.target.parentElement.innerText;
        // action.target.classList.add("active");                      
        e.target.parentElement.classList.add("active");        //targeting parent element and add style to it
        
        console.log(ratingCont)
        
    })
})


btn.addEventListener("click", () => {                           //event listener for send reviw button
    if(ratingCont !== ''){
        container.innerHTML = `                                 
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${ratingCont}</strong>
        <p>We'll use your feedback to improve
        our customer support</p>
        `
    }
})

function removeActive() {                                           //To remove hover effect of selected emoji
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}

