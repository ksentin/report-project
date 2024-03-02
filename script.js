function changePage(pageName) {
    var mainContent = document.getElementById('mainContent');

    fetch(pageName)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}
