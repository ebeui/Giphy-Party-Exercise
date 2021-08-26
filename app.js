console.log("Let's get this party started!");

async function getData() {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        param: {
            api_key: "ZfV66g5R0No5ko43K9nB75o3kA0YmOR9",
        },
    });
    console.log(response);
}
