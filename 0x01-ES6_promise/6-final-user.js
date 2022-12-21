import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return results.map((pr) => ({
    status: pr.status,
    value: pr.status === 'fulfilled' ? pr.value : String(pr.reason),
  }));
}

export default handleProfileSignup;
