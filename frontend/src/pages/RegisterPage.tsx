import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useAuth } from "../contexts/AuthContext";

const RegisterPage = () => {
  useDocumentTitle("Register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = await register(username, email, password);

    if (success) {
      navigate("/library");
    } else {
      console.error("Registration failed");
    }
  };

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Register new account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block" htmlFor="username">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Register
              </button>
              <button
                type="button"
                onClick={handleLoginButtonClick}
                className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
