import videoHomePage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4"/>
            </video>

            <div className='homepage-content'>
                <h1 className='heading_text'>The best quiz site you're ever see</h1>
                <h3 className='description_text'>You don't want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy.
                </h3>
                <button className='btn btn-dark btn-sm'>Get's started. It's free</button>
            </div>
        </div>
    )
}

export default HomePage