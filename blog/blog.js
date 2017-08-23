function createBlog() {

    var totalPosts = 9;
    var divHandle = $("div.handle");
    var sectionPages = $("section.pages");


    for (i = totalPosts-1; i >= 0; i-=1) {
    	var postPath = "posts/" + i + ".post";
    	var post = readPostHeader(postPath);
		divHandle.append("<div class=\"slide\" data-content=\"content-"+i+"\">\n"+
							"<div class=\"img-wrap\"><img src=\""+post['img']+"\" alt=\"img"+i+"\"/></div>\n"+
							"<h2>"+post['title']+"<span>"+post['subtitle']+"</span></h2>\n"+
							"<button class=\"content-switch\">Read more</button>\n"+
							"</div>");	

		var bodyPath = "posts/" + i + ".html";
    	var body = readPostBody(bodyPath);
		sectionPages.append("<div class=\"content\" data-content=\"content-"+i+"\">"+body+"</div>");
	}
}

function readPostBody(path) {
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    var post;
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                post = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return post;
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

createBlog();