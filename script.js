const txtInput = document.querySelector('#txt-input');
const btnTranslate = document.querySelector('#btn-translate');
const outputDiv = document.querySelector('#txt-output');

const serverURL = "https://api.funtranslations.com/translate/valyrian.json";
const encodedURL = encodeURI(serverURL);

const link = encodeURI('https://fun-translation-got-api.glitch.me/');
const msg = encodeURIComponent('I learned Valyrian here!');
const title = encodeURIComponent('Article or Post Title Here');
const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;
const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=GOT`;
const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;

function getTranslationURL(text) {
    return encodedURL + "?" + "text=" + text
}

function errorHandler(error) {
    alert("Server is not responding currently! Try again after some time.");
}

function clickHandler() {
    const inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);