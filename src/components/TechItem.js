import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto'
}; // caso o usuario não tenha colocado um nome ele via usar o default

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired // mostra erros caso o dev não passe a funcao
};

export default TechItem;
