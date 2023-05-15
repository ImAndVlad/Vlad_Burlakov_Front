import './App.css';
import Card from "./Components/Card/Card"

const { getData } = require("./db/db");
const photos = getData();


function App() {
    return (
        <>
            <h1 className="heading">Photos</h1>
            <div className="three-col-grid">
                <div className="cards__container">
                    {photos.map((photo) => {
                        return <Card photo={photo}/>;
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
