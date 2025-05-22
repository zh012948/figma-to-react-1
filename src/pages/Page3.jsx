import '../styles/Page3.css'
import upperImage from '../assets/images/rafiki.svg'
import people from '../assets/images/people.png'
import club from '../assets/images/club.png'
import bank from '../assets/images/bank.png'

function Page3() {
    return (
        <>
            <div className="page-container">
                <div className="upper-container">
                    <div className="image">
                        <img src={upperImage} alt="upper Image" />
                    </div>

                    <div className="content">
                        <div className="title">
                            <p>The unseen of spending three <br /> years at Pixelgrade</p>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis voluptatibus dicta tenetur quas rem eius, rerum doloremque. Magnam ut quam iste voluptate molestiae tenetur, perferendis animi doloremque autem modi non atque mollitia nesciunt id alias eius quia et minus fugit. Ipsam sed esse minus qui ea amet rerum dicta!</p>
                        </div>
                        <button className='btnLearnMore'>Learn More</button>
                    </div>
                </div>


                <div className="lower-container">

                    <div className="info">
                        <span className='info1'>Helping a local</span><br />
                        <span className='info2'>business reinvent itself</span><br />
                        <span className='info3'>We reached here with our hard work and dedication</span><br />
                    </div>

                    <div className="member-container">
                        {/* Card 1 */}
                        <div className="member-card">
                            <img src={people} alt="people" />
                            <div>
                                <p className="count">2,245,341</p>
                                <span className="text-member">Members</span>
                            </div>
                        </div>

                        {/* Card 2 */}

                        <div className="member-card">
                            <img src={bank} alt="bank" />
                            <div>
                                <p className="count">828,867</p>
                                <span className="text-member">Members</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="member-card">
                            <img src={club} alt="club" />
                            <div>
                                <p className="count">46,328</p>
                                <span className="text-member">Members</span>
                            </div>
                        </div>


                        {/* Card 4 */}
                        <div className="member-card">
                            <img src={people} alt="people" />
                            <div>
                                <p className="count">828,867</p>
                                <span className="text-member">Members</span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Page3