import { useEffect, useState } from "react";
import { createContext } from "react";






export let StockContext = createContext()

export default function StockContextProvider({ children }) {



    const [data, setData] = useState(
        [
            { id: 1, page: 1, image: "https://via.placeholder.com/50", name: "Paracetamol 500mg", code: "MED-001", quantity: 150, unitPrice: 15.0, category: "Pain Relief", expiryDate: "2026-12-31", status: "In Stock" },
            { id: 2, page: 1, image: "https://via.placeholder.com/50", name: "Amoxicillin 500mg", code: "MED-002", quantity: 8, unitPrice: 45.0, category: "Antibiotics", expiryDate: "2025-08-15", status: "Low Stock" },
            { id: 3, page: 1, image: "https://via.placeholder.com/50", name: "Ibuprofen 200mg", code: "MED-003", quantity: 0, unitPrice: 10.0, category: "Pain Relief", expiryDate: "2024-10-10", status: "Out of Stock" },
            { id: 4, page: 1, image: "https://via.placeholder.com/50", name: "Cough Syrup 100ml", code: "MED-004", quantity: 25, unitPrice: 35.0, category: "Cold & Flu", expiryDate: "2025-02-28", status: "Expiring Soon" },
            { id: 5, page: 1, image: "https://via.placeholder.com/50", name: "Vitamin C 500mg", code: "MED-005", quantity: 200, unitPrice: 20.0, category: "Supplements", expiryDate: "2027-05-20", status: "In Stock" },

            { id: 6, page: 2, image: "https://via.placeholder.com/50", name: "Aspirin 100mg", code: "MED-006", quantity: 50, unitPrice: 12.0, category: "Pain Relief", expiryDate: "2026-03-15", status: "In Stock" },
            { id: 7, page: 2, image: "https://via.placeholder.com/50", name: "Cetirizine 10mg", code: "MED-007", quantity: 0, unitPrice: 8.0, category: "Allergy", expiryDate: "2025-07-10", status: "Out of Stock" },
            { id: 8, page: 2, image: "https://via.placeholder.com/50", name: "Loratadine 10mg", code: "MED-008", quantity: 30, unitPrice: 9.0, category: "Allergy", expiryDate: "2025-11-20", status: "Low Stock" },
            { id: 9, page: 2, image: "https://via.placeholder.com/50", name: "Metformin 500mg", code: "MED-009", quantity: 120, unitPrice: 25.0, category: "Diabetes", expiryDate: "2027-01-01", status: "In Stock" },
            { id: 10, page: 2, image: "https://via.placeholder.com/50", name: "Omeprazole 20mg", code: "MED-010", quantity: 70, unitPrice: 18.0, category: "Stomach", expiryDate: "2026-08-18", status: "In Stock" },

            { id: 11, page: 3, image: "https://via.placeholder.com/50", name: "Insulin 10ml", code: "MED-011", quantity: 5, unitPrice: 200.0, category: "Diabetes", expiryDate: "2025-03-30", status: "Low Stock" },
            { id: 12, page: 3, image: "https://via.placeholder.com/50", name: "Amoxicillin 250mg", code: "MED-012", quantity: 100, unitPrice: 22.0, category: "Antibiotics", expiryDate: "2026-06-12", status: "In Stock" },
            { id: 13, page: 3, image: "https://via.placeholder.com/50", name: "Prednisone 5mg", code: "MED-013", quantity: 0, unitPrice: 15.0, category: "Anti-inflammatory", expiryDate: "2024-12-05", status: "Out of Stock" },
            { id: 14, page: 3, image: "https://via.placeholder.com/50", name: "Doxycycline 100mg", code: "MED-014", quantity: 60, unitPrice: 30.0, category: "Antibiotics", expiryDate: "2025-09-15", status: "Low Stock" },
            { id: 15, page: 3, image: "https://via.placeholder.com/50", name: "Vitamin D 1000IU", code: "MED-015", quantity: 180, unitPrice: 25.0, category: "Supplements", expiryDate: "2027-12-31", status: "In Stock" },

            { id: 16, page: 4, image: "https://via.placeholder.com/50", name: "Hydrocortisone Cream", code: "MED-016", quantity: 15, unitPrice: 40.0, category: "Skin Care", expiryDate: "2025-05-20", status: "Low Stock" },
            { id: 17, page: 4, image: "https://via.placeholder.com/50", name: "Lisinopril 10mg", code: "MED-017", quantity: 0, unitPrice: 18.0, category: "Blood Pressure", expiryDate: "2024-11-10", status: "Out of Stock" },
            { id: 18, page: 4, image: "https://via.placeholder.com/50", name: "Atorvastatin 20mg", code: "MED-018", quantity: 90, unitPrice: 35.0, category: "Cholesterol", expiryDate: "2026-04-25", status: "In Stock" },
            { id: 19, page: 4, image: "https://via.placeholder.com/50", name: "Salbutamol Inhaler", code: "MED-019", quantity: 25, unitPrice: 120.0, category: "Respiratory", expiryDate: "2025-06-30", status: "Expiring Soon" },
            { id: 20, page: 4, image: "https://via.placeholder.com/50", name: "Ranitidine 150mg", code: "MED-020", quantity: 40, unitPrice: 20.0, category: "Stomach", expiryDate: "2026-09-15", status: "In Stock" },
        ]
    )

    const getTotalForAllMedicines = () => {
        return data.reduce((sum, med) => {
            return sum + (med.quantity * med.unitPrice);
        }, 0);
    };

    const [lowStock, setLowStock] = useState([])
    function getLowStock() {
        const newData = data.filter((low) => low.status === 'Low Stock')
        setLowStock(newData)
    }

    const [outStock, setOutStock] = useState([])
    function getOutStock() {
        const newData = data.filter((out) => out.status === 'Out of Stock')
        setOutStock(newData)
    }

    const [expiringDate, setExpiringDate] = useState([])
    function getExpiringDate() {
        const newData = data.filter((expiring) => expiring.status === 'Expiring Soon')
        setExpiringDate(newData)
    }

    useEffect(() => {
        getLowStock()
        getOutStock()
        getExpiringDate()
    }, [data])
    return <StockContext.Provider value={{ data, setData, lowStock, setLowStock, expiringDate, setExpiringDate, outStock, setOutStock,getTotalForAllMedicines }}>
        {children}
    </StockContext.Provider>
}