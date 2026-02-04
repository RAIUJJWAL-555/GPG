import { useEffect, useState } from 'react';
import api from '../../lib/axios';
import { BookOpen, Search, Bell } from 'lucide-react';

const TeacherNotices = () => {
    const [notices, setNotices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const { data } = await api.get('/common/notices');
                setNotices(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchNotices();
    }, []);

    const filteredNotices = notices.filter(n =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1C2D] text-white p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C7A14A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-10 -mb-10"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Notice Board</h1>
                        <p className="text-gray-400 text-sm max-w-xl">Stay updated with the latest announcements and circulars.</p>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <input
                    type="text"
                    placeholder="Search notices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1C2D]"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Notices Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {loading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="bg-white p-6 rounded-3xl h-64 animate-pulse border border-gray-100">
                            <div className="h-4 bg-gray-100 rounded w-1/3 mb-4"></div>
                            <div className="h-6 bg-gray-100 rounded w-3/4 mb-4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-100 rounded"></div>
                                <div className="h-4 bg-gray-100 rounded"></div>
                                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                            </div>
                        </div>
                    ))
                ) : filteredNotices.length > 0 ? (
                    filteredNotices.map(notice => (
                        <div key={notice._id} className="group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B1C2D]/5 rounded-full -mr-16 -mt-16 group-hover:bg-[#C7A14A]/10 transition-colors duration-500"></div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-emerald-100">
                                        Notice
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400 font-mono">
                                        {new Date(notice.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </div>

                                <h3 className="font-bold text-xl text-[#0B1C2D] mb-3 group-hover:text-[#C7A14A] transition-colors duration-300">{notice.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-4">{notice.description}</p>

                                {notice.attachment && (
                                    <a
                                        href={`https://gpg-backend-cpwk3e1wu-rai-7203e9db.vercel.app${notice.attachment}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1C2D] hover:text-[#C7A14A] uppercase tracking-wider group/link transition-colors mt-auto"
                                    >
                                        View Attachment
                                        <BookOpen size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-gray-400">
                        <Bell size={48} className="mx-auto mb-4 opacity-20" />
                        <p>No notices found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeacherNotices;
