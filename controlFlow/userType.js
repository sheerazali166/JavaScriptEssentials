
let userType = "subscriber";
let userCategory;

switch (userType) {

    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";        

}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);



