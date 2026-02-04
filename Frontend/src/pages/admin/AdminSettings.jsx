
import { useEffect, useState } from 'react';
import api from '../../lib/axios';

const AdminSettings = () => {
    const [settings, setSettings] = useState({ teacherRegistrationEnabled: false, studentRegistrationEnabled: false });

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await api.get('/admin/settings');
                setSettings(data);
            } catch (e) { console.error(e) }
        };
        fetch();
    }, []);

    const toggle = async (key) => {
        try {
            const newVal = !settings[key];
            const { data } = await api.put('/admin/settings', { [key]: newVal });
            setSettings(data);
        } catch (e) { console.error(e) }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow max-w-lg">
            <h1 className="text-2xl font-bold mb-6">System Settings</h1>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">Teacher Registration</span>
                    <button onClick={() => toggle('teacherRegistrationEnabled')} className={`w-12 h-6 rounded-full transition-colors ${settings.teacherRegistrationEnabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ml-1 ${settings.teacherRegistrationEnabled ? 'translate-x-6' : ''}`} />
                    </button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">Student Registration</span>
                    <button onClick={() => toggle('studentRegistrationEnabled')} className={`w-12 h-6 rounded-full transition-colors ${settings.studentRegistrationEnabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ml-1 ${settings.studentRegistrationEnabled ? 'translate-x-6' : ''}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AdminSettings;
