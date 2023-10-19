import { useEffect, useState } from 'react';
import Country from '../Components/Country';
import './maincontent.css'
const Maincontent = () => {

    const [Countrys, setCountry] = useState([]);
    useEffect( () => {

        fetch('https://restcountries.com/v3.1/all')
        .then(Responce => Responce.json())
        .then(sData => setCountry(sData))


    },[]);



    return (
        <div className='item-Head'>

            {
                Countrys.map(sCountry => <Country 
                    key={sCountry.cca2}
                    /* name = {sCountry.name.common}
                    population = {sCountry.population}
                    flags = {sCountry.flags} */
                    sCountry = {sCountry}
                ></Country>)
            }

            
        </div>
    );
};

export default Maincontent;