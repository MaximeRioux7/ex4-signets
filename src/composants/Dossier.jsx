import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import couvertureParDefaut from '../images/couverture.webp';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {
  const [menuOuvert, setMenuOuvert] = React.useState(false);

  function OuvrirMenu(event){ setMenuOuvert(event.currentTarget); }
  function FermerMenu(){ setMenuOuvert(null); }

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={(couverture?couverture:couvertureParDefaut)} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small" onClick={OuvrirMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={menuOuvert}
        keepMounted
        open={Boolean(menuOuvert)}
        onClose={FermerMenu}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={FermerMenu}>Modifier</MenuItem>
        <MenuItem onClick={FermerMenu}>Supprimer</MenuItem>
      </Menu>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}