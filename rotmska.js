$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://blogfiles.ncsoft.net/news/dd1ef173-2f24-47c6-98fe-72506124023d.mp4";
        document.getElementById('vd').load();
    }
	}
});

