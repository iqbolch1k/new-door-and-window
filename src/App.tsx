import CustomerOpinion from "./components/customerOpinion/CustomerOpinion"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Todorder from "./components/toOrder/ToOrder"

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CustomerOpinion/>
      <Todorder/>
      <Footer/>
    </div>
  )
}

export default App