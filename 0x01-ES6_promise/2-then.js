export default async function handleResponseFromApi(promise){
    let reply = {};
    Promise.resolve("Success").then((value) => {
        reply = {status: 200, body: 'success'}
    });
    Promise.reject(new Error()).then(
        () => {},
        (error) => {}
    )
    console.log('Got a response from the API')
}
