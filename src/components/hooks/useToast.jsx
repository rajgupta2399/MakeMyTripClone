// src/components/hooks/use-toast.js
"use client";
import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const showToast = (message) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000); // Auto-dismiss after 3 seconds
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {toast && <div className="toast">{toast}</div>}{" "}
            {/* Style this as needed */}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
