export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'notes-app-mikhael'
  },
  apiGateway: {
    URL: 'https://2mf1f9pxi7.execute-api.us-east-2.amazonaws.com/prod',
    REGION: 'us-east-2',
  },
  cognito: {
    REGION: 'us-east-2',
    IDENTITY_POOL_ID: 'us-east-2:a3fca15d-934a-4c40-915a-9a147e7010a4',
    USER_POOL_ID : "us-east-2_t6tTEb8QD",
    APP_CLIENT_ID : "52vsuvcodusl9lmeqcr4maq4ck",
  }
};
