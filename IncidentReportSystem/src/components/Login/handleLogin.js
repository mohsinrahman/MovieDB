const dummyUsers = [
  { email: "sa@example.com", password: "sa123", role: "superAdmin" },
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "user" },
];

const validate = (email, password, setErrors) => {
  if (!email || !password) {
    setErrors({ form: "Email and password are required" });
    return null;
  }

  const foundUser = dummyUsers.find(
    (user) => user.email === email && user.password === password,
  );

  if (!foundUser) {
    setErrors({ form: "Invalid credentials" });
    return null;
  }

  return foundUser;
};

export const handleLogin = (e, email, password, setErrors, navigate) => {
  e.preventDefault();

  const user = validate(email, password, setErrors);
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    user.role === "admin" || user.role === "superAdmin"
      ? navigate("/admin")
      : navigate("/user");
  }
};
