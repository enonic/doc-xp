return {
    status: 200,
    body: "Hello World",
    cookies: {
        "plain": "value", // Example (1) of just setting a value
        "complex": { // Example (2) for using a full JS object
            value: "value",
            path: "/valid/path",
            domain: "enonic.com",
            comment: "Some cookie comments",
            maxAge: 2000,
            secure: false,
            httpOnly: false
        }
    }
};
