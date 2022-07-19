import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const MainContent =()=>{
    return(
        <>
            <div className='bg-grey py-14 w-full'>
                <div className="md:w-94 mx-auto">
                    <div>
                        <Home />
                    </div>
                    <div>
                        <About/>
                    </div>
                    <div>
                        <Resume/>
                    </div>
                    <div>
                        <Portfolio/>
                    </div>
                    <div>
                        <Contact />
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default MainContent;