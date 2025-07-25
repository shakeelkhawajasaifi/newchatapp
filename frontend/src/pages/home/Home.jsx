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
				<Sidebar />
			</div>

			{/* Message Container */}
			<div className='flex-1 w-full'>
				<MessageContainer 
					toggleSidebar={toggleSidebar}
					isSidebarOpen={isSidebarOpen}
				/>
			</div>
		</div>
	);
};

export default Home;
