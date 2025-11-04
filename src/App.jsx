import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='bg-gray-600 '>
      <Header />
      <Home />
      <Footer title= 'Footer'/>
    </div>
  )
}

export default App;