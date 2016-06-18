//import FlashMessage from "./flash-message";

//let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
//flash.display();

import Post from "./post";
import ui from "./ui";

let Post = {
    findAll(){
        return new Promise((resolve, reject) => {
            //resolve("ok posts!");
            let uri = "http://localhost:3000/posts";
            let request = new XMLHttpRequest();

            request.open("GET", uri, true); //true for asychonous
            request.onload = () => {
                if (request.status >= 200 && request.status < 400){
                    resolve(JSON.parse(request.response));
                }
            };

            request.onerror = () => {
                reject(new Error("Something went wrong on the API"));
            }

            request.send();
        });
    }
}

let ui = {
    renderPosts(posts){
        console.log(posts);
    }
}

Post.findAll()
    .then(ui.renderPosts)
    .catch((error) => console.log(error));




