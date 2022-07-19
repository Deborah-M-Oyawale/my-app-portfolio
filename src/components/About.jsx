const About =()=>{
    return(
        <>
            <div id="About" className="border-b border-neutral-200 border-solid py-28 md:w-full w-4/5 mx-auto">
            <h2 className="my-1 text-white lg:text-4xl font-bold ">About Me
            </h2>
            <h3 className="my-3 lg:text-sm font-bold uppercase text-teal-500" >MY STORY</h3>
            <p className="my-14 text-sm text-white ">Hello! My name is Mo' Fola, and i'm a Lagos-based freelancer. If i'm not freelancing at some of Nigeria's finest tech firms, i'm working remotely for clients around the world.<br/><br/><br/>

            I have a diverse set of skills, ranging from HTML to CSS, Javascript, Python all the way to ProgreSQL.</p>
             
            <div className="grid md:grid-cols-12 grid-cols-1 pb-8">
                <div className="col-span-6 text-white">
                    <p> <span className="text-teal-500 font-bold text-sm"> AGE:</span> &nbsp;&nbsp; 27</p>
                    <p> <span className="text-teal-500 font-bold text-sm"> FREELANCE:</span> &nbsp;&nbsp; Available</p>
                    <p> <span className="text-teal-500 font-bold text-sm"> PHONE:</span> &nbsp;&nbsp; +234 8169854145</p>
                </div>
                <div className="col-span-6 text-white">
                    <p> <span className="text-teal-500 font-bold text-sm"> RESIDENCE:</span> &nbsp;&nbsp; NIGERIA</p>
                    <p> <span className="text-teal-500 font-bold text-sm"> ADDRESS:</span> &nbsp;&nbsp; Lagos Nigeria</p>
                    <p> <span className="text-teal-500 font-bold text-sm"> E-MAIL:</span> &nbsp;&nbsp; mosadijesuoyawale@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;