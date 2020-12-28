const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "About JavaScript Theory",
            location: "Zoom",
            time: "10:30 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting has already scheduled!"));
    }
});

const addToCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} meeting has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
};

meeting
    .then(addToCalender)
    .then((resolve) => {
        // resolve data
        console.log(resolve);
    })
    .catch((reject) => {
        // rejected data
        console.log(reject.message);
    });

console.log("fahad");

const asyncFunc = async () => {
    const details = await meeting;
    const calender = await addToCalender(details);
    console.log(calender);
};
asyncFunc();
