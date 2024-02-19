import React from 'react';
import Banner from '../../components/Banner';

function Accueil() {

    const pageTitle = "Bienvenue sur L'agence Digitale";
    
    return (

        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <div>
                <p>test</p>
            </div>
            
        </div>
    );
}
export default Accueil;