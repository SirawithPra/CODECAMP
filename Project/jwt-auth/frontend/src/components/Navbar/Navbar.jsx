import { Link } from "react-router-dom";

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-white text-xl">Home</Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
