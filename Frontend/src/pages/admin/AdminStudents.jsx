
import { useEffect, useState } from 'react';
import api from '../../lib/axios';

const AdminStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const { data } = await api.get('/admin/users?role=student');
            setStudents(data);
        } catch (e) { console.error(e) }
    };

    const toggleStatus = async (id, currentStatus, type) => {
        try {
            const payload = type === 'approve' ? { isApproved: !currentStatus } : { isActive: !currentStatus };
            await api.put(`/admin/users/${id}`, payload);
            fetchStudents();
        } catch (e) { console.error(e) }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Manage Students</h1>
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map((std) => (
                            <tr key={std._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{std.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{std.enrollmentNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${std.isApproved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {std.isApproved ? 'Approved' : 'Pending'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onClick={() => toggleStatus(std._id, std.isApproved, 'approve')} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                        {std.isApproved ? 'Revoke' : 'Approve'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AdminStudents;
