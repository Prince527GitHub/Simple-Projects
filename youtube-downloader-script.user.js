// ==UserScript==
// @name                Youtube Downloader Script
// @version             2.0.2
// @description         Download videos from youtube.com with one click.
// @author              Prince527
// @match               https://www.youtube.com/*
// @downloadURL         https://github.com/Prince527GitHub/Simple-Projects/raw/youtube-downloader-userscript/youtube-downloader-script.user.js
// @homepageURL         https://github.com/Prince527GitHub/Simple-Projects/tree/youtube-downloader-userscript
// ==/UserScript==

(function() {
    // add css style
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dropbtn-custom{background-color:transparent;color:#fff;font-size:16px;border:none;cursor:pointer}.dropdown-custom{position:relative;display:inline-block}.dropdown-content-custom{display:none;position:absolute;background-color:#f9f9f9;min-width:100px;box-shadow:0px 8px 16px 0px rgba(0,0,0,.2);z-index:1}.dropdown-content-custom a{color:#000;text-decoration:none;display:block}.dropdown-content-custom a:hover{background-color:#f1f1f1}.dropdown-custom:hover .dropdown-content-custom{display:block}.dropdown-custom:hover .dropbtn-custom{background-color:transparent}';
    document.getElementsByTagName('head')[0].appendChild(style);

    // create a new div element
    var div = document.createElement("div");
    div.id = "downloader";
    div.style.position = "fixed";
    div.style.top = "50";
    div.style.right = "50";
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.textAlign = "center";
    div.style.fontSize = "20px";
    div.style.cursor = "pointer";
    div.style.zIndex = "9999";
    div.innerHTML = `<div class='dropdown-custom'><button class='dropbtn-custom' style="height:10px;width:10px;"></button><div class='dropdown-content-custom'><a href="${'http://9xbuddy.com/download?url=' + document.URL}">9xBuddy</a> <a href="https://www.y2mate.com/youtube/${document.URL.split('v=')[1]}">y2mate2</a> <a href="https://ytmp3x.com/${document.URL.split('?v=')[1].split("&list")[0]}">YTMP3X</a> <a href="https://yt1s.com/en?q=${document.URL}">YT1s</a></div></div>`;

    // append the new div element to the body
    document.body.appendChild(div);

})();
