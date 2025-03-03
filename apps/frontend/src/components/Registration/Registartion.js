import React  from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";

function Registration() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (FormData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return


        try {
            const response = await fech("http://localhost:3001/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate("/login");
            } else {
                const data = await response.json();
                setErrors({ server: data.message || "Registration failed" });
            }
        } catch (error) {
            setErrors({ server: "Something went wrong. Try again later." });
        }
    }

    return (
        <div className="registration-container">
            <h2>Register</h2>
            {errors.server && <p className="error">{errors.server}</p>}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                >{errors.name && <p className="error">{errors.name}</p>}
                </input>

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                >{errors.email && <p className="error">{errors.email}</p>}
                </input>

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                >
                    {errors.password && <p className="error">{errors.password}</p>}
                </input>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;