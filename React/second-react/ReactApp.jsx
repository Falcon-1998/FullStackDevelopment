import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { entries as data} from "./components/data/Entries";

export default function ReactApp() {    
    return (
      <div className="App">
        <Header />
        <Main data={data}/>
        <Footer />
      </div>
    );
}