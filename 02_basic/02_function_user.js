function funusername(username){
    if( username === undefined)
        {
            console.log("Please enter user name");
            return
        }  
        return `${username} juset logged in`
}

let usernamefun = funusername("Arvi Yadav");
console.log(usernamefun);