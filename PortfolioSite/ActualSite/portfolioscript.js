var galleryImages;
var nameOfImage;
var imageDescription;
var zPositions;
var imageCount;
var leftOffset;
var imageSize = "150px";
var focusedImageSize = "250px";
var namesOfImages = ["C#","C++","ATMIS","Linux","Ruby","Seek","Unity"];
var imageDescriptions = ["This is my favorite programming language. I have made lots of programs such as my CPUOptimizer that allows you to mass modify affinity levels. I have been learning and using C# for 3.5 years now",
                         "I love this language. I particularlly like to mess with the windows api and am currently working on a window dimmer. I have been learning and using C++ for 2 years now",
                         "This was my first app/game I have ever fully finished and published. https://play.google.com/store/apps/details?id=com.tysonthedev.AllThatMattersIsSPEED",
                         "I have around a year of experience with Ubuntu(mainly terminal). I have learned to manage permissions and write scripts in BASH.",
                         "I love this languages flexibility. I have written a couple webscrapers using Ruby and it is by far the best when it comes to webscraping and flexibility. I have been learning and using ruby for 6 months.",
                         "Seek is where I am currently employed making Augmented Reality Experiences and extending their SDK. I have been employed for a month now.",
                         "Unity is my favorite game engine and I have been learning and using it for 3.5 years now"];


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
    nameOfImage = $(".nameOfImage");
    imageDescription = $(".descriptionText");
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
    $(galleryImages[(imageCount - 1)/2]).click();
});
