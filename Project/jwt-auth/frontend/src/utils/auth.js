export const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
      return false;
  }
  
  try {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      return decoded ? true : false; // Can't decode JSON means false
  } catch (error) {
      return false;
  }
};

export const decodeToken = (token) => {
  try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
  } catch (error) {
      console.error("Invalid token:", error);
      return null;
  }
};
