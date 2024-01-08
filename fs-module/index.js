let fs = require('fs');
let path = require('path');

// create file using fs module of node js
// fs.writeFileSync('f1.txt','file created using fs module of node js');

// delete file using fs module
// fs.unlinkSync('f1.txt');

// Update or append data in file
// fs.appendFileSync('f1.txt',' this is appended data in the file');


// copy file (f2.txt) from sourceDir to destinationDir

let sourcePath = 'D:/Practice/Node JS/fs-module/sourceDir/f2.txt';
let destinationDirPath = 'D:/Practice/Node JS/fs-module/destinationDir';
let fileName = path.basename(sourcePath);

let destinationPath = path.join(destinationDirPath,fileName);
fs.copyFileSync(sourcePath,destinationPath);


