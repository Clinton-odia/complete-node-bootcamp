const fs = require("fs");
const http = require("http");
const { dirname } = require("path");
const { json } = require("stream/consumers");
const url = require("url")
//////////////////////////////
////// FILES


// const hello = "Hello world";

// console.log(hello);

// Blocking, Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// // console.log(textIn);

// const textOut = `This is what we know about avocado: ${textIn}. \n`;
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("file has been written");

// Non-blocking, Asynchronous way
// simple version with one callback
// fs.readFile("./txt/start.txt","utf-8", 
//   (err, data) => {console.log(data);}
// );
// console.log("reading file");

// complex version with multiple callbacks

// fs.readFile("./txt/start.txt","utf-8", 
  //first callback
//   (err, data1) => {console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`,"utf-8", 
//       //second callback
//   (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`,"utf-8", 
//       //third callback
//     (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2} \n ${data3}`,"utf-8", (err) => {
//         console.log("writing file");
//       })
//     })})
//   }


// );
// console.log("reading file");

//////////////////////////////
////// SERVERS

// const server = http.createServer((req, res) => {
  
//   res.end("hello from the server");
// });

// server.listen(8000, "127.0.0.1", () => {
// console.log("listening from server");
// });

//////////////////////////////
////// ROUTING


const data = fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8",);
const dataObj = JSON.parse(data)


const server = http.createServer((req, res) => {
  const pathName = req.url
  if (pathName === "/overview" || pathName === "/"){
    
    res.end("This is the OVERVIEW page of the website");
  } else if (pathName === "/product") {
    res.end("This is the product catagory of my website");
  } else if (pathName === "/api"){
      res.writeHead(200, {"content-type" : "application/json"});
      res.end(data);} else {
    res.writeHead(404, {
      "content-type" : "text/html"
    });
    res.end("<h1>Page Not found</h1>");

  }

});

server.listen(8000, "127.0.0.1", () => {
console.log("listening from server");
});

