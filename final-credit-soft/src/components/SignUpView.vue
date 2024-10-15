<template>
  <div class="signup-container">
    <div class="signup-box">
      <h1>SIGN UP</h1>
      <form @submit.prevent="signUp">
        <div class="form-row">
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
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <div class="input-group">
              <i class="fas fa-id-card"></i>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <div class="input-group">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="division">Division</label>
            <div class="input-group">
              <i class="fas fa-building"></i>
              <select id="division" v-model="division" required>
                <option value="" disabled selected>Select your division</option>
                <option value="Information Technology & MIS Division(IT)">
                  Information Technology & MIS Division(IT)
                </option>
                <option
                  value="Information Technology & MIS Division(MIS & CIB)"
                >
                  Information Technology & MIS Division(MIS & CIB)
                </option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      userId: "",
      password: "",
      name: "",
      email: "",
      division: "",
      errorMessage: "",
    };
  },
  methods: {
    async signUp() {
      try {
        // Log the data being sent to the server
        console.log({
          userId: this.userId,
          password: this.password,
          name: this.name,
          email: this.email,
          division: this.division,
        });

        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: this.userId,
            password: this.password,
            name: this.name,
            email: this.email,
            division: this.division,
          }),
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();
        localStorage.setItem("authToken", data.authToken); // Store the auth token
        // alert("Signup Successful!");
        this.$router.push({ name: "LoginView" });
      } catch (error) {
        // Catch and display the error
        this.errorMessage = error.message || "An error occurred during signup.";
        console.error("Sign Up Error:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 20px;
}

.signup-box {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px; /* Adjusted width for two columns */
  text-align: center;
  font-family: "Poppins", sans-serif;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.form-group {
  width: 48%; /* Adjust width to fit two columns */
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
input[type="password"],
input[type="email"],
select {
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
input[type="password"]::placeholder,
input[type="email"]::placeholder {
  color: #555;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
select:focus {
  background-color: rgba(255, 255, 255, 0.7);
  outline: none;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

select {
  padding-left: 40px;
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

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .signup-box {
    padding: 30px;
    width: 90%;
    max-width: 450px;
  }

  .form-row {
    flex-direction: column;
  }

  .form-group {
    width: 100%;
  }

  h1 {
    font-size: 24px;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    padding: 10px 10px 10px 35px;
  }

  button {
    padding: 10px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .signup-box {
    padding: 20px;
    width: 100%;
  }

  h1 {
    font-size: 20px;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    padding: 8px 8px 8px 30px;
  }

  button {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
