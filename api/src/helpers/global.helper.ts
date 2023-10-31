
const globalHelper = {
    fakePromise: () => {
        // Create a new promise
        return new Promise ( (resolve, reject) => {
            // Set a timer for 3 seconds
            setTimeout ( () => {
            // Reject the promise with an error
            reject (new Error ('This is a fake promise error!'));
            }, 3000);
        });
    },
}

export default globalHelper