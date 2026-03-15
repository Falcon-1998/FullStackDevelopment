export default function Entry(props) {
    return (
        <article className="card">
            <img className="card-image" src={props.image} alt={props.alt} width="300" />
            <div className="card-details">
                <div className="card-top">
                    <p>♀︎ {props.country}</p>
                    <p><strong>Date:</strong> 15 Feb, 2024 - 18 Feb, 2024</p>
                </div>
                <h2>{props.title}</h2>
                <p><strong>Description:</strong> {props.description}</p>
            </div>
        </article>
    );
}