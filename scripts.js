document.getElementById('clickButton').addEventListener('click', function() {
    let clickResult = document.getElementById('clickResult');
    clickResult.textContent = 'Button was clicked!';
    clickResult.style.color = '#ff6f61';
    clickResult.classList.add('show');

    let surpriseBox = document.getElementById('surpriseBox');
    surpriseBox.style.display = 'block';
    setTimeout(function() {
        surpriseBox.style.display = 'none';
    }, 3000);
});

document.getElementById('textInput').addEventListener('input', function() {
    let inputText = document.getElementById('textInput').value;
    let inputResult = document.getElementById('inputResult');
    inputResult.textContent = 'You typed: ' + inputText;
    inputResult.style.color = '#ff6f61';
    inputResult.classList.add('show');
});
