import me from '../../assets/images/me.jpg';

function About() {
    return(
        <section>
            <h2 className = "title d-flex justify-content-center">ABOUT ME</h2>
            <img className="rounded mx-auto d-block" src={me} alt="me"></img>
            <div className = "d-flex justify-content-center">
                <div className = "information-box w-50 para">
                    <div className = "d-flex justify-content-center card-title">Background</div>
                    I am senior at the University of Wisconsin Oshkosh studying Information Systems and in the process
                    of completing my Full Stack Web Development Certificate from UW-Extended. I have been an intern at Schreiber Foods in Green Bay
                    as an IS QA Analyst since July 2020 and I am an SAP tutor at UWO. 
                </div>
        <br />
                <div className = "information-box w-50 para">
                    <div className = "d-flex justify-content-center card-title">Interests</div>
                    <li>Business Process Re-engineering</li>
                    <li>System Analysis and Design</li>
                    <li>Software Development</li>
                    <li>ERP Systems</li>
                    <li>Business Analysis</li>
                    <li>Web Development</li>
                    <li>RPA</li>
                    <li>Cloud</li>
                </div>
        <br />
                <div className = "information-box w-50 para">
                    <div className = "d-flex justify-content-center card-title">Extras</div>
                    Now that the intro is out of the way!
                    I love to travel. I have been to Canada, Italy, the United Kingdom twice and Jamaica. Next on my list is Greece,
                    someday. I enjoy reading books of all sorts but I also love my netflix TV shows. A random fun fact about me is that 
                    I would really like to get my motorcycle licsense, though I have no interest in buying one. I recently found an interest 
                    in aerial yoga and it is on my to-do list to take some classes this year. I love finding hole in the wall bar and grills 
                    not in the city and making new friends to share experiences with.
                </div>
                
            </div>

        </section>
    )
}



export default About;