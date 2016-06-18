let User = {
    findAll(){
        return new Promise((resolve, reject) => {
            //resolve("ok posts!");
            let uri = "http://localhost:3000/activeUsers";
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


export default User;