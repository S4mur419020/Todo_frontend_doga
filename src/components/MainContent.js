import react from "react";
import useAdatContext from "../context/AdatContext";
import Todos from "./Todos";

function MainContent() {
    const { kategoriakLista } = useAdatContext();

    return (
        <main className="container">
            <div className="kartya-container">
                {Array.isArray(kategoriakLista) ? (
                    kategoriakLista.map(kat => (
                        <Todos key={kat.id} kategoria={kat} />
                    ))
                ) : (
                    <p>Betöltés...</p>
                )}
            </div>
        </main>
    );
}
export default MainContent;