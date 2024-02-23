import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser () {
  try {
    const uploadPhoto = await uploadPhoto();
    const createUser = await createUser();
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
