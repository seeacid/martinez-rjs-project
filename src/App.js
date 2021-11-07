import './App.css';
import { Header } from "./conponents/header/Header"
import {ItemListContainer} from "./conponents/itemListContainer/itemListContainer"

function App() {
    return (
        <>
            <Header />

            <ItemListContainer Name="Bienvenidos" />
        </>
    );
}

export default App;