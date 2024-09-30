const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: 'Bling Bling Bling',
        artist: '后海大鲨鱼',
        autoplay: true,
        volume: 0.1,
        url: '../js/src/后海大鲨鱼 - Bling Bling Bling.mp3',
        cover: '../js/src/cover.jpg',
        }]
});