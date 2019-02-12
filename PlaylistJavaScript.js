// JavaScript File
/*global $*/
console.log("hello");
var songnames = ["Casio"];


var artistnames = ["Jungle"];


var imagelinks = ["https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F4bbe1cebdc73d369f2df61c722d6dc9e.1000x1000x1.jpg"];


var songlinks = ["https://www.youtube.com/watch?v=7nJRGARveVc"];


$("#add").click(function() {
    $("#songlist").html("");
    $("#artistlist").html("");
    $("#imagelist").html("");
    $("#videolist").html("");
    songnames.push($("#Song").val());
    artistnames.push($("#Artist").val());
    imagelinks.push($("#Image").val());
    songlinks.push($("#Video").val());
    loadsongs();
});
loadsongs();

function loadsongs() {
    songnames.forEach(function(name) {
        $("#songlist").append("<div class='name'>" + name + "</div>");
    });
    artistnames.forEach(function(artist) {
        $("#artistlist").append("<div class='artist'>" + artist + "</div>");
    });
    imagelinks.forEach(function(image) {
        $("#imagelist").append("<div class='image'>" + "<img src='" + image + "'>" + "</div>");
    });
    songlinks.forEach(function(song) {
        $("#videolist").append("<div class='video'>" + "<a target='_blank' href='" + song + "'>" + "Song Link</a>" + "</div>");
    });
    console.log(songnames, artistnames, imagelinks, songlinks);
}
