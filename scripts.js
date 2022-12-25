const RSS = 'https://anchor.fm/s/9435b1d4/podcast/rss'


let promise = fetch(RSS) 
let rssFile = ''
let output = ''
let audioURL = ''

const xhr = new XMLHttpRequest;
xhr.open('GET', RSS);

xhr.responseType = 'document';

xhr.overrideMimeType('text/xml');

xhr.onload = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        console.log(xhr.response, xhr.responseXML);
        rssFile = xhr.responseXML;
        podTitle.innerText = rssFile.querySelector('item title').innerHTML;
        console.log(rssFile.querySelector('item title'));
        audioURL = rssFile.querySelector('item link').innerHTML;
        console.log(audioURL);
    }
};

xhr.send()

const podTitle = document.querySelector('p')


