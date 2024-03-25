import personIcon from '/src/assets/images/icon-person.svg'
import cogIcon from '/src/assets/images/icon-cog.svg'
import chartIcon from '/src/assets/images/icon-chart.svg'
import kadyAvatar from '/src/assets/images/avatar-kady.jpg'
import aiyshaAvatar from '/src/assets/images/avatar-aiysha.jpg'
import arthurAvatar from '/src/assets/images/avatar-arthur.jpg'
import decoImg from '/src/assets/images/bg-pattern-home-2.svg'
import { Highlight } from '../cmps/Highlight'

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
                        <Highlight
                            src={personIcon}
                            alt={'person'}
                            title={'Experienced Individuals'}
                            content={'Our network is made up of highly experienced professionals who are passionate about what they do.'}
                        />
                        <Highlight
                            src={cogIcon}
                            alt={'cog'}
                            title={'Easy to Implement'}
                            content={'Our processes have been refined over years of implementation meaning our teams always deliver.'}
                        />
                        <Highlight
                            src={chartIcon}
                            alt={'chart'}
                            title={'Enhanced Productivity'}
                            content={'Our customized platform with in-built analytics helps you manage your distributed teams.'}
                        />
                    </div>
                </div>
            </section>

            <section className='main-layout full testimonials'>
                <div className="section-container">

                    <h3>Delivering real results for top companies. Some of our <mark>success stories.</mark></h3>
                    <div className='content'>
                        <div className='testimony'>
                            <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                            <h4 className='name'>Kady Baker</h4>
                            <img src={kadyAvatar} alt="kady avatar" />
                        </div>
                        <div className='testimony'>
                            <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                            <h4 className='name'>Aiysha Reese</h4>
                            <img src={aiyshaAvatar} alt="kady avatar" />
                        </div>
                        <div className='testimony'>
                            <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                            <h4 className='name'>Arthur Clarke</h4>
                            <img src={arthurAvatar} alt="kady avatar" />
                        </div>
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
