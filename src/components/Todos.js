import { useState } from "react";
import useAdatContext from "../context/AdatContext";
import Todo from "./Todo";

export default function Todos({ kategoria }) {
    const { tevekenysegLista, postAdat } = useAdatContext();
    const [ujTev, setUjTev] = useState("");
    const szurtLista = (tevekenysegLista || []).filter(t => t.kat_id === kategoria.id);

    const bekuld = () => {
        if (ujTev.trim() === "") return;
        postAdat({ kat_id: kategoria.id, tev_nev: ujTev, allapot: 0 });
        setUjTev("");
    };
    return (
        <div className="card m-2 p-3 shadow-sm" style={{ width: "18rem" }}>
            <h3 className="text-center">{kategoria.katnev}</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={ujTev} onChange={(e) => setUjTev(e.target.value)} placeholder="Tevékenység.." />
                <button className="btn btn-outline-secondary" onClick={bekuld}>+</button>
            </div>
            <div>
                {szurtLista.map(t => <Todo key={t.id} adat={t} />)}
            </div>
        </div>
    );
}