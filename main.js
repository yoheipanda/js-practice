window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#exec').addEventListener('click', function() {
        const valueH = document.querySelector('#inputH').value;
        const valueW = document.querySelector('#inputW').value;

        const h = Number.parseInt(valueH) / 100;    // メートルに直す
        const w = Number.parseInt(valueW);

        // BMIを計算する
        let bmi = w*(h*h);

        const html = `<div class="item">BMI <b>${bmi}</b></div>`;
        document.querySelector('#output').innerHTML = html;
    });
});
