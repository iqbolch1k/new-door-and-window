import CustomerOpinion from "@/components/customerOpinion/CustomerOpinion"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Navbar from "@/components/navbar/Navbar"
import Products from "@/components/products/Products"
import Todorder from "@/components/toOrder/ToOrder"
function Home() {
   

    return (
        <div>
            <Navbar />
            <Header />
            <Products />
            <CustomerOpinion />
            <Todorder />
            <Footer />
        </div>
    )
}

export default Home