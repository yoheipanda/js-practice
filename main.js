window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#exec').addEventListener('click', function() {
        const val = document.querySelector('#input').value;
        const res = `文字数は${val.length}です`;

        // id="output" の要素を選択して結果を追加
        const elementOutput = document.querySelector('#output');
        const elementAdd = document.createElement('div');
        elementAdd.textContent = res;
        elementOutput.append(elementAdd);
    });
});
