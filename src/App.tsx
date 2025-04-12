import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ProdutoList from './components/Produto/ProdutoList'
import './index.css'
import ResumoCarrinho from './components/Carrinho/ResumoCarrinho'
import SobreNos from './components/SobreNos/SobreNos'
import Footer from './components/Footer/Footer'
import FormContato from './components/Contato/Contato'
import Localizacao from './components/Mapa/ViewMapa'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ProdutoList />
      <ResumoCarrinho />
      <SobreNos />
      <FormContato />
      <Localizacao />
      <Footer />
    </>
  )
}

export default App;