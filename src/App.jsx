

/*function App() {
  return (
    <>
      <h1>Hello World</h1>
      <LoadCountries></LoadCountries>
    </>
  )
}*/

/*function LoadCountries(){
  const [countries, setCountries] = useState([])
  console.log(countries);
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data=> console.log(data))
  },[])
}*/


import './App.css'
import MainContent from './components/maincontent/Maincontent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
function App() {


  return (
    <>
      <Header></Header>
      <div className="container">
        <MainContent></MainContent>
      </div>
      <Footer></Footer>

    </>
  )
}








export default App