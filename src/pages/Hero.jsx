import '../styles/Hero.css'
import heroImage from '../assets/images/Illustration.png'

function Hero() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>Lessons and insights</h1>
                    <div className="green-text">
                        from 8 years
                    </div>
                    <div className="question-text">
                        Where to grow your business as a photographer: site or social media?
                    </div>

                    <button className="btnRegister">
                        Register
                    </button>
                </div>
                <div className="hero-img">
                    <img src={heroImage} alt="Illustration" />
                </div>
            </div>

        </>
    )
}

export default Hero