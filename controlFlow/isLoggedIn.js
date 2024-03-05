
let isLoggedIn = true;
let userMessage;
let userRole = "admin";

if (isLoggedIn) {
    
    if(userRole == "admin") {
    
        userMessage = "Welcome, Admin!";
    
    } else {

        userMessage = "Welcome, User!";
    }

} else {

        userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);