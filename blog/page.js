function createPage() {

    var currentPage = window.location.search.substring(3);
    var div = $("div.dragslider");
    var bodyPath = "posts/" + currentPage + ".html";
    var body = readPostBody(bodyPath);
    div.append(body);
}



function readPostHeader(path) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    var post;
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                post = JSON.parse(allText);
            }
        }
    }
    rawFile.send(null);
    return post;
}

function readPostBody(path) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    var post;
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                post = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return post;
}

createPage();