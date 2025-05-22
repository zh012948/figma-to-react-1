import '../styles/ClientCard.css'

function ClientCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.image} className='card-image' alt="image" />
                <h3 className='card-title'>{props.title}</h3>
                <p className='card-content'>{props.content}</p>
            </div>
        </>
    )
}


export default ClientCard