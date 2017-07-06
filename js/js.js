$(document).ready(function(){
    var randomQuote;
    var randomNum;
    var rauthor;
    // getQuote();

function getQuote(){
    var quotes = ["quote0","quote1","quote2","quote3","quote4","quote5","quote6"];
    var author = ["author0","author1","author2","author3","author4","author5","author6"];
    
    randomNum = Math.floor(Math.random()*quotes.length);
    randomQuote = quotes[randomNum];
    rauthor = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(rauthor);
    
    }

    
    $("#tweet").on("click", function(){
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote + " " + rauthor);
        // window.open("https://twitter.com/intent/tweet?text=" + randomQuote));
    });

    console.log('https://twitter.com/intent/tweet?text=' + randomQuote);
    
    $("#new_quote").on("click", function(){
        getQuote();
        console.log('https://twitter.com/intent/tweet?text=' + randomQuote);
    });
});
