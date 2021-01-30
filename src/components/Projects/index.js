import budget from '../../assets/images/budget.png';
import noSql from '../../assets/images/nosql.png';
import regex from '../../assets/images/regex.png';
import ecomm from '../../assets/images/ecomm.png';
import note from '../../assets/images/note.png';
import readme from '../../assets/images/readme.png';
function Projects(){
    return(
        <div>
            <div className = "title-container">
               <h1 className="title d-flex justify-content-center">Portfolio Work</h1> 
            </div>
            
            <div class="container information-box">
                <div class="row">
                    <div class="col-sm" >
                    <a href="https://github.com/jess-smith49/budget-tracker" >Budget Tracker</a>
                            <div> 
                                <span>PWA</span>
                                <img className = "img-fluid" src={budget} alt="budget"></img>
                                
                            </div>
                    </div>
                    <div class="col-sm e-comm">
                    <a href="https://github.com/jess-smith49/e-comm_backend" class = "e-comm">E-Commerce Backend</a>
                            <div>
                                <span>ORM</span>
                                <img className = "img-fluid" src={ecomm} alt="ecomm-backend"></img>
                               
                            </div>
                    </div>
                    <div class="col-sm social-network">
                    <a href="https://github.com/jess-smith49/social-network" class = "social-network">Social Network API</a>
                            <div>
                                <span>NoSql</span>
                                <img className = "img-fluid" src={noSql} alt="monogDB"></img>
                            </div>
                    </div>
                </div>
            </div>

            <br/>

            <div class="container information-box">
                <div class="row">
                    <div class="col-sm regex">
                    <a href="https://gist.github.com/jess-smith49/bae1cd32a591a4b3972efb9da00d4c96" class = "social-network">Regex</a>
                            <div>
                                <span>Tutorial</span>
                                <img className = "img-fluid" src={regex} alt="regex"></img>
                            </div>
                    </div>
                    <div class="col-sm express-notes">
                    <a href="https://github.com/jess-smith49/express-notes">Note-Taker</a> 
                            <div>
                                <span>Express</span>
                                <img className = "img-fluid" src={note} alt="note-taker"></img>
                            </div>
                    </div>
                    <div class="col-sm read-me">
                    <a href="https://github.com/jess-smith49/readme-node" class = "social-network">Readme Generator</a>
                            <div>
                                <span>Node</span>
                                <img className = "img-fluid" src={readme} alt="readme-generator"></img>
                            </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects;