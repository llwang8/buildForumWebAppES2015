//import FlashMessage from "./flash-message";

//let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
//flash.display();

import Post from "./post";
import User from "./user";
import ui from "./ui";


Post.findAll()
    .then(ui.renderPosts)
    .catch((error) => {
        console.log(error);
    });


User.findRecent()
    .then(ui.renderUsers)
    .catch((error) => {
        console.log( error );
    });

