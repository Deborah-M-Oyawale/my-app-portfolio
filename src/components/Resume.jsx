const Resume =()=>{
    return(
        <>
            <div id="resume" className="border-b border-neutral-200 border-solid py-28 md:w-full w-4/5 mx-auto">
                    <h2 className="text-white md:text-4xl font-bold text-xl">Services</h2>
                    <p className="text-teal-500 text-lg pt-5 pb-20">WHAT I DO</p>

            <div className="grid md:grid-cols-12 grid-cols-1 grid-rows-2 gap-x-4">
            <           div className="col-span-6 text-white text-sm">
                            <span className=""><i class="text-teal-500 fa-solid fa-database fa-2x"></i></span>
                                <h3 className="font-bold text-2xl py-8">
                                    Data 
                                    <br/> Science
                                </h3>
                                <p>
                                  Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions.                              
                                </p>
                        </div>
                        

                        <div className="text-white col-span-6 text-sm">
                            <span><i className=" text-teal-500 fa-brands fa-chrome fa-2x pt-2"></i></span> 
                                <h3 className="font-bold text-2xl py-8">Web<br />Development</h3>
                                <p >
                                  The web development process includes: site's technical aspects, web content, performance and capacity client-side / server-side scripting.
                                </p>
                        </div>
                       
                        <div className="text-white col-span-6 text-sm">
                            <span ><i className="text-teal-500 fa-solid fa-brain fa-2x pt-7"></i></span>
                                <h3 className="font-bold text-3xl pt-8">Data <br />Analysis </h3>
                                <p >
                                    Data analysis is the process of cleaning, changing, and processing raw data, and extracting actionable, relevant informantion that helps businesses make informed decisions.
                                </p>
                        </div>
                </div>
            </div>

                           {/* Experience */}
            {/* <div className="border-b border-neutral-200 border-solid py-18 md:w-full w-4/5 mx-auto">
                <div className="pt-24 text-white">
                    <div>
                        <h2 className="text-white md:text-4xl text-xl font-bold pt-0">Experience</h2>
                        <p className="text-teal-500 text-lg pt-5 pb-20">WORKING WITH</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 gap-x-5">
                                <div className="col-span-6">
                                    <div class="">
                                        <div className="flex">
                                            <div className="date">Present</div>
                                            <h3 className=" text-3xl font-bold pb-14">Red <br/>drifting
                                            </h3>
                                        </div>
                                    <p className="text-xl pb-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                                    </p>
                                    </div>
                                </div>

                                <div className="col-span-6">
                                        <div className="flex">
                                            <div className="date">2021-2022</div>
                                            <h3 className=" text-3xl font-bold pb-14">Art Director <br/>Faedevs</h3>
                                        </div>
                                        <p className="text-xl">Cras dapibus. VAenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                                            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                             Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
                                            lorem.  
                                        </p>
                                    
                                </div>
                            </div>
                    </div>
                 </div> */}

                                                        {/* EDUCATION */}
        <div className="border-b border-neutral-200 border-solid md:w-full py-18 w-4/5 mx-auto">
            <div className="pt-24 text-white">
                <h2 className="text-white md:text-4xl text-2xl font-bold" >Education</h2>
                <p className="text-teal-500 text-lg pt-6 pb-10 font-bold">STUDIED AT</p>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-x-5">
                                <div className="col-span-6">
                                        <div className="flex">
                                            <div className="date font-bold">2011-2015</div>
                                            <h3 className=" text-2xl font-bold pt-3">Mathematics
                                            </h3>
                                        </div>
                                        <p className="text-xl pb-8">I studied mathematics for four years from one of the top and finest federal university in Nigeria. I bagged my BSc degree in Mathematical science.
                                        </p>
                                </div>

                                <div className="col-span-6">
                                        <div className="flex">
                                            <div className="date font-bold">March-July</div>
                                            <h3 className=" text-2xl font-bold pt-3">Programming Course</h3>
                                        </div>
                                        <p className="text-xl pb-8">I concluded a programming course bootcamp in Frontend development through the help of BGIT in Nigeria.
                                        </p>
                                </div>
                            </div>
                        </div>
                     </div>

                   {/* CODING SKILLS */}
        <div className="border-b border-neutral-200 border-solid py-18 md:w-full w-4/5 mx-auto">
            <div className="text-white pt-24">
            <div>
                <h2 className="md:text-4xl text-2xl font-bold">Coding <br/>Skills</h2>
                    <p className="text-teal-500 text-lg  font-bold pt-6 pb-10">DEVELOPING ON</p>
            </div>

        <div className="grid md:grid-cols-12 grid-cols-2 md:grid-rows-2 gap-x-4">
            <div className="md:col-span-4">
                <div className="coding-skill-circle">
                    <i className="fa-brands fa-wordpress-simple fa-3x"></i>
                </div>
                <h4 className="font-bold text-lg pt-8">Bootstrap, Tailwind</h4> <br/>
                {/* <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div> */}
            </div>

                                    <div className="col-span-4">
                                        <div className="coding-skill-circle">
                                            <i className="fa-brands fa-php fa-2x"></i>
                                            <i className="fa-solid fa-database fa-2x"></i>
                                        </div>
                                    <h4 className="font-bold text-lg pt-8">PostgreSQL</h4> <br/>
                                    {/* <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div> */}
                                    </div>

                                        <div className="col-span-4">
                                            <div className="coding-skill-circle">
                                                <i className="fa-brands fa-js fa-3x"></i>
                                            </div>
                                        <h4 className="font-bold text-lg pt-8">JavaScript</h4><br/>
                                        {/* <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div> */}
                                        </div>

                                            <div className="col-span-4">
                                                <div className="coding-skill-circle">
                                                    <i className="fa-brands fa-react fa-3x"></i>
                                                </div>
                                            <h4 className="font-bold text-lg pt-8">React</h4><br/>
                                            {/* <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div> */}
                                            </div>

                                                <div className="col-span-4">
                                                    <div className="coding-skill-circle">
                                                        <i className="fa-brands fa-html5 fa-2x"></i>
                                                        <i className="fa-brands fa-css3 fa-2x"></i>
                                                    </div>
                                                <h4 className="font-bold text-lg pt-8">HTML, CSS</h4><br/>
                                                {/* <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div> */}
                                                </div>

                                                    <div className="col-span-4">
                                                        <div className="coding-skill-circle">
                                                            <i className="fa-brands fa-python fa-3x"></i>
                                                        </div>
                                                    <h4 className="font-bold text-lg pt-8">Python</h4><br/>
                                                    {/* <div className="text-xl">Etiam sit amet orci eget eros faucibus tincidunt.</div> */}
                                                    </div>
                            </div>   
                    </div>
                </div>

                    {/* CLIENTS */}
                {/* <div className="border-b border-neutral-200 border-solid py-28 md:w-full w-4/5 mx-auto">
                    <div className="text-white md:pt-24">
                        <div className="clients-section">
                            <div id="clients-title-header">
                                    <h2 className="text-7xl font-bold pb-10">Clients</h2>
                                    <p className="text-teal-500 pb-10">MY PARTNERS</p>
                            </div>
                            <div className="images-of-partners md:flex">
                                    <img className="vintage" src="https://myour-jekyll.netlify.app/assets/img/clients/client4.png" alt=""/>
                                    <img className="sunshine" src="https://myour-jekyll.netlify.app/assets/img/clients/client1.png" alt=""/>
                                    <img className="vintage-studio" src="https://myour-jekyll.netlify.app/assets/img/clients/client3.png" alt=""/>
                                    <img className="classic" src="https://myour-jekyll.netlify.app/assets/img/clients/client2.png" alt=""/>
                            </div>
                        </div>

                    </div>

                </div> */}
        </>
    )
}
export default Resume;