const path = require("path") // this stores the path module 

const currentFile = __filename // this is a built in global variable that stores the absolute path of the current file as a string
const directory = __dirname // this is a built in global variable that stores the directory name of the current file as a string

const basename = path.basename(__filename) // this method returns the basename of the input path
const filename = path.basename(__filename, ".js") // on giving an extension, it returns only the file name


const object = {
    dir: "/ritik",
    base: "index",
    ext: ".js"
}

console.log(path.sep); // this property shows the separator for a specific operating system. For linux, it is "/", it separates multiple sections of a path
console.log(currentFile); // current file path
console.log(directory); // current directory path
console.log(basename) // path.js
console.log(filename); // path
console.log(path.extname(currentFile)); // this property returns the extension name of the input path
console.log(path.dirname(currentFile)); // this property returns the directory name of the input path


console.log(path.format(object)); // this method constructs a path out of an object

console.log(path.isAbsolute(currentFile)); // true // this method finds if a path is absolute
console.log(path.isAbsolute("../js")); // false

const newPath = path.join("js", "file.js") // this method joins segments of a path
const anotherPath = path.join("js", "..", "file.js") // it takes care of the relative units
const path2 = path.join("//js", "file.js") // it removes redundant slashes


console.log(newPath); // js/file.js
console.log(anotherPath); // file.js // it has moved a directory up
console.log(path2); // file.js // /js/file.js

console.log(path.parse(currentFile)); // this method parses a path into an object containing its individual segments


console.log(path.resolve("js", "files", "file.js")); // this method resolves segments of a path into an absolute path
console.log(path.resolve("/js", "files", "file.js")); // /js/files/file.js
console.log(path.resolve("/js", ".." , "files", "file.js")); // /files/file.js

const normalizedPath1 = path.normalize('/home/user/../docs/./file.txt'); // this method normalizes a path by handling redundant characters like .. and /
console.log(normalizedPath1); // /home/docs/file.txt

const normalizedPath2 = path.normalize('/home//user///docs/file.txt');
console.log(normalizedPath2); // /home/user/docs/file.txt