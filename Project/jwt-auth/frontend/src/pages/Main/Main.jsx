import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth, decodeToken } from "../../utils/auth";
import Block from "../../components/Block/Block";

const Main = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (!checkAuth()) {
            navigate("/auth/login");
            return;
        }
    
        const decoded = decodeToken(token);
        if (decoded) {
            setUser(decoded);
        } else {
            navigate("/auth/login");
        }
    }, [navigate]);
    

    return (
        <div className="h-screen flex flex-col">
            {user ? (
                <>
                    <div className="w-full flex justify-end items-center p-4 bg-gray-900 text-white shadow-md fixed top-0 left-0">
                        <p className="pr-6">Email: {user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white rounded"
                        >
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>

                    <div className="flex-grow flex flex-col justify-center items-center mt-16 mr-6 ml-6">
                        <h2 className="font-bold text-white text-6xl mb-6">Main Page</h2>
                        <div className="flex flex-wrap md:flex-row-reverse justify-center items-center gap-4 w-full">
                            <Block role={user.role} blockName="Block 1" blockColor="bg-red-100">
                                <p className="text-black text-4xl">1</p>
                            </Block>
                            <Block role={user.role} blockName="Admin" blockColor="bg-blue-100">
                                <p className="text-black text-4xl">2</p>
                            </Block>
                            <Block role={user.role} blockName="Block 2" blockColor="bg-green-100">
                                <p className="text-black text-4xl">3</p>
                            </Block>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    );
};

export default Main;