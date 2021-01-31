function playJazz() {
    // unhide the p container
    document.getElementById("video-container").style.display = "block";

    //add the source to the iframe (autoplaying YouTube video; originally uww2R-Cql1o but changed due to embed permissions)
    var video = document.getElementById("video");
    video.setAttribute("src","https://www.youtube.com/embed/BFmH7moCL2c?autoplay=1");

    //scroll to just above the video

    videoPosition = video.getBoundingClientRect().top;

    window.scrollTo({
         top: videoPosition - 10,
         behavior: "smooth"
    });
}
