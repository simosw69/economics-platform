import { useState, useEffect } from "react";

export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const toast = ({ title, description, duration = 3000 }) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { id, title, description };

        setToasts((prev) => [...prev, newToast]);

        // In a real implementation we would dispach to a context/store
        // For now we just console log as a placeholder if no Toaster is set up
        console.log("Toast:", title, description);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    };

    return { toast, toasts };
};
