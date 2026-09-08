import { saveAs } from 'file-saver';

let fileSaver = require('file-saver');
let blob = new Blob(['helo, world'], {type: "text/plain;charset=utf-8"});
fileSaver.saveAs(blob, 'hello world.txt');

let blob = new Blob(['hello'], {type: "text/plain;charset=utf-8"});
fileSaver.saveAs(blob, 'hello.txt');

fileSaver.saveAs()