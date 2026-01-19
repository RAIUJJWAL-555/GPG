import { Link } from 'react-router-dom';

export default function Btn() {
    return (
        <>
            <style>{`
                @keyframes shine {
                    0% {
                        background-position: 0% 50%;
                    }
            
                    50% {
                        background-position: 100% 50%;
                    }
            
                    100% {
                        background-position: 0% 50%;
                    }
                }
            
                .button-bg {
                    background: conic-gradient(from 0deg, #C7A14A, #0B1C2D, #0B1C2D, #C7A14A, #0B1C2D, #0B1C2D, #0B1C2D, #C7A14A);
                    background-size: 300% 300%;
                    animation: shine 6s ease-out infinite;
                }
            `}</style>
            <Link to="/events">
                <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                    <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium" style={{ backgroundColor: '#0B1C2D' }}>
                        View Full Gallery
                    </button>
                </div>
            </Link>
        </>
    );
}