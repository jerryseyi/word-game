import './app/css/app.css';
import {Randomize} from "./app/js/randomize.js";
import {InputWord} from "./app/js/inputword.js";
import axios from "axios";

(function () {
    let minutes = 120;
    let display = document.querySelector('#time');
    let borderTime = document.getElementById('border-time');
    let spanWords = document.getElementById('words');
    let random = new Randomize().vowel().consonant().word();
    let colors = ['white', 'blue', 'red'];
    let inputKey = document.getElementById('input-key');
    let input = new InputWord();
    let enterBtn = document.getElementById('enter-btn');

    function startTimer(duration = 120, display) {
        let timer = duration;
        let minutes;
        let seconds;

        let x = setInterval(function () {

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);


            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (timer < 30) {
                borderTime.classList.add('border-2', 'border-red');
            }

            if (--timer < 0) {
                clearInterval(x);
            }

        }, 1000);
    }

    function populate() {
        for (let i = 0; i < random.length; i++) {
            // "bg-white px-3 py-3 inline-block text-xl transition ease-in-out duration-1000"
            const node = document.createElement('span');
            const bg = Math.floor(Math.random() * 3);
            node.innerText = random[i].toUpperCase();
            if (bg > 0) {
                node.classList.add('bg-' + colors[bg], 'px-3', 'py-3', 'text-white', 'inline-block', 'text-xl', 'transition', 'ease-in-out', 'duration-1000', 'mr-1');
            } else {
                node.classList.add('bg-' + colors[bg], 'px-3', 'py-3', 'inline-block', 'text-xl', 'transition', 'ease-in-out', 'duration-1000', 'mr-1');
            }
            spanWords.appendChild(node);
        }
    }

    startTimer(minutes, display);
    populate();


    inputKey.addEventListener('keydown', (event) => {

        if ((input.isAlphabet(event.key) && input.isFound(event.key, random) && (compare(event.key) === false)) || event.key === 'Backspace' ) {
            input.noRepetition(event.key);

        } else {
            event.preventDefault();
        }
    });

    function compare(char) {
        let item1 = random.filter((item) => item === char).length;
        let item2 = input.enteredKey.filter((item) => item === char).length

        return item1 === item2;
    }

    enterBtn.addEventListener('click', (event) => {
        if (input.isFound(inputKey.value, input.valid)) return;

        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputKey.value}`)
            .then((res) => {
                console.log(res.data);
                input.valid.push(inputKey.value);
            })
            .catch((err) => console.log(err.response.data.title));

        input.enteredKey = [];
    });


})()