const popularTag = ["nature", "landscape", "mountain", "animals", "island"];
const buttonNum = [0,1,2,3];
let randomPopular = [];
let randomBtn = [];

const listData = document.getElementById("list-data");
const buttonOne = document.getElementById("firstButton");
const buttonTwo = document.getElementById("secButton");
const buttonThree = document.getElementById("thirdButton");
const buttonFour = document.getElementById("forthButton");

var codes = randomOne();
randomButton(codes[0], codes[1], codes[2], codes[3]);
getTerm(randomTag());


function randomOne() {

    let i = buttonNum.length;
    let index;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomBtn.push(buttonNum[index]);
        buttonNum.splice(index,1);
    }
    console.log(randomBtn);

    return [randomBtn[0], randomBtn[1], randomBtn[2], randomBtn[3]]
}

function randomButton(randomNum, randomNum2, randomNum3, randomNum4){

    let i = popularTag.length;
    let index = 0;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomPopular.push(popularTag[index]);
        popularTag.splice(index,1);
    }
    console.log(randomPopular);
    console.log("Button Index: ", randomPopular[0]);

    buttonOne.innerHTML = randomPopular[randomNum];
    buttonTwo.innerHTML = randomPopular[randomNum2];
    buttonThree.innerHTML = randomPopular[randomNum3]; 
    buttonFour.innerHTML = randomPopular[randomNum4];
}


function randomTag() {
    let i = popularTag.length;
    let index = 0;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomPopular.push(popularTag[index]);
        popularTag.splice(index,1);
    }
    console.log("Picture Index: ", randomPopular[0]);
    
    return randomPopular[0];
};


function getTerm(tagName) {
    fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=3ZZjiejGpvmRmlsEwphrVIlXJgVifeCgHcByh1Qk6EbdQWRjHZ")
    .then(function(response){
        return response.json();
    })
    .then(function(result){

        listData.innerHTML = "";
        
        const items = result.response;

        for(let i = 0; i < items.length; i++){
            const item = items[i]; // let item receive everything in items[i]

            if(item.photos != undefined){

                const altSize = item.photos[0].alt_sizes; // take photos in alt_sizes section and named it as altSize
                const ImgSrc = altSize[altSize.length - 3].url; // take the index of the images in url section
     
                const img = document.createElement("img");
                img.src = ImgSrc;
                
                const li = document.createElement("li");
                li.appendChild(img);
     
                listData.appendChild(li);
            }
           
        }
        
    })

}



buttonOne.onclick = function(){


    if(buttonOne.innerHTML==randomPopular[0]){

        alert("Congratulations");        

    }
    else{
       
        alert("Ooops! You're wrong.");
        
    }
    location.reload();
} 

buttonTwo.onclick = function(){

    if(buttonTwo.innerHTML==randomPopular[0]){

        alert("Congratulations");        

    }
    else{
       
        alert("Ooops! You're wrong.");
        
    }
    location.reload();
} 

buttonThree.onclick = function(){

    if(buttonThree.innerHTML==randomPopular[0]){

        alert("Congratulations");        

    }
    else{
       
        alert("Ooops! You're wrong.");
        
    }
    location.reload();
} 

buttonFour.onclick = function(){

    if(buttonFour.innerHTML==randomPopular[0]){

        alert("Congratulations");        

    }
    else{
       
        alert("Ooops! You're wrong.");
        
    }
    location.reload();
} 

