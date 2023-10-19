/* eslint-disable react/prop-types */
import './country.css'

const Country = (props) => {
    console.log(props);

    const {png} = props.sCountry.flags;
    const {common} = props.sCountry.name;
    const {population} = props.sCountry;
    const {status} = props.sCountry;
    const {official} = props.sCountry.name;
   return(
    <>

    <div className="s-Item">
        <img src={png} alt="" />
        <div className='item-content'>
            <h3>Name : <span>{common}</span></h3>
            <h3>Population : <span>{population}</span></h3>
            <h3>Status : <span>{status}</span></h3>
            <h3>Official : <span>{official}</span></h3>
        </div>
    </div>


    </>

   );
    
}

export default Country