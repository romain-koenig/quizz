import React from 'react';
import PropTypes from 'prop-types';

const Players = props => {
  if (! props.players || props.players.length === 0 ) {
    return null;
  }
  
  return (
    <div>

      {props.players.lenght > 0 ? <h2>Joueurs</h2> : ""}

      <ul>
        {
          props.players.map(player => {
            return <li>{player}</li>
          })
        }
      </ul>
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array
};

export default Players;