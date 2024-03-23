
let hasPermission = true;
let isMember = false;

let canAccessResource = hasPermission && isMember; // Logical AND
let canViewPage = hasPermission || isMember; // Logical OR

let isDenied = !hasPermission; // Logical NOT

console.log(canAccessResource);
console.log(canViewPage);
console.log(isDenied);

