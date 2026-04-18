import "../index.css"

export default function Info(){
    return(
        <>
            <div className="hero-parent-container">
                <img className="hero-image" src="./src/assets/headerImage.png" alt="image of person" />
                <div className="content-section">
                    <h1 className="name">Laura Smith</h1>
                    <p className="title">Frontend Developer</p>
                </div>
                <a className="website-link" href="google.com">laurasmith.website</a>
                <div className="button-container">
                    <img className="btn-icon" src="./src/assets/Mail.png" alt="mail-icon" />
                    <button className="button-one">Email</button>
                </div>
            </div>
        </>
    )
}