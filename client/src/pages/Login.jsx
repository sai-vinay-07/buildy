import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContent";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useAppContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        // Save token
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        toast.success("Login Successful!");
        navigate("/admin"); // redirect to dashboard
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: { background: "#16a34a", color: "white" }, // green success
          },
          error: {
            style: { background: "#dc2626", color: "white" }, // red error
          },
        }}
      />

      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-sm p-6 max-md:m-6 border border-blue-700/30 shadow-xl shadow-blue-700/15 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full py-6 text-center">
              <h1 className="text-3xl font-bold">
                <span className="text-blue-700">Admin</span> Login
              </h1>
              <p>Enter your credentials to access the admin panel</p>
            </div>
            <form
              className="mt-6 w-full sm:max-w-md text-gray-600"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  required
                  placeholder="your email id"
                  className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  required
                  placeholder="your password"
                  className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                />
              </div>
              <button
                className="w-full py-3 font-medium bg-blue-700 text-white rounded cursor-pointer hover:bg-blue-600/90 transition-all"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
