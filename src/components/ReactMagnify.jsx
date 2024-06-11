import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

// EnlargedImage component to render the enlarged image
const EnlargedImage = ({ isPortalRendered }) => {
    // Placeholder image URL
    const imageUrl = 'https://via.placeholder.com/300';

    if (!isPortalRendered) {
        return (
            <img src={imageUrl} alt="Enlarged Image" />
        );
    } else {
        // In case you're using portal rendering
        return null;
    }
};

// RenderEnlargedImage component to handle rendering logic
const RenderEnlargedImage = ({ isPortalEnabledForTouch = false, isTouchDetected = false, portalId = 'portal' }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [portalElement, setPortalElement] = useState(null);

    useEffect(() => {
        setIsMounted(true);

        if (isPortalRendered()) {
            const portalElem = document.getElementById(portalId);
            if (portalElem) {
                setPortalElement(portalElem);
            } else {
                // console.error(`Portal container element with id "${portalId}" not found.`);
            }
        }
    }, [portalId]);

    const isPortalIdImplemented = !!portalId;

    const isPortalRendered = () => {
        if (!isPortalIdImplemented) {
            return false;
        }

        if (!isTouchDetected) {
            return true;
        }

        if (isPortalEnabledForTouch) {
            return true;
        }

        return false;
    };

    const compositProps = objectAssign({}, { isPortalRendered });

    if (!isMounted) {
        return null;
    }

    if (isPortalRendered()) {
        if (portalElement) {
            return ReactDOM.createPortal(
                <EnlargedImage {...compositProps} />,
                portalElement
            );
        } else {
            // console.error(`Target container is not a DOM element.`);
            return null;
        }
    }

    return (
        <EnlargedImage {...compositProps} />
    );
};

RenderEnlargedImage.propTypes = {
    isPortalEnabledForTouch: PropTypes.bool,
    isTouchDetected: PropTypes.bool,
    portalId: PropTypes.string
};

// DemoRenderEnlargedImage component to demonstrate usage
const DemoRenderEnlargedImage = () => {
    const [isTouchDetected, setIsTouchDetected] = useState(false);

    useEffect(() => {
        // Simulate touch detection after 1 second
        const timeout = setTimeout(() => {
            setIsTouchDetected(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <h1>Demo RenderEnlargedImage</h1>
            <RenderEnlargedImage
                isPortalEnabledForTouch={true}
                isTouchDetected={isTouchDetected}
            />
            <div id="portal" style={{ height: '300px', width: '300px', border: '1px solid black', margin: '20px' }}>
                Portal Container
            </div>
        </div>
    );
};

export default DemoRenderEnlargedImage;
