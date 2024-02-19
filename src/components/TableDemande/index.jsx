import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

function DemandesTable({ demandes }) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnName);
      setSortOrder('asc');
    }
  };

  const sortedDemandes = [...demandes].sort((a, b) => {
    if (sortColumn) {
      if (sortOrder === 'asc') {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    } else {
      return 0;
    }
  });

  const getSortIndicator = (columnName) => {
    if (sortColumn === columnName) {
      return sortOrder === 'asc' ? faSortUp : faSortDown;
    } else {
      return faSort;
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('nom')}>
            Nom <FontAwesomeIcon icon={getSortIndicator('nom')} />
          </th>
          <th onClick={() => handleSort('prenom')}>
            Prénom <FontAwesomeIcon icon={getSortIndicator('prenom')} />
          </th>
          <th onClick={() => handleSort('codePostal')}>
            Code Postal <FontAwesomeIcon icon={getSortIndicator('codePostal')} />
          </th>
          <th onClick={() => handleSort('ville')}>
            Ville <FontAwesomeIcon icon={getSortIndicator('ville')} />
          </th>
          <th onClick={() => handleSort('adresse')}>
            Adresse <FontAwesomeIcon icon={getSortIndicator('adresse')} />
          </th>
          <th onClick={() => handleSort('telephone')}>
            Numéro de téléphone <FontAwesomeIcon icon={getSortIndicator('telephone')} />
          </th>
          <th onClick={() => handleSort('numeroIntervention')}>
            Numéro d'intervention <FontAwesomeIcon icon={getSortIndicator('numeroIntervention')} />
          </th>
          <th onClick={() => handleSort('typeIntervention')}>
            Type d'intervention <FontAwesomeIcon icon={getSortIndicator('typeIntervention')} />
          </th>
          <th onClick={() => handleSort('objet')}>
            Objet <FontAwesomeIcon icon={getSortIndicator('objet')} />
          </th>
          <th onClick={() => handleSort('statut')}>
            Statut de l'intervention <FontAwesomeIcon icon={getSortIndicator('statut')} />
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedDemandes.map((demande) => (
          <tr key={demande.id}>
            <td>{demande.nom}</td>
            <td>{demande.prenom}</td>
            <td>{demande.codePostal}</td>
            <td>{demande.ville}</td>
            <td>{demande.adresse}</td>
            <td>{demande.telephone}</td>
            <td>{demande.numeroIntervention}</td>
            <td>{demande.typeIntervention}</td>
            <td>{demande.objet}</td>
            <td>{demande.statut}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DemandesTable;
