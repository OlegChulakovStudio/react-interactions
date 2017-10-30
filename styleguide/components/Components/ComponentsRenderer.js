import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentsRenderer({ children }) {
    return (
        <div className="Components">
            {children}
        </div>
    );
}
ComponentsRenderer.propTypes = {
    children: PropTypes.node.isRequired,
};