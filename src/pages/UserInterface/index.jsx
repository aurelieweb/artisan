import React from 'react';
import TableDemande from '../../components/TableDemande';
import Banner from '../../components/Banner';

function UserInterface() {
    // Exemple de données de demande
    const demandes = [
        {
            id: 1,
            nom: 'Dupont',
            prenom: 'Jean',
            codePostal: '75001',
            ville: 'Paris',
            adresse: '10 Rue de la Paix',
            telephone: '0123456789',
            numeroIntervention: '123456',
            typeIntervention: 'Plomberie',
            objet: 'Fuite d\'eau',
            statut: 'En attente',
        },
        {
            id: 2,
            nom: 'Mormot',
            prenom: 'Jean',
            codePostal: '75001',
            ville: 'Thonon',
            adresse: '10 Rue de la Paix',
            telephone: '0123456789',
            numeroIntervention: '234567',
            typeIntervention: 'Plomberie',
            objet: 'Fuite d\'eau',
            statut: 'A facturer',
        },
        // Ajoutez d'autres demandes si nécessaire
    ];

    return (
        <div className='main'>
            <Banner />
            <div className='container__table'>
                <p className='container_table-title'>Demandes d'intervention</p>
                <TableDemande demandes={demandes} />
            </div>
        </div>
    );
}

export default UserInterface;
