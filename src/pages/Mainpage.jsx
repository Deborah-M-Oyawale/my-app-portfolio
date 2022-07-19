// import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Rightnav from "../components/Rightnav";
import Sidenav from "../components/Sidenav";
import Nav from '../components/Nav';
// import Nav from "../components/nav";
const Mainpage = () => {
	return (
		<main className="w-full">
			<div className="lg:w-94 w-full mx-auto z-50">
				<div className="fixed lg:top-16 top-0 lg:w-11/12 w-full z-50">
					<Nav />
				</div>
			</div>
			<div className="w-full md:flex flex-wrap overflow-x-hidden overflow-y-hidden">
				<div className="lg:w-45 w-full bg-grey md:bg-teal-900  lg:block hidden">
					<div className="lg:fixed h-5 lg:h-screen md:w-full lg:block hidden">
						<Rightnav />
					</div>
				</div>
				<div className="lg:w-1/2 w-full">
					<MainContent />
				</div>
				<div className="lg:w-5 w-full bg-grey border-l border-solid border-neutral-200">
					<div className="lg:fixed w-full lg:h-screen h-20">
						<Sidenav />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Mainpage;