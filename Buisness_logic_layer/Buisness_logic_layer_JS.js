async function authenticate() {
  try {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const response = await fetch('../Data_base_Layer/data.txt');
      const data = await response.text();

      const users = data.split('\n');
      let isValid = false;

      users.forEach(user => {
          const [storedUsername, storedPassword] = user.split(':');
          if (username === storedUsername && password === storedPassword) {
              isValid = true;
          }
      });

      if (isValid) {
          alert("Login successful! Welcome, " + username + "!");
      } else {
          alert("Invalid username or password. Please try again.");
      }
  } catch (error) {
      console.error('Error reading the file:', error);
  }
}