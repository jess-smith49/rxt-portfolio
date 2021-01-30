import React, {useState} from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Resume from '../Resume';
import Footer from '../Footer';
//import Footer from '../Footer';

function Portfolio(){
    const [currentPage, handlePageChange] = useState('About');

    const rednerPage = () => {
        switch(currentPage){
            case 'Projects':
                return <Projects/>
            case 'Contact':
                return <Contact/>
            case 'Resume':
                return <Resume/>
            default:
                return <About/>

        }
    };

        return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{rednerPage(currentPage)}</div>
            <Footer></Footer>
        </div>
    )
};

export default Portfolio;



