//
// version : 1.0.0
// console.log('app.js');
//
$(function(){
	console.log('Ready');
	// first time
	renderFilesFromFolder(folderPath)
});


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
	//
	$('#idInfo').html(fileName);
});

$('#idBtnChooseFolder').on('click',function(evt){
	console.log('folder selection');
	const {dialog} = require('electron').remote;
	dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']},function(files){
		//console.log('files',files);
		//console.log('folderPath',folderPath);
		folderPath = files[0];
		//console.log('folderPath',folderPath);
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
		
		console.log('Files:',files);
		var sUL = '<ul>';
		files.forEach(file => {
			
			const fileName = path.basename(file);
			if(fileName.indexOf('.')===0){
				//Do Nothing
				// Removing the .Files from the list
			}else{
				//
				const fileStats = fs.statSync(folderPath+'/'+file);
				//console.log('stats',fileStats);

				const fileSizeInBytes = fileStats.size;
				const fileSizeInMB = parseFloat( fileSizeInBytes/1000000 ).toFixed(2); // made to show only 2 decimal points
				const fileLastOpened = fileStats.atime; //access time
				const fileLastModified = fileStats.mtime; //modified time
				const filebirth = fileStats.birthtime; //birth time
				
				//console.log('file',file);
				//console.log('fileSizeInBytes',fileSizeInBytes);

				s1 = '<li><span class="clsName">'+fileName+'</span>'+'<span> '+fileSizeInMB+' mb. </span>'+'</li>';
				sUL += s1;
			}

		});
		sUL += '</ul>';
		$('#idApp').append(sUL);
	});	
}









