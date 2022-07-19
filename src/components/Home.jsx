const Home =()=>{
    return(
        <>
            <div id="Home" className="border-b border-neutral-200 border-solid ">
                <h1 className="name hidden lg:block text-white text-5xl w-4/5 mx-auto">
                     MO' <br />
                     Fola
                 </h1> 

                 <h1 className="text-teal-700 uppercase font-bold md:text-2xl pb-8 text-xl md:w-full w-4/5 mx-auto"> Front-End Developer</h1>
                 <div className="text-white  text-lg md:w-full w-4/5 mx-auto">
                     Hello! I am a Frontend Web Developer from Lagos State, Nigeria. I have
                     rich experience in web site design and building, data analysis and data science. 
                </div>
                
                <button className="contactButton">Contact Me &nbsp;&nbsp; </button>
                
            </div>
            

        </>
    )
}
export default Home;