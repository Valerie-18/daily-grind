/*
What we need to change:
Day of Week - day
Coffee Name - name
Coffee Pic - pic
Alt tag - alt
Coffee Description - desc
Color for coffee - color
*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//Use querry string
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{//Use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn = `
        <p>
            <img src="${coffee.pic}" alt=" ${coffee.alt}" id="coffee" />
            <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc}
        </p>
    `;

    return myReturn;

}

switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            color: "tan",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of caramel latte",
            day: "Sunday",
            desc: `Caramel me please1`
        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            color: "lilac",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "Bubble tea image",
            day: "Monday",
            desc: `Please don't burst my bubble!`
        };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            color: "grey",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of Cold Brew Coffee",
            day: "Tuesday",
            desc: `No funny busy give it to me straight!`
        };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
            color: "orange",
            name: "Black Drip Coffee",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            day: "Wednesday",
            desc: `Law and Order!`
        };
    break;

    case 4:
        today = "Thursday";

        coffee = {
            color: "purple",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of frappaccino",
            day: "Thursday",
            desc: `Taste me`
        };
    break;

    case 5:
        today = "Friday";

        coffee = {
            color: "green",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of Mocha",
            day: "Friday",
            desc: `I gotcha some mocha`
        };
    break;

    case 6:
        today = "Saturday";

        coffee = {
            color: "red",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of Pumpkin Spice Latte",
            day: "Saturday",
            desc: `Sugar and spice and everything nice!.`
        };
    break;

    
}

//console.log(urlParams);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//alert("Hi, it's " + today)

