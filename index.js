console.log('Hello World');
var restUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
var apiKey ='AIzaSyCWNVo0SiKpnjAAqizKCi9fTeubrkunRG0';
var input = "Tolkien";
var radioSelect = "";
var book;
let searched;
let results = [];




/*
function setup(){
    var button = select('#submit');
    button.mousePressed(getSearch);

    input = select('#search');
}
*/

document.getElementById("search").addEventListener("input", userInput);

function userInput(){
    input = document.getElementById("search").value;
    url = restUrl + input + '&' + apiKey;
}

function getSearch(){
    if(document.getElementById("authorSearch").checked ){
        radioSelect = "inauthor:";
    }
    else if(document.getElementById("titleSearch").checked){
        radioSelect = "intitle:";
    }
    else{
        radioSelect = "";
    }
    var url = restUrl + radioSelect + input + '&' + apiKey;
    console.log(url);
    fetch(url)
    .then(Response =>{
        return Response.json();
    })
    .then(searched=>{
        results = searched.items;
        if(results){
            var titles = "";
            
    for(var i = 0; i < results.length; i++){
        var target = "BookPage/" + results[i].id + ".html";
        titles +=  "<li>" + "<a href=" + target + ">" + results[i].volumeInfo.title + "</a>" + "</li>";
    }
    document.getElementById("bookList").innerHTML = titles;
            console.log(results[0].volumeInfo.title);
            
        }
        else{
            console.log("Book not Found");
        }

       
    });
    
}

function filterResults(){
    console.log(Hello);
    var titles = "";
    for(var i = 0; i < results.length; i++){
        
        titles +=  "<li>" + results[i].volumeInfo.title + "</li>";
    }
    document.getElementById("bookList").innerHTML = titles;
}


