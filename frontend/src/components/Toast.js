import { Snackbar, Alert } from '@mui/material'
import { useState } from 'react'

let showToastExternal

export const Toast = () => {
    const [toast, setToast] = useState({
        open: false,
        message: '',
        severity: 'info',
    })

    showToastExternal = (message, severity = 'info') => {
        setToast({ open: true, message, severity })
    }

    const handleClose = () => {
        setToast({ ...toast, open: false })
    }

    return (
        <Snackbar
            open={toast.open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert severity={toast.severity} onClose={handleClose}>
                {toast.message}
            </Alert>
        </Snackbar>
    )
}

export const showToast = (message, severity) => {
    if (showToastExternal) showToastExternal(message, severity)
}
