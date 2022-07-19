const Contact =()=>{
    return(
        <>
             <div id="Contact">
                <div className="text-white pt-24 w-4/5 mx-auto lg:w-full">
                    <div className="md:pb-20 pb-14">
                        <h2 className="md:text-4xl text-3xl font-bold">Contact</h2>
                        <p className="text-lg font-bold text-teal-600 md:mt-0 mt-4">LET'S TALK</p>
                    </div>
                    
                <div className="contact-wrapper lg:flex gap-5 flex-wrap lg:flex-nowrap">
                    <form className="lg:w-1/2 -pt-10 information-wrapper">
                        <div className="text-in">
                            <label htmlFor='text' className="label-text">Fullname<span className="text-teal-500"><strong>*</strong></span></label> <br/>
                            <input type="text" className="border border-neutral-200 border-solid absolute mb-40 label-border" placeholder="Mosadijesu Fola" /> <br/><br/>
                        </div>
                        <div className="text-in">
                            <label htmlFor='text' className="label-text">Email<span className="text-teal-500"><strong>*</strong></span></label><br/>
                            <input type="email" className="border border-neutral-200 border-solid label-border" placeholder="johndoe@gmail.com" /><br/><br/>
                        </div>

                        <div className="text-in">
                            <label htmlFor='text' className="label-text">Message<span className="text-teal-500"><strong>*</strong></span></label> <br/>
                            <label placeholder="To write" className="border border-neutral-200 border-solid text-label-border w-64"></label><br/>
                            <button className='pt-7 pb-8'>Send Message &nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></button>
                        </div>

                    </form>

                    <div className="authors-information">
                <h2 >Mo' Fola</h2>
                <p  className="authors-role text-teal-500">FRONTEND DEVELOPER</p>
                <p> <span className="text-teal-500 text-sm">AGE:</span> &nbsp;&nbsp; 26</p>
                <p> <span className="text-teal-500 text-sm">FREELANCE:</span> &nbsp;&nbsp; Available</p>
                <p> <span className="text-teal-500 text-sm">PHONE:</span> &nbsp;&nbsp; +234 8169854145</p>
                <p><span className="text-teal-500 text-sm">RESIDENCE:</span>&nbsp;&nbsp; NIGERIA</p>
                <p><span className="text-teal-500 text-sm">ADDRESS:</span> &nbsp;&nbsp; Lagos Nigeria</p>
                <p><span className="text-teal-500 text-sm">E-MAIL:</span> &nbsp;&nbsp; mosadijesuoyawale@gmail.com</p>
                <p className="signature" >Mo' Fola</p>
         </div>
 
                </div>
                    
                </div>
            </div>
        </>
    )
}
export default Contact;