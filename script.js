function changePage(pageName) {
    var mainContent = document.getElementById('mainContent');
    var labsButtons = document.querySelectorAll('#LabsButtons button');

    // Знайти натиснуту кнопку за pageName
    var pressedButton = Array.from(labsButtons).find(function (btn) {
        return btn.onclick && btn.onclick.toString().includes(pageName);
    });

    // Зняти попередню натиснутість з усіх кнопок
    labsButtons.forEach(function (btn) {
        btn.classList.remove('pressed');
        // Зняти стилі з попередньої натиснутої кнопки
        btn.style.backgroundColor = '#D9D9D9';
        btn.style.color = '#000000';
    });

    // Додати клас "pressed" до нової натиснутої кнопки
    if (pressedButton) {
        pressedButton.classList.add('pressed');
        // Змінити стилі нової натиснутої кнопки
        pressedButton.style.backgroundColor = '#555';
        pressedButton.style.color = '#EFF9FF';
    }

    var labsFolderPath = 'labs/';
    var labFilePath = labsFolderPath + pageName;

    fetch(labFilePath)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

function changeContent(contentType) {
    var mainContent = document.querySelector('.main2-content');
    var contentButtons = document.querySelectorAll('.buttons button');

    // Знайти натиснуту кнопку за contentType
    var pressedButton = Array.from(contentButtons).find(function (btn) {
        return btn.onclick && btn.onclick.toString().includes(contentType);
    });

    // Зняти попередню натиснутість з усіх кнопок
    contentButtons.forEach(function (btn) {
        btn.classList.remove('pressed');
        // Зняти стилі з попереднього вибраного контенту
        btn.style.backgroundColor = '#D9D9D9';
        btn.style.color = '#000000';
    });

    // Додати клас "pressed" до нової натиснутої кнопки
    if (pressedButton) {
        pressedButton.classList.add('pressed');
        // Змінити стилі ново вибраного контенту
        pressedButton.style.backgroundColor = '#555';
        pressedButton.style.color = '#EFF9FF';
    }

    var contentFilePath = 'content/' + contentType + '.html';

    fetch(contentFilePath)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

