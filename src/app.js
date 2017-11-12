console.log('app.js');
// version : 0.1.0
/*
$(function(){
	console.log('Ready');
});
*/

var fs = require('fs');
var path = require("path");

//const folderPath = path.join('./public/zz_z/');
const folderPath = '/Users/saumya/Downloads/2_books/0_myFiles/public/zz_z/';

$(document).on('click', '.clsName', function(evt){
	//var a = $(evt.target);
	//console.log('a.text()',a.text());
	//var t = $(this).text();
	//console.log( t );

	var fileName = $(this).text();
	//console.log( fileName );

	var videoPath = folderPath + fileName;
	var vElm = document.getElementById("idVideo");
	vElm.src = videoPath;
});


var allFiles = [];
fs.readdir(folderPath, 'utf8', (err, files) => {
	//
	if (err) {
		//throw err;
		console.log('ERROR:',err);
	}
	
	console.log('Files:',files);
	//TODO: render the list of files

	//var sUL = '<ul>';
	files.forEach(file => {
		s1 = '<li><span class="clsName">'+path.basename(file)+'</span></li>';
		//sUL += s1;
		$('#idApp').append(s1);
	});
	//sUL += '</ul>';

	//$('#idApp').append(sUL);
});




