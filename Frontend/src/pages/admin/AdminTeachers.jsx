import { useEffect, useState } from 'react';
import api from '../../lib/axios';
import { X, Calendar, Clock, MapPin, BookOpen, Search, User, Edit2, Trash2, Check } from 'lucide-react';

const AdminTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [schedule, setSchedule] = useState([]);
    const [loadingSchedule, setLoadingSchedule] = useState(false);
    const [editSlot, setEditSlot] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const { data } = await api.get('/admin/users?role=teacher');
            setTeachers(data);
        } catch (e) { console.error(e) }
    };

    const toggleStatus = async (id, currentStatus, type) => {
        try {
            const payload = type === 'approve' ? { isApproved: !currentStatus } : { isActive: !currentStatus };
            await api.put(`/admin/users/${id}`, payload);
            fetchTeachers();
        } catch (e) { console.error(e) }
    };

    const viewSchedule = async (teacher) => {
        setSelectedTeacher(teacher);
        setLoadingSchedule(true);
        try {
            const { data } = await api.get(`/admin/timetable/teacher/${teacher._id}`);
            setSchedule(data);
        } catch (e) {
            console.error(e);
            setSchedule([]);
        } finally {
            setLoadingSchedule(false);
        }
    };

    const handleUpdate = async (id, updatedData) => {
        try {
            await api.put(`/admin/timetable/${id}`, updatedData);
            setEditSlot(null);
            viewSchedule(selectedTeacher); // Refresh
        } catch (e) { console.error(e) }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this class?')) return;
        try {
            await api.delete(`/admin/timetable/${id}`);
            viewSchedule(selectedTeacher); // Refresh
        } catch (e) { console.error(e) }
    };

    const filteredTeachers = teachers.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Header with Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#0B1C2D]">Faculty Management</h1>
                    <p className="text-gray-500 text-sm">Manage teacher accounts, approvals, and schedules.</p>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search faculty..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1C2D]/20 focus:border-[#0B1C2D] w-full md:w-72 shadow-sm transition-all"
                    />
                    <div className="absolute left-3.5 top-3.5 text-gray-400">
                        <Search size={18} />
                    </div>
                </div>
            </div>

            {/* Teacher Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTeachers.map((teacher) => (
                    <div key={teacher._id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B1C2D]/5 to-transparent rounded-bl-[100px] -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-500" />

                        <div className="relative z-10 flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-[#0B1C2D] text-[#C7A14A] flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#0B1C2D]/20">
                                    {teacher.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#0B1C2D] leading-tight mb-1">{teacher.name}</h3>
                                    <p className="text-xs text-gray-500 font-medium">{teacher.email}</p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full border ${teacher.isApproved ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-yellow-50 text-yellow-600 border-yellow-100'}`}>
                                {teacher.isApproved ? 'Active' : 'Pending'}
                            </span>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-50">
                            <button
                                onClick={() => toggleStatus(teacher._id, teacher.isApproved, 'approve')}
                                className={`py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-2 ${teacher.isApproved ? 'border-red-100 text-red-600 hover:bg-red-50' : 'bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500 shadow-md hover:shadow-lg'}`}
                            >
                                {teacher.isApproved ? 'Revoke Access' : 'Approve Account'}
                            </button>
                            <button
                                onClick={() => viewSchedule(teacher)}
                                className="py-2.5 rounded-xl text-xs font-bold bg-[#0B1C2D] text-[#F8F6F2] hover:bg-[#152e48] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-[#0B1C2D]"
                            >
                                <Calendar size={14} /> View Schedule
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTeachers.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <User size={32} className="text-gray-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">No faculty members found</h3>
                    <p className="text-gray-500 text-sm">Try adjusting your search terms.</p>
                </div>
            )}

            {/* Schedule Modal */}
            {selectedTeacher && (
                <div className="fixed inset-0 bg-[#0B1C2D]/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden animate-bounce-in flex flex-col max-h-[85vh]">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#0B1C2D] text-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                    <Calendar className="text-[#C7A14A]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">{selectedTeacher.name}'s Schedule</h3>
                                    <p className="text-[#C7A14A] text-xs font-medium uppercase tracking-wider">Weekly Timetable Management</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedTeacher(null)}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 overflow-y-auto bg-gray-50/50 flex-1">
                            {loadingSchedule ? (
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />)}
                                </div>
                            ) : schedule.length > 0 ? (
                                <div className="grid gap-4">
                                    {schedule.map((slot) => (
                                        <div key={slot._id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">

                                            {editSlot === slot._id ? (
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                                                    <div className="space-y-1">
                                                        <label className="text-xs font-bold text-gray-400 uppercase">Subject</label>
                                                        <input className="w-full border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-[#0B1C2D]" defaultValue={slot.subjectName} id={`subj-${slot._id}`} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label className="text-xs font-bold text-gray-400 uppercase">Class</label>
                                                        <input className="w-full border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-[#0B1C2D]" defaultValue={slot.className} id={`class-${slot._id}`} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label className="text-xs font-bold text-gray-400 uppercase">Room</label>
                                                        <input className="w-full border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-[#0B1C2D]" defaultValue={slot.roomNo} id={`room-${slot._id}`} />
                                                    </div>
                                                    <div className="space-y-1 lg:col-span-2">
                                                        <label className="text-xs font-bold text-gray-400 uppercase">Time Slot</label>
                                                        <div className="flex gap-2">
                                                            <input className="w-full border-gray-200 rounded-lg text-sm bg-gray-50" defaultValue={slot.startTime} id={`start-${slot._id}`} />
                                                            <input className="w-full border-gray-200 rounded-lg text-sm bg-gray-50" defaultValue={slot.endTime} id={`end-${slot._id}`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                    <div className="flex items-center gap-6">
                                                        <div className="w-16 h-16 rounded-xl bg-gray-50 flex flex-col items-center justify-center border border-gray-100 text-center">
                                                            <span className="text-[#C7A14A] font-bold text-xs uppercase tracking-widest">{slot.day.substring(0, 3)}</span>
                                                            <div className="w-8 h-1 bg-gray-200 rounded-full my-1"></div>
                                                        </div>

                                                        <div className="space-y-1">
                                                            <h4 className="font-bold text-[#0B1C2D] text-lg">{slot.subjectName}</h4>
                                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                                <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#C7A14A]" /> {slot.startTime} - {slot.endTime}</span>
                                                                <span className="flex items-center gap-1.5"><User size={14} className="text-gray-400" /> {slot.className}</span>
                                                                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-400" /> Room {slot.roomNo}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="mt-4 md:mt-0 flex items-center justify-end gap-2 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-6">
                                                {editSlot === slot._id ? (
                                                    <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
                                                        <button
                                                            onClick={() => handleUpdate(slot._id, {
                                                                subjectName: document.getElementById(`subj-${slot._id}`).value,
                                                                className: document.getElementById(`class-${slot._id}`).value,
                                                                roomNo: document.getElementById(`room-${slot._id}`).value,
                                                                startTime: document.getElementById(`start-${slot._id}`).value,
                                                                endTime: document.getElementById(`end-${slot._id}`).value,
                                                            })}
                                                            className="flex-1 md:flex-none px-4 py-2 bg-[#0B1C2D] text-white rounded-lg hover:bg-[#152e48] text-sm font-semibold flex items-center gap-2 justify-center"
                                                        >
                                                            <Check size={14} /> Save
                                                        </button>
                                                        <button
                                                            onClick={() => setEditSlot(null)}
                                                            className="flex-1 md:flex-none px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 text-sm font-semibold"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="flex gap-2 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                        <button
                                                            onClick={() => setEditSlot(slot._id)}
                                                            className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors shadow-sm"
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(slot._id)}
                                                            className="w-10 h-10 rounded-full bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors shadow-sm"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar size={32} className="text-gray-400" />
                                    </div>
                                    <p className="text-gray-500 font-medium">No schedule found for this teacher.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AdminTeachers;
