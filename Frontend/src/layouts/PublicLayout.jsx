
import { Outlet } from 'react-router-dom';
import Header from '../Section/Header';
import ScrollToTop from '../components/ScrollToTop';

const PublicLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;
