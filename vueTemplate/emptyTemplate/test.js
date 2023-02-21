const config = {
  headers: {
    isToken: false,
    repeatSubmit:false
  },
};

const isRequestSubmit = (config.headers||{}).repeatSubmit ===false  
const isToken = (config.headers || {}).isToken === false;

console.log(isToken,!isRequestSubmit);
