
import { useEffect, useState } from 'react';
import api from '../../lib/axios';

const AdminNotices = () => {
    const [notices, setNotices] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('both');
    const [file, setFile] = useState(null);

    useEffect(() => { fetchNotices(); }, []);

    const fetchNotices = async () => {
        try {
            const { data } = await api.get('/admin/notices');
            setNotices(data);
        } catch (e) { console.error(e) }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('visibility', visibility);
        if (file) formData.append('file', file);

        try {
            await api.post('/admin/notices', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setTitle('');
            setDescription('');
            setVisibility('both');
            setFile(null);
            fetchNotices();
        } catch (e) { console.error(e) }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow">
                <h2 className="text-lg font-bold mb-4">Create Notice</h2>
                <form onSubmit={handleCreate} className="space-y-4">
                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
                    <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border rounded" required />
                    <select value={visibility} onChange={e => setVisibility(e.target.value)} className="w-full p-2 border rounded">
                        <option value="both">Both</option>
                        <option value="teacher">Teachers Only</option>
                        <option value="student">Students Only</option>
                    </select>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Attachment (Optional)</label>
                        <input type="file" onChange={e => setFile(e.target.files[0])} className="w-full text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-[var(--color-primary)] text-white py-2 rounded">Post Notice</button>
                </form>
            </div>
            <div className="lg:col-span-2 space-y-4">
                <h2 className="text-lg font-bold">Recent Notices</h2>
                {notices.map(notice => (
                    <div key={notice._id} className="bg-white p-4 rounded-xl shadow">
                        <div className="flex justify-between">
                            <h3 className="font-bold">{notice.title}</h3>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{notice.visibility}</span>
                        </div>
                        <p className="text-gray-600 mt-2">{notice.description}</p>
                        {notice.attachment && (
                            <a
                                href={`http://localhost:5000${notice.attachment}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-sm text-blue-600 hover:underline font-medium"
                            >
                                View Attachment
                            </a>
                        )}
                        <p className="text-xs text-gray-400 mt-2">{new Date(notice.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default AdminNotices;
