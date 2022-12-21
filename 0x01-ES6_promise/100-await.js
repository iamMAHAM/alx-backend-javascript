import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { user, photo };
  } catch (e) {
    return {
      user: null,
      photo: null,
    };
  }
}

export default asyncUploadUser;
