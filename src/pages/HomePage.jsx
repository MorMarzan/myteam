import { HighlightList } from '../cmps/HighlightList'
import { TestimonyList } from '../cmps/TestimonyList'
import decoImgBottom from '/images/bg-pattern-home-2.svg'
// import decoImgLeft from '/images/bg-pattern-home-1.svg'

export function HomePage() {

    const highlights = [
        {
            src: "/images/icon-person.svg",
            alt: "person",
            title: "Experienced Individuals",
            content: "Our network is made up of highly experienced professionals who are passionate about what they do.",
            id: 1
        },
        {
            src: "images/icon-cog.svg",
            alt: "cog",
            title: "Easy to Implement",
            content: "Our processes have been refined over years of implementation meaning our teams always deliver.",
            id: 2
        },
        {
            src: "/images/icon-chart.svg",
            alt: "chart",
            title: "Enhanced Productivity",
            content: "Our customized platform with in-built analytics helps you manage your distributed teams.",
            id: 3
        }
    ]

    const testimonies = [
        {
            content: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
            name: "Kady Baker",
            src: "/images/avatar-kady.jpg",
            id: 1
        },
        {
            content: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
            name: "Aiysha Reese",
            src: "/images/avatar-aiysha.jpg",
            id: 2
        },
        {
            content: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
            name: "Arthur Clarke",
            src: "/images/avatar-arthur.jpg",
            id: 3
        }
    ]

    return (
        <div className="main-layout full home-page">
            <section className="main-layout full hero">
                {/* <img src={decoImgLeft} className='deco-img-left'></img> */}
                <div className="section-container">
                    <h2 className='title'>Find the <br></br>best <mark>talent</mark></h2>
                    <div className='content'>
                        <div className='deco-line'></div>
                        <h6>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</h6>
                    </div>
                    <img className='special-bg' src={decoImgBottom}></img>
                </div>
            </section>

            <HighlightList highlights={highlights} />

            <TestimonyList testimonies={testimonies} />

            <section className='main-layout full call-to-action'>
                <div className="section-container">
                    <h3>Ready to get started?</h3>
                    <button className='btn'>contact us</button>
                </div>
            </section>
        </div>
    )
}
