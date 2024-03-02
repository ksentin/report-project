function changePage(pageName) {
    var mainContent = document.getElementById('mainContent');

    var labsFolderPath = 'labs/';
    
    var labFilePath = labsFolderPath + pageName;

    fetch(labFilePath)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

