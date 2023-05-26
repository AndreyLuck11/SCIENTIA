import SimpleBar from "simplebar-react";
import Header from "@/components/shared/Layout/Header";
import Footer from "@/components/shared/Layout/Footer";


function Layout({ children }: any) {

    return (

        <SimpleBar style={{ maxHeight: "100vh" }}>
            <div className="content">
                <Header />
                {children}
                <Footer />
            </div>
        </SimpleBar>

    );
}

export default Layout;


