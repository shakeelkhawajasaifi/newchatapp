import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className='flex h-screen sm:h-[450px] md:h-[550px] rounded-none sm:rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			{/* Mobile Hamburger Button - Fixed Position */}
			<button
				onClick={toggleSidebar}
				className='sm:hidden fixed top-4 left-4 z-[60] p-2 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors border border-white/30'
			>
				<div className='w-6 h-6 flex flex-col justify-center items-center'>
					<span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
						isSidebarOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
					}`}></span>
					<span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
						isSidebarOpen ? 'opacity-0' : 'opacity-100'
					}`}></span>
					<span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
						isSidebarOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
					}`}></span>
				</div>
			</button>
			{/* Mobile Sidebar Overlay */}
			{isSidebarOpen && (
				<div
					className='sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar */}
			<div className={`
				${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} 
				sm:translate-x-0 
				fixed sm:relative 
				top-0 sm:top-auto 
				left-0 sm:left-auto 
				h-full sm:h-auto 
				w-80 sm:w-auto 
				z-50 sm:z-auto 
				transition-transform duration-300 ease-in-out
				bg-gray-900/95 backdrop-blur-md sm:bg-transparent
			`}>
				<Sidebar />
			</div>

			{/* Message Container */}
			<div className='flex-1 w-full'>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;
