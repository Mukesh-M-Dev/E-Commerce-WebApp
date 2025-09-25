import React from 'react'

const AnchorElements = ({ showPage,setActiveAnchor, params, activeLink }) => {
  function handleClick(e) {
    e.preventDefault();
    setActiveAnchor(params.linktag);
    showPage(params.linktag);
  }

  const className = params.linktag === activeLink ? 'nav-link active' : 'nav-link';

  return params.access ? (
    <a href="#" className={className} onClick={handleClick} data-page={params.displayName}>
      {params.displayName}
    </a>
  ) : null;
};
export default AnchorElements