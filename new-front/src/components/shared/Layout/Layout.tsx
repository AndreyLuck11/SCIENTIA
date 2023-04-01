import Header from "@/components/shared/Layout/Header";
import Footer from "@/components/shared/Layout/Footer";


function Layout({children}: any) {

    return (

        <div className='content'>
            <Header />
            {children}
            <Footer/>
        </div>

    );
}

export default Layout;


