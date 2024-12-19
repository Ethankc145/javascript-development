const fs = require("fs");
const fsPromise = require("fs").promises;

// const buf = new Buffer.allocUnsafe(1024)

// This is a manual way to open a file.
// fs is a file descriptor which is reference to an opened file. 
// fs.open('WorkingWithFiles/sample.txt','r+', (error, fd) => {
//     if (error) return console.error(error);

//     console.log('File opened successfully!');

//     //  Read the file contents 
//     fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
//         if (err) console.log(err);

//         if (bytes>0) {
//           console.log(buf.slice(0,bytes).toString());
//         }

//         // Very important to close the file when done
//         fs.close(fd, (err) => {
//             if (err) console.log(err);    
//             console.log('File closed successfully');
//         })
//     })
// })

// async function readFile() {
//     try {
//       const fileHandle=await fsPromise.open("WorkingWithFiles/sample.txt")
//       const fileContents = await fileHandle.readFile({ encoding:"utf8"})
//       console.log(fileContents);
//     } catch (error) {
//       console.log(error);
//     }
// }

// readFile()

// Use readFile() to read file contents.
// fs.readFile('workingWithFiles/sample.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

//async.await style
// const readFile = async () => {
//     try {
//       const data = await fsPromise.readFile('WorkingWithFiles/sample.txt', {
//         encoding: "utf8"
//       })
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
// }
// readFileWithPromise();

// This function reads the file contents synchronously
// try {
//   const data = fs.readFileSync('WorkingWithFiles/sample.txt', "utf8")
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// The operations below are about creating files
// fs.open('WorkingWithFiles/sample.txt', 'w', (err, file) => {
//     if (err) throw err;
//     console.log(file);
//     console.log("File created");
// })

//  const data =
//     'This the content that was written into the sample sample3.txt', 
//    fs.writeFile('WorkingWithFiles/sample3.txt', data, (err) => {
//         if (err) console.log("Error writing data to file!");
//         console.log("Saved!");  
//   })

// fs.appendFile('WorkingWithFiles/sample4.txt', 
//     'We are learning Javascript', 
//     (err) => {
//     if (err) throw err;
//     console.log("Done!");
// });

// This method/function renames an existing file
// fs.rename(
//     "workingWithFlies/sample.txt", 
//     "workingWithFlies/sample1.txt", 
//     (err) => {
//      if (err) console.log(err);
//      console.log("File renamed!");
//     }
// )

// This method/function will delete a file.
// fs.unlink('workingWithFlies/sample.txt', (err) => {
//     if (err) {
//         console.log('This is no file to delete!');
//         return
//     }
//     console.log("File is deleted");
// })