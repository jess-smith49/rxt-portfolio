import resume from '../../assets/images/resume.jpg';

function Resume(){
    return(
        <section>
            <h1 className="title d-flex justify-content-center">Resume</h1>
            <div class = "container information-box">
                <h2>List of Proficiencies</h2>
                <div class = "row">
                    <div class="col-6">
                        <ul>
                            <li>HTML5</li>
                            <li>JavaScript</li>
                            <li>MongoDB</li>
                            <li>Sequelize</li>
                            <li>Boostrap</li>
                        </ul>

                    </div>
                    <div class="col-6">
                        <ul>
                            <li>PWA</li>
                            <li>CSS</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>jQuery</li>
                        </ul>

                    </div>
                </div>
            </div>

            <br/>
            <div>
                <img className = "img-fluid" src={resume} alt="resume"></img>
            </div>
        </section>
    )
}

export default Resume;