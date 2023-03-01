const fs = require('fs');
const ytdl = require('ytdl-core');

const downloadVid = function (title,url){

    ytdl(url).pipe(fs.createWriteStream(title+".mp4"));

}

export default downloadVid;