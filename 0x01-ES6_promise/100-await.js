import { uploadPhoto as upFunc, createUser as createFunc } from './utils';
export default async function asyncUploadUser () {
  try {
    const uploadPhoto = await upFunc();
    const createUser = await createFunc();
    return {
      photo: uploadPhoto,
      user: createUser
    };
  } catch (err) {
    return {
      photo: null,
      user: null
    };
  }
}
