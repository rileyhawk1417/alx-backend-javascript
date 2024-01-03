export default async function getFullResponseFromApi(success){
if (success){
        Promise.resolve("Success");
        return {status: 200, body: 'Success'}
    }
    Promise.reject()
    return {Error: 'The fake API is not working currently'}
}
