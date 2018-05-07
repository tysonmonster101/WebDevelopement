var galleryImages;
var nameOfImage;
var imageDescription;
var namesOfImages = ["firstImage","secondImage","thirdImage","fourthImage","fifthImage","sixthImage","seventhImage"];
var imageDescriptions = ["first description is awesome",
                         "second description is awesome",
                         "third description is awesome",
                         "fourth description is awesome",
                         "fifth description is awesome",
                         "sixth description is awesome",
                         "seventh description is awesome"];


$(".gallery").click(function()
{
    var  thisGallery = $(this);
    thisGallery.css("width","250px");
    thisGallery.css("height","250px");
    for(var i=0; i < galleryImages.length; i++)
    {
        if($(galleryImages[i]).css("width") == "250px" && $(galleryImages[i]).attr("src") != $(thisGallery).attr("src"))
        {
            $(galleryImages[i]).css("width","150px");
            $(galleryImages[i]).css("height","150px");
        }
        if($(galleryImages[i]).attr("src") == $(thisGallery).attr("src"))
        {
            $(nameOfImage).html(namesOfImages[i].toString());
            $(imageDescription).html(imageDescriptions[i].toString());
        }
    }
});

$(document).ready(function()
{
    galleryImages = $(".gallery");
    nameOfImage = $("#nameOfImage");
    imageDescription = $("#descriptionText");
    var incrementAmount = screen.width/galleryImages.length;

    for (var i = 0; i < galleryImages.length/2; i++)
    {
        $(galleryImages[i]).css("z-index",i);
    }
    for (var i = 0; i < galleryImages.length/2 + 1; i++)
    {
        $(galleryImages[galleryImages.length - i]).css("z-index",i);
    }
});
