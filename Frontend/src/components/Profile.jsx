
import { useEffect, useState } from 'react';
import api from '../lib/axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        api.get('/common/profile').then(res => setUser(res.data)).catch(console.error);
    }, []);

    if (!user) return <div className="p-8">Loading profile...</div>;

    return (
        <div className="bg-white p-8 rounded-xl shadow max-w-2xl border-t-4 border-[var(--color-primary)]">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-gray-500 text-sm font-medium">Full Name</label>
                    <p className="font-semibold text-lg text-gray-900">{user.name}</p>
                </div>
                <div>
                    <label className="text-gray-500 text-sm font-medium">Email Address</label>
                    <p className="font-semibold text-lg text-gray-900">{user.email}</p>
                </div>
                <div>
                    <label className="text-gray-500 text-sm font-medium">Role</label>
                    <p className="font-semibold text-lg text-gray-900 capitalize">{user.role}</p>
                </div>
                {user.role === 'student' && (
                    <>
                        <div>
                            <label className="text-gray-500 text-sm font-medium">Enrollment Number</label>
                            <p className="font-semibold text-lg text-gray-900">{user.enrollmentNumber}</p>
                        </div>
                        <div>
                            <label className="text-gray-500 text-sm font-medium">Date of Birth</label>
                            <p className="font-semibold text-lg text-gray-900">{new Date(user.dob).toLocaleDateString()}</p>
                        </div>
                    </>
                )}
                {user.role === 'teacher' && (
                    <>
                        <div>
                            <label className="text-gray-500 text-sm font-medium">Department</label>
                            <p className="font-semibold text-lg text-gray-900">{user.department}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
