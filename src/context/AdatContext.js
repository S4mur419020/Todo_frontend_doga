import { createContext, useContext, useState, useEffect } from "react";
import api from "../serve/api";

const AdatContext = createContext();

export const AdatProvider = ({ children }) => {
    const [kategoriakLista, setKategoriakLista] = useState([]);
    const [tevekenysegekLista, setTevekenysegekLista] = useState([]);
    const getAdat = async () => {
        try {
            const katResponse = await api.get("/api/kategoriak")
            const tevResponse = await api.get("/api/tevekenysegek")
            setKategoriakLista(katResponse.data);
            setTevekenysegekLista(tevResponse.data);

        } catch (error) { console.log("Hiba: ", error); }
    }
    const postAdatok = async (adat) => {
        await api.post("/api/tevekenysegek", adat);
        getAdat();
    }
    const deleteAdatok = async (id) => {
        await api.delete(`/api/tevekenysegek/${id}`);
        getAdat();
    }
    const updateAdatok = async (id, adat) => {
        await api.put(`/api/tevekenysegek/${id}`, adat);
        getAdat();
    }
    useEffect(() => {
        getAdat();
    }, []);
    return (
        <AdatContext.Provider value={{ kategoriakLista, tevekenysegekLista, postAdatok, deleteAdatok, updateAdatok }}>
            {children}
        </AdatContext.Provider>
    );
};
export default function useAdatContext() {
    return useContext(AdatContext);
}