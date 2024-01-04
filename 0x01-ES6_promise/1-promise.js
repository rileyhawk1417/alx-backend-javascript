export default async function getFullResponseFromApi(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: "status",
      });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
