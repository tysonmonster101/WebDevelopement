var galleryImages;

$(".gallery").click(function()
{
    var targetZIndex = $(this).css("z-index");
    $(this).animate()
    alert($(this).css("z-index"));
});

$(document).ready(function()
{
    galleryImages = $(".gallery");
    var incrementAmount = screen.width/galleryImages.length;

    for (var i = 0; i < galleryImages.length/2; i++)
    {
        //$(galleryImages[i]).css("width","100px");
        $(galleryImages[i]).css("z-index",i);
        //galleryImages[i].style.width = "10px";
    }
    for (var i = 0; i < galleryImages.length/2 + 1; i++)
    {
        //$(galleryImages[i]).css("width","100px");
        $(galleryImages[galleryImages.length - i]).css("z-index",i);
        //galleryImages[i].style.width = "10px";
    }
    //$("#trash").style.backgroundColor = "red";
    alert("done");
});
