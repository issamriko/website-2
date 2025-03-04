const backendUrl = "http://localhost:5000"; // Change to your backend URL

const tenantId = "website2"; // Change for each website (website1, website2, website3)

// Register User
async function register() {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const response = await fetch(`${backendUrl}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tenantId, email, password }),
  });

  const data = await response.json();
  alert(data.message);
}

// Login User
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(`${backendUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tenantId, email, password }),
  });

  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    alert("Login successful!");
  } else {
    alert("Login failed!");
  }
}
