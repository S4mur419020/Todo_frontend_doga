import useAdatContext from "../context/AdatContext";

export default function Todo({ adat }) {
    const { updateAdatok, deleteAdatok } = useAdatContext();
    const stilus = adat.allapot === 1 ? "bg-success text-white" : "bg-light";
    const szovegStilus = adat.allapo === 1 ? "text-decoration-line-trough" : "";

    return (
        <div className={`d-flex justify-content-between align_item_center p-3 mb-2 border rounded todo-item ${stilus}`}>
            <span className={szovegStilus}>{adat.tev_nev}</span>
            <div>
                <button
                    className="btn btn-sm"
                    onClick={() => updateAdatok(adat.id, { ...adat, allapot: 1 })}
                    disabled={adat.allapot === 1}>
                    {adat.allapot === 1 ? "✅" : "❌"}
                </button>
                <button className="btn btn-sm text-danger" onClick={() => deleteAdatok(adat.id)}>
                    <span style={{ fontWeight: "bold", fintSize: "1.2rem" }}>X</span>
                </button>
            </div>
        </div>
    );
}