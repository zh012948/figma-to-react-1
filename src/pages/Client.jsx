import '../styles/Client.css'
import ClientCard from '../components/ClientCard'
import logo1 from '../assets/images/clients/logo1.svg'
import logo2 from '../assets/images/clients/logo2.svg'
import logo3 from '../assets/images/clients/logo3.svg'
import logo4 from '../assets/images/clients/logo4.svg'
import logo5 from '../assets/images/clients/logo5.svg'
import logo6 from '../assets/images/clients/logo6.svg'
import logo7 from '../assets/images/clients/logo7.svg'
import bank from '../assets/images/bank.png'
import people from '../assets/images/people.png'
import club from '../assets/images/club.png'

import Marquee from 'react-fast-marquee'

function Client() {
    return (
        <>
            <div className="client-container">
                <p>Our Clients</p>
                <span>We have been working with some Fortune 500+ clients</span>

                <div className="icons">
                    <Marquee speed={150} gradient={false}>
                        <img src={logo1} alt="logo1" className='client-logo' />
                        <img src={logo2} alt="logo2" className='client-logo' />
                        <img src={logo3} alt="logo3" className='client-logo' />
                        <img src={logo4} alt="logo4" className='client-logo' />
                        <img src={logo5} alt="logo5" className='client-logo' />
                        <img src={logo6} alt="logo6" className='client-logo' />
                        <img src={logo7} alt="logo7" className='client-logo' />
                    </Marquee>
                </div>

                <p className='community'>Manage your entire community <br /> in a single system</p>
                <span>Who is Nextcent suitble for?</span>

                <div className="card-container">

                    <ClientCard image={people} title="Membership Organisations" content="Our membership management software provides full automation of membership renewals and payments" />
                    <ClientCard image={bank} title="National Associations" content="Our membership management software provides full automation of membership renewals and payments" />
                    <ClientCard image={club} title="Clubs And Groups" content="Our membership management software provides full automation of membership renewals and payments" />

                </div>
            </div >
        </>
    )
}
export default Client