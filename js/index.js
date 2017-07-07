$(document).ready(function(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
function getQuote(){

    $.getJSON(url, function(data){
       $(".quote").html('"'+data.quoteText+'"');
       $(".author").html(' - '+data.quoteAuthor);
       console.log(data);
    });
}

    // $("#new_quote").on("click", function(){
    $("#new_quote").click(function(){
        getQuote();
    });
    
    $("#tweet").on("click", function(){
        $.getJSON(url, function(data){
        if(!data.quoteAuthor){
            data.quoteAuthor = "unknown";
        }
        window.open("https://twitter.com/intent/tweet?text=" + data.quoteText + ' - Author:  '+ data.quoteAuthor, "_self");
        });
    });
});
