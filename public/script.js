
// creating a HTML Element named video_grid
const videoGrid = document.getElementById('video-grid');

// Creating a HTML Element named my_Video
const my_video = document.createElement('video');

// .muted is used for muting own audio
my_video.muted = true;

// Globally declaring video_Conference
let video_Conference


// Javascript API function to access Media fo the user (Video and Audio)
// Video and Audio are set true to access
// creating promise using .then
// If the user allows the access to the Video and Audio
// We will be starting the Video Conference

navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
}).then(stream =>{
    video_Conference = stream;
    adding_video(my_video, stream);

})


// Creating a function adding_video
const adding_video = (video, stream) =>{
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', ()=>{
        video.play();
    })
    videoGrid.append(video);
}