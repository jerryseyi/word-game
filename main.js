import {InputWord} from "./app/js/inputword.js";

(function () {

    let startBtn = document.getElementById('startBtn');
    let closeBtn = document.getElementById('closeBtn');
    let submitBtn = document.getElementById('submitBtn');
    let username = document.getElementById('username');

    startBtn.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
    submitBtn.addEventListener('click', submit);

    function toggleModal() {
        return document.getElementById('form-section').classList.toggle('hidden');
    }

    function submit() {
        if (username.value === '') return;

        localStorage.setItem('username', username.value);
        return location.href = 'play.html';
    }
})();