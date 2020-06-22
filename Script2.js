function jsonFile(file, callback) {
    var ajaxCall = new XMLHttpRequest();
    ajaxCall.overrideMimeType("application/json");
    ajaxCall.open("GET", file, true);
    ajaxCall.onreadystatechange = function () {
        if (ajaxCall.readyState === 4 && ajaxCall.status == "200") {
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}
jsonFile("data.json", function (text) {
    var data = JSON.parse(text);
    console.log(data.mydata);
    details(data.details);
    arrData(data.mydata);
})


var body = document.querySelector("#root");
console.log(body);
//get the section tag
var main = document.createElement("section");
//add classname to section
main.classList.add("container");
//append main section to body tag
body.appendChild(main);
//create article1 or card1
var article1 = document.createElement("article");
//setAttribute is generic of classList.Using setAttribute,we can add class or id to an element
article1.setAttribute("class", "article1");
main.appendChild(article1);
//create image
var image = document.createElement("img");
image.src = "./jerry.jpg";
image.alt = "Profile image";
article1.appendChild(image);
//create a function to get the object data
function details(mydetails) {
    //create element for get the object name
    var h2 = document.createElement("h2")
    h2.textContent = mydetails.name;
    h2.style.color = "red";
    article1.appendChild(h2);
    //create h4 tag for email
    let email = document.createElement("h4");
    email.textContent = mydetails.email;
    article1.appendChild(email);
    //create h4 tag for mobile
    let mobile = document.createElemnt("h4");
    mobile.textContent = mydetails.mobile;
    article1.appendChld(mobile);
    //ankle tag creation
    let btn = document.createElement("a");
    btn.textContent = "profile";
    btn.href = "#";
    btn.style.textDecoration = "none";
    article1.appendChild(btn);
}
function arrData(arrdetails) {
    for (i in arrdetails) {
        let article1 = document.createElement("article");
        //setAttribute is generic of classList.Using setAttribute,we can add class or id to an element
        article1.setAttribute("class", "article2");
        main.appendChild(article1);
        //create image
        var image = document.createElement("img");
        image.src = "./jerry.jpg";
        image.alt = "Profile image";
        article1.appendChild(image);
        //create element for get the object name
        let h2 = document.createElement("h2")
        h2.textContent = arrdetails[i].name;
        h2.style.color = "red";
        article1.appendChild(h2);
        //create h4 tag for email
        let email = document.createElement("h4");
        email.textContent = arrdetails[i].email;
        article1.appendChild(email);
        //create h4 tag for mobile
        let mobile = document.createElemnt("h4");
        mobile.textContent = arrdetails[i].mobile;
        article1.appendChld(mobile);
        //ankle tag creation
        let btn = document.createElement("a");
        btn.textContent = "profile";
        btn.href = "#";
        btn.style.textDecoration = "none";
        article1.appendChild(btn);

    }
}
















//create line
/*article1.appendChild(document.createElement("hr"));
//h2 for name
var name1 = document.createElement("h2");
//textContent is to add some content between tags
name1.textContent = "Krishna";
article1.appendChild(name1);
//create email
var email1 = document.createElement("p");
email1.textContent = "xyz@gmail.com";
article1.appendChild(email1);
//create mobile
var mobile1 = document.createElement("p");
mobile1.textContent = "123456789";
article1.appendChild(mobile1);



    //create article2
var article2 = document.createElement("article");
//setAttribute is generic of classList.Using setAttribute,we can add class or id to an element
article2.setAttribute("class", "article2");
main.appendChild(article2);
//create image
var image = document.createElement("img");
image.src = "G:\ReactJSDemo\html\SecondApp\tom and jerry.jpg";
image.alt = "Profile image";
article2.appendChild(image);
//create line
article2.appendChild(document.createElement("hr"));
//h2 for name
var name2 = document.createElement("h2");
//textContent is to add some content between tags
name2.textContent = "Radha";
article2.appendChild(name2);
//create email
var email2 = document.createElement("p");
email2.textContent = "xyz@gmail.com";
article2.appendChild(email2);
//create mobile
var mobile2 = document.createElement("p");
mobile2.textContent = "123456789";
article2.appendChild(mobile2);*/
