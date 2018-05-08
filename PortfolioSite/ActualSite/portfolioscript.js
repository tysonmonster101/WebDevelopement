var galleryImages;
var nameOfImage;
var imageDescription;
var zPositions;
var imageCount;
var leftOffset;
var imageSize = "150px";
var focusedImageSize = "250px";
var namesOfImages = ["firstImage","secondImage","thirdImage","fourthImage","fifthImage","sixthImage","seventhImage"];
var imageDescriptions = ["first description is awesome",
                         "second description is awesome",
                         "third description is awesome",
                         "fourth description is awesome",
                         "fifth description is awesome",
                         "sixth description is awesome",
                         "seventh description is awesome"];


function fixZIndex()
{
    for(var i=0; i < galleryImages.length; i++)
    {
        $(galleryImages[i]).css("z-index", $(galleryImages[i]).css("z-index") + imageCount);
    }
}

$(".gallery").click(function()
{
    var  thisGallery = $(this);
    for(var i=0; i < galleryImages.length; i++)
    {
        if($(galleryImages[i]).attr("src") == $(thisGallery).attr("src"))
        {
            zPositions = [];
            var distanceFromCenter = Math.abs(i - galleryImages.length/2);
            for(var a=i; a < galleryImages.length; a++)
            {
                zPositions[a] = imageCount - a;
            }
            for(var b=0; b < i; b++)
            {
                zPositions[b] = b;
            }
            if(i < galleryImages.length/2)
            {
                leftOffset = distanceFromCenter * 100 - 25;
            }
            else if(i > galleryImages.length/2)
            {
                leftOffset = distanceFromCenter * -100 - 25;
            }
            else
            {
                leftOffset = 25;
            }
        }
    }
    if($(thisGallery).css("width") > imageSize) return;
    thisGallery.animate
    ({
        left: leftOffset,
        width: focusedImageSize,
        height: focusedImageSize,
        zIndex: imageCount
    });
    for(var i=0; i < galleryImages.length; i++)
    {
        if($(galleryImages[i]).attr("src") != $(thisGallery).attr("src"))
        {
        $(galleryImages[i]).animate
        ({
            left: leftOffset,
            width: imageSize,
            height: imageSize,
            zIndex: zPositions[i]
        });
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
    $("#portfolio").css("height",focusedImageSize);
    imageCount = galleryImages.length;
    for (var i = 0; i < galleryImages.length/2; i++)
    {
        $(galleryImages[i]).css("z-index",i);
    }
    for (var i = 0; i < galleryImages.length/2 + 1; i++)
    {
        $(galleryImages[galleryImages.length - i]).css("z-index",i);
    }
        fixZIndex();
});
