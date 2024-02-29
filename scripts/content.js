var fullImage = document.getElementsByClassName("max-h-full", "max-w-full")[0];
var postImage = document.getElementById("post-image");
var lightBoxImage = document.getElementsByClassName("media-lightbox-img")[0];

if (fullImage) 
{
  if (fullImage.src.includes("preview.redd.it"))
  {
    fullImage.src = fullImage.src.replace("preview.redd.it", "i.redd.it");
  }
}

if (postImage) 
{
    if (postImage.src.includes("preview.redd.it"))
    {
        postImage.src = postImage.src.replace("preview.redd.it", "i.redd.it");
        postImage.srcset = postImage.src.replace("preview.redd.it", "i.redd.it");
    }
}

if (lightBoxImage) 
{
    if (lightBoxImage.src.includes("preview.redd.it"))
    {
        lightBoxImage.src = lightBoxImage.src.replace("preview.redd.it", "i.redd.it");
        lightBoxImage.srcset = lightBoxImage.src.replace("preview.redd.it", "i.redd.it");
    }
}