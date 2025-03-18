'use client'

import Image from 'next/image'
import RecentMatches from '../../components/RecentMatches'
import { Eye, UserRound, ChartNoAxesColumn } from 'lucide-react'
import Header from '@/components/Header'
import { useTranslations } from 'next-intl'

export default function Home() {
	const tHome = useTranslations('Home')
	const tFooter = useTranslations('Footer')

	return (
		<>
			<Header />
			{/* Hero Section */}
			<div
				className='w-full min-h-[50vh] md:h-[70vh] relative flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-16'
				style={{
					backgroundImage:
						"url('https://static.csstats.gg/images/header-bg-image.png')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='flex flex-col text-white gap-6 md:gap-10 w-full md:w-1/2 mb-6 md:mb-0'>
					<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
						{tHome('title')}
					</h1>
					<h3 className='text-base sm:text-lg'>{tHome('subtitle')}</h3>

					<div className='pb-8 text-base flex flex-wrap items-center gap-6'>
						<Image
							src='https://static.csstats.gg/images/valve-icon.png'
							alt='valve'
							width={79}
							height={22}
							className='w-full max-w-[79px]'
						/>
						+
						<Image
							src='https://static.csstats.gg/images/esea.png'
							alt='esea'
							width={114}
							height={22}
							className='w-full max-w-[114px]'
						/>
						+
						<Image
							src='https://static.csstats.gg/images/faceit.png'
							alt='faseit'
							width={136}
							height={22}
							className='w-full max-w-[136px]'
						/>
					</div>
					<a
						href='https://csstats.gg/login'
						className='relative flex items-center gap-2 bg-[#7ead1d] text-white py-3 px-6 rounded-full hover:bg-[#6e8c17] transition-all w-fit min-w-[195px]'
					>
						{tHome('signInWithSteam')}
						<Image
							src='https://static.csstats.gg/images/steam.png'
							width={22}
							height={22}
							alt='Official CS:GO Matchmaking'
						/>
					</a>
					<div className='max-md:hidden absolute left-80 md:bottom-28 lg:bottom-32 xl:bottom-40'>
						<div className='absolute text-[#3167F5] -top-6 left-full ml-5 uppercase font-bold text-[20px] whitespace-nowrap font-cairo italic'>
							{tHome('viewYourStats')}
						</div>
						<Image
							src='https://static.csstats.gg/images/home-arrow.png'
							alt='arrow'
							width={171}
							height={32}
							className='w-full max-w-[171px]'
						/>
					</div>
				</div>

				<div className='w-full md:w-1/2 text-white text-center md:text-right'>
					<h2 className='text-xl md:text-2xl uppercase'>
						{tHome('steamBot.introducing')} <br /> {tHome('steamBot.title')}{' '}
						<span className='bg-blue-500 px-1.5 py-1 rounded-lg uppercase'>
							{tHome('steamBot.beta')}
						</span>
					</h2>

					<h4 className='text-sm md:text-base mt-2'>
						{tHome('steamBot.description')}
					</h4>

					<Image
						src='https://static.csstats.gg/images/steam-bot.png'
						alt='sasa'
						height={150}
						width={350}
						className='mx-auto md:ml-auto md:mr-0 mt-4 w-full max-w-[300px] md:max-w-[350px]'
					></Image>

					<p className='text-[10px] md:text-[11px] mt-2'>
						{tHome('steamBot.slotsRemaining', { count: 91 })}
					</p>

					<button></button>
				</div>
			</div>

			<ul className='px-7 pt-7 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-1/2 lg:min-w-[540px] bg-[#181A26] border border-[#181A26] ml-0 lg:ml-16 shadow-[2px_2px_10px_0_#0000003a] -mb-48 lg:-mb-20 relative z-30 font-cairo'>
				<li className='flex flex-col items-center uppercase text-[14px] font-bold'>
					<ChartNoAxesColumn className='w-7 h-8 text-[#3872FC] mr-2' />
					<p className='text-[36px] pt-5'>251.7M</p>
					<p>{tHome('stats.gamesProcessed')}</p>
				</li>
				<li className='flex flex-col items-center uppercase text-[14px] font-bold'>
					<UserRound className='w-7 h-8 text-[#3872FC] mr-2' />
					<p className='text-[36px]  pt-5'>36.7M</p>
					<p>{tHome('stats.playersSeen')}</p>
				</li>
				<li className='flex flex-col items-center uppercase text-[14px] font-bold'>
					<Eye className='w-7 h-8 text-[#3872FC] mr-2' />
					<p className='text-[36px]  pt-5'>5M</p>
					<p>{tHome('stats.vacBansTracked')}</p>
				</li>
			</ul>

			<div className='w-full min-h-[50vh] h-[65vh] lg:h-[60vh] relative bg-[#1F2336]'>
				<div className='absolute inset-0 flex items-end lg:items-center justify-center px-4 py-8 md:py-16'>
					<div className='flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 items-center justify-evenly w-full px-4 sm:px-8 md:px-12 lg:px-[86px]'>
						<div className='w-full md:w-[40%] text-start text-white'>
							<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
								{tHome('postMatchAdvancedStats.title')}
							</p>
							<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px]'>
								{tHome('postMatchAdvancedStats.description')}
							</p>
						</div>
						<Image
							src='https://static.csstats.gg/images/donk-profile.png'
							alt='sas'
							width={604}
							height={290}
							className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[604px]'
						></Image>
					</div>
				</div>
			</div>
			<div className='w-full min-h-[50vh] md:h-[340px] relative bg-[#181A26]'>
				<div className='absolute inset-0 flex items-center justify-center px-4 py-8 md:py-16'>
					<div className='flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 items-center justify-evenly w-full px-4 sm:px-8 md:px-12 lg:px-[86px]'>
						<Image
							src='https://static.csstats.gg/images/features/round-breakdown.png'
							alt='sas'
							width={604}
							height={290}
							className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[604px]'
						></Image>
						<div className='w-full md:w-[40%] text-start text-white'>
							<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
								{tHome('roundByRoundMatchBreakdown.title')}
							</p>
							<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px]'>
								{tHome('roundByRoundMatchBreakdown.description')}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Recent Matches Section */}
			<div className='w-full min-h-[200px] h-[860px] sm:h-[460px] md:h-[420px] lg:h-[280px] relative bg-[#1F2336]'>
				<div className='absolute inset-0 flex items-center justify-center px-4 py-8'>
					<RecentMatches />
				</div>
			</div>

			{/* Features Section */}
			<div className='w-full min-h-[60vh] h-[90vh] md:h-[70vh] relative bg-[#181A26]'>
				<div className='absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 lg:px-[86px] py-8 text-white'>
					<div className='flex flex-col items-center text-center'>
						<div>
							<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
								{tHome('roundByRoundMatchBreakdown.title')}
							</p>
							<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px] mb-4'>
								{' '}
								{tHome('roundByRoundMatchBreakdown.description')}
							</p>
						</div>

						<Image
							src='https://static.csstats.gg/images/features/round-breakdown.png'
							alt='sas'
							width={550}
							height={350}
							className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px]'
						></Image>
					</div>
					<div className='flex flex-col items-center text-center'>
						<div>
							<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
								{tHome('automaticMatchTracking.title')}
							</p>
							<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px] mb-4'>
								{' '}
								{tHome('automaticMatchTracking.description')}
							</p>
						</div>

						<Image
							src='https://static.csstats.gg/images/features/match-history.png'
							alt='sas'
							width={550}
							height={350}
							className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px]'
						></Image>
					</div>
				</div>
			</div>

			{/* Stats Features Section */}
			<div className='w-full min-h-[300px] h-[660px] sm:h-[460px] md:h-[420px] lg:h-[320px] xl:h-[280px] relative bg-[#22222f]'>
				<div className='absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-[86px] py-8 text-white'>
					<div className='text-center'>
						<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
							{tHome('detailedMatchHistory.title')}
						</p>
						<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px]'>
							{' '}
							{tHome('detailedMatchHistory.description')}
						</p>
					</div>

					<div className='text-center'>
						<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
							{tHome('vacBanTracking.title')}
						</p>
						<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px]'>
							{' '}
							{tHome('vacBanTracking.description')}
						</p>
					</div>
					<div className='text-center'>
						<p className='text-base md:text-lg lg:text-[17px] mb-4 font-semibold'>
							{tHome('trackPersonalProgress.title')}
						</p>
						<p className='text-[#ffffff99] text-sm md:text-base lg:text-[16px]'>
							{tHome('trackPersonalProgress.description')}
						</p>
					</div>
				</div>
			</div>

			{/* ESEA Partnership Section */}
			<div className='w-full min-h-[200px] md:h-[220px] relative bg-[#0e0e0f]'>
				<div className='absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8 text-white'>
					<Image
						src='https://static.csstats.gg/images/esea.png'
						alt='ds'
						width={230}
						height={220}
						className='w-full max-w-[200px] md:max-w-[230px]'
					></Image>
					<div className='text-center md:text-left'>
						<div className='csgostats-partnership'>
							<span className='font-bold text-lg'>
								{tHome('eseaIntegration.csgostats')}
							</span>
							<span className='mx-2'>→</span>
							<a
								href='https://play.esea.net/subscribe/?r=1227721'
								rel='nofollow noopener noreferrer'
								target='_blank'
								className='text-blue-600 underline'
							>
								ESEA
							</a>
						</div>
						<p className='text-gray-600 text-sm md:text-base mt-2'>
							{tHome('eseaIntegration.description')}
						</p>
					</div>
				</div>
			</div>

			{/* Get Started Section */}
			<div className='w-full min-h-[200px] h-[320px] md:h-[220px] relative'>
				<Image
					src='https://static.csstats.gg/images/cs-background.png'
					alt='asa'
					layout='responsive'
					width={100}
					height={50}
					className='w-full'
				/>
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8'>
					<h4 className='text-2xl md:text-4xl mb-4 font-normal'>
						{tHome('getStarted.title')}
					</h4>
					<p className='text-white/70 text-sm md:text-base max-w-[700px] mb-8'>
						{tHome('getStarted.description')}
					</p>
					<a
						href='https://csstats.gg/login'
						className='flex items-center gap-2 bg-[#7ead1d] text-white py-3 px-6 rounded-full hover:bg-[#6e8c17] transition-all'
					>
						{tHome('signInWithSteam')}
						<Image
							src='https://static.csstats.gg/images/steam.png'
							width={22}
							height={22}
							alt='Official CS:GO Matchmaking'
						/>
					</a>
				</div>
			</div>

			{/* Footer */}
			<div className='w-full min-h-[250px] h-[340px] md:h-[320px] relative bg-[#141621]'>
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8'>
					<h4 className='text-sm mb-4'>{tFooter('followUs')}</h4>
					<h4 className='text-sm mb-2'>
						Copyright © 2016-2025 ESL Gaming Online, Inc.
					</h4>
					<h4 className='text-gray-500 text-xs md:text-[12px] mb-4 max-w-2xl'>
						{tFooter('description')}
					</h4>
					<ul className='flex flex-wrap justify-center gap-3 text-blue-600 text-xs md:text-[13px] mb-4'>
						<li>{tFooter('termsOfUse')}</li>
						<li>{tFooter('privacyPolicy')}</li>
						<li>{tFooter('privacySettings')}</li>
						<li>{tFooter('dmcaPolicy')}</li>
						<li>{tFooter('cs2Stats')}</li>
					</ul>
					<h4 className='text-gray-500 text-xs md:text-[12px] mb-4'>
						{tFooter('forFeedback')}
					</h4>
					<h4 className='text-gray-500 text-xs md:text-[12px]'>
						<span className='text-blue-50'>{tFooter('poweredBySteam')}</span>{' '}
						{tFooter('bottom')}
					</h4>
				</div>
			</div>
		</>
	)
}
