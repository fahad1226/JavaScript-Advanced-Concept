function sendEmailToUser({ name, email, id, dob }) {
    // good practice
    console.log(name, email, id, dob);
}

var emailInfo = {
    name: "fahad",
    email: "fahad@gmail.com",
    id: 122,
    dob: "1997",
};


// to access the object we have to for in loop

for(property in emailInfo) {
    console.log(property);
}

sendEmailToUser(emailInfo);

const createShape = (type = "Circle") => {
    console.log(type);
};

createShape();
