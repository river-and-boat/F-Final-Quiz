const ADD_TRAINEE_URL = "http://localhost:8080/trainees"
const ERROR_CODE = 500;

export const fetchPostTrainee = async (trainee) => {
  try {
    const data = await fetch(ADD_TRAINEE_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trainee)
    });
    return data.status;
  } catch (e) {
    return ERROR_CODE;
  }
}

