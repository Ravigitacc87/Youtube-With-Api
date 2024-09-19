var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".maincontainer");
var cards = document.querySelector(".card"); 
var smcards = document.querySelector("#card"); 

menuIcon.onclick = function() {
    sidebar.classList.toggle("smaller-sidebar");
    mainContainer.classList.toggle("larger-maincontainer");
  
    var firstCard = document.querySelector(".card"); 
    var firstInfo = document.querySelector(".video-information"); 

    if (firstCard) {
        firstCard.classList.toggle("smaller-card");
    }

    if (firstInfo) {
        firstInfo.classList.add("video-information-smaller");
        firstInfo.classList.remove("video-information");
    }
};
  

let api_key = "AIzaSyCw4wGNI7tm8lgmqMgKsJn8HVQeXmYWoS8";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";


fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 200,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
};

const makeVideoCard = (data) => {
    cards.innerHTML += `<a href="https://youtube.com/watch?v=${data.id}">
                            <div class="thumbnailcaintainer">
                                <img src="${data.snippet.thumbnails.high.url}">
                            </div>
                            <div class="detailcontainer d-flex">
                                <div class="logocontainer">
                                    <img src="${data.channelThumbnail}">
                                </div>
                                <div class="video-information">
                                    <h2 class="video-title">${data.snippet.title}</h2>
                                    <p class="channel-name">${data.snippet.channelTitle}</p>
                                </div>
                            </div>
                        </a>`
        };

        searchBtn.addEventListener('click', () => {
            if(searchInput.value.length){
                location.href = searchLink + searchInput.value;
            }
        })

      