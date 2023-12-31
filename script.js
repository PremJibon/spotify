console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
//audioElement.play();
let songs = [
    {songName: "Warriyo -Mortals",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName: "Cielo - Huma-Huma",filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName: "DEAF KEV",filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName: "Different Heaven",filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName: "Janji-Heroes-Tonight",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName: "Rabba ",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName: "Salamasdfaq",filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName: "Saadsfshq",filePath:"songs/8.mp3",coverPath:"cover/8.jpg"},
    {songName: "Saasdfasdf-Ishq",filePath:"songs/9.mp3",coverPath:"cover/9.jpg"},
    {songName: "Salam-e-Ishq",filePath:"songs/10.mp3",coverPath:"cover/10.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
    
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})