<template>
  <div class="login-container">
    <div class="login-box">
      <h1>LOG IN</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="userId">User ID</label>
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input
              type="text"
              id="userId"
              v-model="userId"
              placeholder="Enter your User ID"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-group">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>

      <!-- Option to navigate to Sign Up page -->
      <div class="signup-link">
        <p>
          Don't have an account?
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      userId: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        // Log the data before sending
        console.log({
          userId: this.userId,
          password: this.password,
        });

        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: this.userId,
            password: this.password,
          }),
        });

        if (!response.ok) {
          // If the response is not OK, throw an error
          throw new Error(await response.text());
        }

        const data = await response.json();
        localStorage.setItem("authToken", data.authToken); // Store the auth token
        // alert("Login Successful!");
        this.$router.push({ name: "WelcomeMessage" });
      } catch (error) {
        // Catch and display the error
        this.errorMessage = error.message || "An error occurred during login.";
        console.error("Login Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 20px;
}

.login-box {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #ddd;
}

.input-group {
  position: relative;
}

.input-group i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 12px 12px 40px;
  margin-top: 5px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: #555;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: rgba(255, 255, 255, 0.7);
  outline: none;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.error-message {
  color: #ff4d4f;
  margin-top: 20px;
  font-weight: 600;
}

.signup-link {
  margin-top: 20px;
}

.signup-link p {
  color: #fff;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-link a:hover {
  color: #0056b3;
}
</style>
