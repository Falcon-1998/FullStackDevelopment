import Entry from "./Entry";

export default function Main(props) {    
    
    return (
        <main className="main">
           {props.data.map((entry) => (
                <Entry key={entry.id} image={entry.image} alt={entry.alt} country={entry.country} title={entry.title} description={entry.description}/>
            ))}
        </main>
    );
}