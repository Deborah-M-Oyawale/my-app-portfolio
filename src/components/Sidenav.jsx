const Sidenav = () => {
    return ( 
        <aside>
              <div className="lg:fixed lg:h-full h-24">
            <div className="lg:pt-300 lg:block flex justify-center pb-300">
                <div className="text-white pl-5 lg:pt-5 pt-6"><a href="https://www.instagram.com/iam_portable_mo/" target="_blank">
                    <i className="fa-brands fa-instagram fa-2x"></i></a> 
                </div>
                <div className="text-white pl-4 pt-6"> <a href="https://web.facebook.com/enitan.oyakelvin/" target="_blank">
                    <i className="fa-brands fa-facebook fa-2x"></i></a>
                </div>
                <div className="text-white pl-4 pt-6"> <a href="https://twitter.com/Mo_Mosadi" target="_blank">
                    <i className="fa-brands fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </div>
        </aside>
     );
}
 
export default Sidenav;