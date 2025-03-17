import Header from '@/components/Header'
import Image from 'next/image'

export default function Second() {
	return (
		<>
			<Header />
			<div
				className='w-full h-[120vh] relative flex justify-between'
				style={{
					backgroundImage:
						"url('https://static.csstats.gg/images/header-bg-image.png')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='relative w-full h-full flex justify-between text-white'>
					<div className='relative w-1/4 h-full'>
						<Image
							alt='profile'
							src='https://i.postimg.cc/rF7sJF2v/photo-2025-03-17-00-43-39.jpg'
							layout='fill'
							objectFit='cover' // Растянет картинку, сохраняя пропорции
						/>
					</div>
					<div className='relative w-1/2 h-full'>
						<Image
							alt='photo'
							src='https://i.postimg.cc/Dy10x3f0/photo-2025-03-17-00-43-36.jpg'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
			</div>

			<div className='w-full h-[320px] relative bg-[#141621]'>
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-4'>
					<h4 className='font-normal text-sm mb-4'>Follow Us!</h4>
					<h4 className='font-normal text-sm mb-2'>
						Copyright © 2016-2025 ESL Gaming Online, Inc.
					</h4>
					<h4 className='font-normal text-gray-500 text-[12px] mb-4'>
						csstats.gg is an online service for CS2 stat tracking. Time to start
						tracking your competitive CS2 match history.
					</h4>
					<ul className='flex gap-3.5 text-blue-600 text-[13px] mb-2'>
						<li>Terms of Use</li>
						<li>Privacy Policy</li>
						<li>Privacy Settings</li>
						<li>DMCA Policy</li>
						<li>CS2 Stats</li>
					</ul>
					<h4 className='font-normal text-gray-500 text-[12px] mb-4'>
						For feedback contact me at: support(at)csstats(dot)gg.
					</h4>
					<h4 className='font-normal text-gray-500 text-[12px] mb-4'>
						<span className='text-blue-50'>Powered by Steam.</span> This site is
						not affiliated with Valve.
					</h4>
				</div>
			</div>
		</>
	)
}
