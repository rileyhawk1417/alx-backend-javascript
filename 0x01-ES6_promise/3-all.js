import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((reply) => {
      console.log(
        `${reply[0].body} ${reply[1].firstName} ${reply[1].lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
