import React from 'react'

import './styles.scss';

const SectionTitle = (props) => {
    return (
        <div className="header" data-test="header">
            {props.children}
        </div>
    )
}

export default SectionTitle
