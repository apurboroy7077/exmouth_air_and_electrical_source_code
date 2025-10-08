const getCodeFromHtmlFile = (address) => {
  return new Promise(async (resolve, reject) => {
    try {
      fetch(address)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text(); // Parse the content as text
        })
        .then((htmlContent) => {
          resolve(htmlContent);
        })
        .catch((error) => {
          console.error("Error loading test.html:", error);
          reject(error);
        });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default getCodeFromHtmlFile;
export const waitAR7 = (milisecond) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`waited ${milisecond} miliseconds`);
    }, milisecond);
  });
};
export const validateEmailAR7 = (str) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmail = emailRegex.test(str);

  return isEmail; // valid email
};
export const validateAustralianPhoneAR7 = (str) => {
  // 1. Remove all formatting, leaving only digits
  const digitsOnly = str.replace(/\D/g, "");

  // 2. Check for valid 10-digit domestic number (04..., 02..., etc.)
  if (/^0[2-478]\d{8}$/.test(digitsOnly)) {
    return true;
  }

  // 3. Check for valid international format number (+61...)
  if (/^61[2-478]\d{8}$/.test(digitsOnly)) {
    return true;
  }

  // If neither pattern matched, it's invalid
  return false;
};
