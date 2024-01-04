export default function handleResponseFromApi(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: "succes",
    }))
    .catch(() => Error())
    .finally(() => console.log("Got a response from the API"));
}
