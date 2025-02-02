const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = "your-secret-key";

// mocks database
const users = {
    user1: {
        username: "user1",
        password: "$2a$12$tLrxy.Qd/mftpHP.PDsuUevbNwZodOyiJzlJB0m8wDCuiM6U0SdHO", // "passuser"
        name: "user1",
        email: "user1.email@gmail.com",
        role: "USER",
    },
    admin1: {
        username: "admin1",
        password: "$2a$12$mKW4jJqdzy9A3CK3Umuz5.mja/cyeqvltQbc.RkNcydpZa054v2lS", // "passadmin"
        name: "admin1",
        email: "admin1.email@gmail.com",
        role: "ADMIN",
    },
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = users[username];

    if (!user) {
        return res.status(401).json({ message: "Invalid username" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { 
            username: user.username, 
            role: user.role,
            email: user.email
        },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({ token });
};

const getUser = (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ 
            username: decoded.username, 
            role: decoded.role,
            email: decoded.email
        });
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = { loginUser, getUser };