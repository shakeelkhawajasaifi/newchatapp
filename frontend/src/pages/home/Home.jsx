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
			{/* Mobile Header with Hamburger Menu */}
			<div className='sm:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 p-4'>
				<button
					onClick={toggleSidebar}
					className='p-2 rounded-md hover:bg-gray-700/50 transition-colors'
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
			</div>

			{/* Mobile Sidebar Overlay */}
			{isSidebarOpen && (
				<div
					className='sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar */}
			<div className={`
				${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
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
				<div className='pt-16 sm:pt-0 h-full'>
					<Sidebar />
				</div>
			</div>

			{/* Message Container */}
			<div className='flex-1 w-full pt-16 sm:pt-0'>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;
