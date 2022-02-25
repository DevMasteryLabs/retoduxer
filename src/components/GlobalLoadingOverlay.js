import LoadingOverlay from 'react-loading-overlay';

import React from 'react'

export default function GlobalLoadingOverlay() {
    return (
        <LoadingOverlay
            active={true}
            spinner
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: 'rgba(13, 110, 253, 0.5)',
                    height: '100vh'
                })
            }}
        />
    )
}


