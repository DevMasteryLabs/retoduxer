import LoadingOverlay from 'react-loading-overlay';

import React from 'react'
import { useSelector } from 'react-redux';

export default function GlobalLoadingOverlay() {
    const loading = useSelector(state => state.feedback.loading)
    return (
        <LoadingOverlay
            active={loading}
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


