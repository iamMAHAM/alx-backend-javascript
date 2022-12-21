import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) =>
    results.map((pr) => ({
      status: pr.status,
      value: pr.status === 'fulfilled' ? pr.value : String(pr.reason),
    }))
  );
}

export default handleProfileSignup;
