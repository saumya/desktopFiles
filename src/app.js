console.log('app.js');
// version : 0.1.0
/*
$(function(){
	console.log('Ready');
});
*/

const fs = require('fs');
const path = require("path");


//const folderPath = path.join('./public/zz_z/');
var folderPath = '/Users/saumya/Downloads/2_books/0_myFiles/public/zz_z/';

$(document).on('click', '.clsName', function(evt){
	//var a = $(evt.target);
	//console.log('a.text()',a.text());
	//var t = $(this).text();
	//console.log( t );

	var fileName = $(this).text();
	//console.log( fileName );

	var videoPath = folderPath + '/' + fileName;
	var vElm = document.getElementById("idVideo");
	vElm.src = videoPath;
});

$('#idBtnChooseFolder').on('click',function(evt){
	console.log('folder selection');
	const {dialog} = require('electron').remote;
	dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']},function(files){
		console.log('files',files);
		console.log('folderPath',folderPath);
		folderPath = files[0];
		console.log('folderPath',folderPath);
		//
		$('#idApp').html("");
		renderFilesFromFolder(folderPath);
	})
	//console.log('dialog',dialog);
});

var renderFilesFromFolder = function(folderPath){
	var allFiles = [];
	fs.readdir(folderPath, 'utf8', (err, files) => {
		//
		if (err) {
			//throw err;
			console.log('ERROR:',err);
		}
		
		//console.log('Files:',files);
		var sUL = '<ul>';
		files.forEach(file => {
			s1 = '<li><span class="clsName">'+path.basename(file)+'</span></li>';
			sUL += s1;
		});
		sUL += '</ul>';
		$('#idApp').append(sUL);
	});	
}







