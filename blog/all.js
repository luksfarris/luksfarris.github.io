function createAll() {

    var totalPosts = 9;
    var divHandle = $("div.posts");

    divHandle.append("<p>")
    for (i = 0; i < totalPosts; i++) {
    	var postPath = "posts/" + i + ".post";
    	var post = readPostHeader(postPath);

        divHandle.append(i+") <a href=\"./page.html?p="+i+"\">"+post['title']+" - "+post['subtitle']+"</a></br>");
	}
    divHandle.append("</p>");
}

function readPostHeader(path) {
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    var post;
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                post = JSON.parse(allText);
            }
        }
    }
    rawFile.send(null);
    return post;
}

createAll();