import personIcon from '../../public/images/icon-person.svg'
import cogIcon from '../../public/images/icon-cog.svg'
import chartIcon from '../../public/images/icon-chart.svg'
import kadyAvatar from '../../public/images/avatar-kady.jpg'
import aiyshaAvatar from '../../public/images/avatar-aiysha.jpg'
import arthurAvatar from '../../public/images/avatar-arthur.jpg'
import decoImg from '../../public/images/bg-pattern-home-2.svg'

export function HomePage() {
    return (
        <div className="main-layout full home-page">
            <section className="main-layout full hero">
                <div className="section-container">
                    <h2>Find the <br></br>best <mark>talent</mark></h2>
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                    <img className='special-bg' src={decoImg}></img>
                </div>
            </section>

            <section className="main-layout full highlights">
                <div className="section-container">
                    <h3>Build & manage distributed teams like no one else.</h3>
                    <div className='content'>
                        <div>
                            <img src={personIcon} alt="person icon" style={{ width: '50px' }} />
                            <h4 className='title'>Experienced Individuals</h4>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                        <div>
                            <img src={cogIcon} alt="cog icon" style={{ width: '50px' }} />
                            <h4 className='title'>Easy to Implement</h4>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                        <div>
                            <img src={chartIcon} alt="chart icon" style={{ width: '50px' }} />
                            <h4 className='title'>Enhanced Productivity</h4>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='main-layout full testimonials'>
                <div className="section-container">

                    <h3>Delivering real results for top companies. Some of our <mark>success stories.</mark></h3>
                    <div>
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h4 className='name'>Kady Baker</h4>
                        <img src={kadyAvatar} alt="kady avatar" style={{ width: '50px' }} />
                    </div>
                    <div>
                        <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h4 className='name'>Aiysha Reese</h4>
                        <img src={aiyshaAvatar} alt="kady avatar" style={{ width: '50px' }} />
                    </div>
                    <div>
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <h4 className='name'>Arthur Clarke</h4>
                        <img src={arthurAvatar} alt="kady avatar" style={{ width: '50px' }} />
                    </div>
                </div>
            </section>

            <section className='main-layout full call-to-action'>
                <div className="section-container">

                    <h3>Ready to get started?</h3>
                    <button className='btn'>contact us</button>
                </div>
            </section>
        </div>
    )
}
