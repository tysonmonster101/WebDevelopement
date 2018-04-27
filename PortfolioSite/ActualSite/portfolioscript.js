var galleryImages;

$(document).ready(function()
{
    galleryImages = $(".gallery");
    var incrementAmount = screen.width/galleryImages.length;
    alert(screen.width);
    alert(incrementAmount);
    
    for (var i = 0; i < galleryImages.length; i++)
    {
        $(galleryImages[i]).css("width","100px");
        $(galleryImages[i]).css("zIndex",i.toString());
        $(galleryImages[i]).css("left",(incrementAmount * i).toString());
        //galleryImages[i].style.width = "10px";
    }
    //$("#trash").style.backgroundColor = "red";
    alert("done");
});
