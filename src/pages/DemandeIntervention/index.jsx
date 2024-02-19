import React from 'react';
import Banner from '../../components/Banner';
import DevisForm from'../../components/DevisForm';
import ImgDevis from '../../assets/imgDevis.jpg';

function Devis() {

    const pageTitle = "Intervention artisan à Thonon";

    const questions = [
      {
        id: '1',
        question: "De quel type de demande s'agit-il ?",
        options: ["Demande d'intervention", 'Demande de devis'],
      },
      {
        id: '2',
        question: "S'agit-il d'une demande de dépannage?",
        options: ['Oui', 'Non'],
      },
      {
        id: '3',
        question: 'Quel domaine concerne votre demande?',
        options: ['Plomberie', 'Chauffage', 'Pompe à chaleur'],
      },
      
      // Ajoutez d'autres questions selon les besoins du client
    ];
    

    return (
      
        <div className='main'>
          <Banner pageTitle={pageTitle}/>
          <section>
            <h2>Devis d'intervention en ligne : Simple, Rapide et Efficace</h2>
            <p className='section-text'>Effectue</p>
            <div className='container__devis'>
              <div className='devis__content'>
                <div className='devis__content-text'>
                  <p>Vous pouvez maintenant faire vos demandes demande d'intervention depuis votre smartphone, tablette ou ordinateur en quelques clics.</p>
                  <p>Pour cela, il vous suffit de remplir le formulaire de demande d'intervention.</p>
                  <p>Vous pouvez joindre une photo de votre panne ou les plans de votre projet.</p>
                  <p>Nous étudierons votre demande dans les plus brefs délais.</p>
                </div>
                <img className='devis__content-img' src={ImgDevis} alt='Plan maison'/>
              </div>

              <DevisForm id='devis__form-anchor' className='devis__form' questions={questions} />
            </div>
          </section>

        </div>
    );
}
export default Devis;          