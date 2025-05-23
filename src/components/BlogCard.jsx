import '../styles/BlogCard.css'
function BlogCard(props) {
    return (
        <>
            <div className="b-container">
                <div className="img-container">
                    <img src={props.image} alt="Image" />
                </div>
                <div className="sub-card">
                    <p className="text">{props.text}</p>
                    <a href="#">Readmore ➡ </a>
                </div>
            </div>

        </>
    )
}

export default BlogCard