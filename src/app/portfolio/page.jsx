'use client';
import { items } from '@/appConstants';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import NavLink from '@/components/NavLink';

const PortfolioPage = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({ target: ref });
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-76%']);

	const items = [
		{
			id: 1,
			color: 'from-blue-500 via-gray-800 to-black',
			title: 'Crypto tracker',
			desc: [
				'Utilizes React for a dynamic and interactive UI, incorporating Material-UI (Mui) components for a sleek and intuitive design.',
				'Implemented Chart.js for visually engaging price charts and graphs, providing a comprehensive view of cryptocurrency data from the Coin Gecko API.',
				'Enhances user engagement using Framer Motion to create smooth animations for phone interactions and text entrance effects.',
			],

			img: '/Projects/Crypto-tracker.png',
			link: 'https://crypto-tracker-ish.netlify.app/',
			githubIcon: '/github.png',
			github: 'https://github.com/ishaansharma750/Crypto-Tracker-App',
		},
		{
			id: 2,
			color: 'from-purple-800 via-purple-700 to-indigo-900',
			title: 'Podcast App',
			desc: [
				'Implemented CRUD operations in the podcast platform become user-friendly and to ensure an intuitive, responsive user-friendly interface for managing podcast content using React.',
				'Implemented the Firebase Auth, Fire Store, Firebase Storage for managing the authentication and audio files and User Data.',
				'Developed a (Custom Music Player) using JavaScript to track and listen all the Podcasts ',
			],
			img: '/Projects/Podcast-app.png',
			link: 'https://simple-podcast-app.netlify.app/',
			githubIcon: '/github.png',
			github: 'https://github.com/ishaansharma750/Podcast-App',
		},
		{
			id: 3,
			color: 'bg-gradient-to-r from-green-900 to-emerald-800',
			title: 'Lets Notify',
			desc: [
				'Contributing to the development of a scalable push notification platform, leveraging React, NestJS.',
				'Designed and implemented responsive UIs using Tailwind CSS and MUI, enhancing user engagement and performance.',
				'Collaborated with cross-functional teams to deliver personalized notification features and ensure seamless project execution.',
				' Optimized application functionality and UI components to meet business requirements and improve user experience..',
			],
			img: '/Projects/Quik-notify.png',
			link: 'https://web-dev.letsnotify.co.in/',
		},
	];

	return (
		<motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
			<div className='h-[700vh] relative' ref={ref}>
				{/* Section Title */}
				<div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
					My Works
				</div>

				<div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
					<motion.div style={{ x }} className='flex'>
						<div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
						{items?.map((item, index) => (
							<div
								className={`h-screen w-screen flex flex-col items-center bg-gradient-to-r ${item.color}`}
								key={item.id}>
								{/* Project Title */}
								<div>
									<h1 className='text-xl font-bold md:text-6xl lg:text-6xl xl:text-8xl text-center text-white mt-6'>
										{item.title}
									</h1>
								</div>

								{/* Image and Description Section */}
								<div className='flex flex-col lg:flex-col xl:flex-row items-center justify-evenly gap-0 w-full px-4 lg:px-6'>
									{/* Image Section */}
									<div className='relative w-80 h-60 xs:w-[200px] sm:h-[150px] sm:w-[350px] xs:h-[550px] md:w-[600px] md:h-[400px] lg:w-[650px] lg:h-[350px] xl:w-[700px] xl:h-[500px]'>
										<Image src={item.img} alt='' fill className='object-contain' />
									</div>

									{/* Description and Button Section */}
									<div className='flex flex-col gap-4 text-white px-4 w-full sm:w-8/12 md:w-10/12 lg:w-2/3 xl:w-1/2 '>
										<ul className='text-base xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-xl'>
											{Array.isArray(item.desc) ? (
												item.desc.map((point, index) => (
													<li key={index} className='leading-relaxed mb-2 text-gray-200'>
														{point}
													</li>
												))
											) : (
												<li>{item.desc}</li>
											)}
										</ul>
										<div className='flex items-center justify-start gap-6'>
											<Link href={item.link} target='_blank'>
												<button className='bg-white text-gray-600 font-semibold rounded px-3 py-3'>
													Visit Project
												</button>
											</Link>
											{index !== items?.length - 1 && (
												<div className='bg-white rounded-md p-1'>
													<NavLink
														socialLink={item.github}
														title={item.title}
														line={false}
														src={item.githubIcon}
														width={35}
														height={35}
														alt={`${item.title} GitHub Repository`}
													/>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
				<h1 className='sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl text-5xl'>Do you have a project?</h1>
				<div className='relative'>
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
						viewBox='0 0 300 300'
						className='w-64 h-64 md:w-[500px] md:h-[500px] '>
						<defs>
							<path id='circlePath' d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 ' />
						</defs>
						<text fill='#000'>
							<textPath xlinkHref='#circlePath' className='text-xl'>
								Front-end Developer and UI Designer
							</textPath>
						</text>
					</motion.svg>
					<Link
						href='/contact'
						className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>
						Hire Me
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
