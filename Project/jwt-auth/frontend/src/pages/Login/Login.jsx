// src/pages/LoginPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // ถ้ามี token อยู่แล้ว ก็ไม่ให้แสดงหน้า login
        if (localStorage.getItem("token")) {
            navigate("/");  // เปลี่ยนไปยังหน้า Main
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5001/auth/login", { // ปรับ URL ตามที่ backend ใช้
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }
    
            localStorage.setItem("token", data.token);
    
            alert("Login successful!");
    
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };
    

    return (
        <div className="h-screen flex items-center justify-center">
            <form onSubmit={handleLogin} className="space-y-4 w-md p-auto m-[50px]">
                <label
                    for="title"
                    className="flex text-3xl text-white-500 mt-6"
                >เข้าสู่ระบบ</label>
                <div>
                    <label
                        className="flex text-gray-500 mb-4"
                    >บัญชีพนักงาน</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full p-2 border border-gray-300 bg-gray-600"
                    />
                </div>
                <div>
                    <label
                        className="flex text-gray-500 mb-4"
                    >รหัสผ่าน</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 bg-gray-600"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2">
                    ค้นหา
                </button>
            </form>
        </div>
    );
};

export default Login;
