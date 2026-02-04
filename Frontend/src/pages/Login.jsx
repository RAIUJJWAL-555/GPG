
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSearchParams } from 'react-router-dom';
import api from '../lib/axios';
import { motion } from 'framer-motion';

const Login = () => {
    const [searchParams] = useSearchParams();
    const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'register');
    const [formData, setFormData] = useState({
        email: '', password: '', name: '',
        role: searchParams.get('role') || 'student',
        enrollmentNumber: '', dob: '', department: ''
    });
    const [error, setError] = useState('');
    const { login } = useAuth();

    useEffect(() => {
        const roleParam = searchParams.get('role');
        const modeParam = searchParams.get('mode');
        if (roleParam) {
            setFormData(prev => ({ ...prev, role: roleParam }));
        }
        if (modeParam) {
            setIsLogin(modeParam !== 'register');
        }
    }, [searchParams]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const endpoint = isLogin ? '/auth/login' : '/auth/register';
            const { data } = await api.post(endpoint, formData);
            login(data, data.token);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-t-4 border-[var(--color-primary)]"
            >
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Role Selection for Login context if not fixed, but here we assume role comes from URL mostly, but give option if needed */}
                    {isLogin && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Login As</label>
                            <select name="role" value={formData.role} onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none">
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    )}

                    {!isLogin && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select name="role" value={formData.role} onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none">
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                            {formData.role === 'student' && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
                                        <input type="text" name="enrollmentNumber" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input type="date" name="dob" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                                    </div>
                                </>
                            )}
                            {formData.role === 'teacher' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Department</label>
                                    <input type="text" name="department" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                                </div>
                            )}
                        </>
                    )}

                    {/* Logic for Login Fields based on Role */}
                    {isLogin && formData.role === 'student' ? (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
                                <input type="text" name="enrollmentNumber" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input type="date" name="dob" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                            </div>
                        </>
                    ) : (
                        /* Standard Login for Teacher/Admin or Register Fallback uses Email/Pass */
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="password" onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg outline-none" required />
                            </div>
                        </>
                    )}

                    <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white py-2 rounded-lg font-semibold transition-all">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={() => setIsLogin(!isLogin)} className="text-[var(--color-accent)] font-bold hover:underline">
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
