import Image from 'next/image'

const RecentMatches: React.FC = () => {
	const matches = [
		{
			href: 'https://csstats.gg/match/258587990',
			bgImage:
				'https://static.csstats.gg/images/maps/screenshots/cs2/de_inferno_png.jpg',
			mapIcon: 'https://static.csstats.gg/images/maps/icons/cs2/de_inferno.png',
			ratingIcon:
				'https://static.csstats.gg/images/ranks/cs2/rating.mythical.png',
			rank: '17,561',
			score: '7:13',
			time: '3 minutes ago',
		},
		{
			href: 'https://csstats.gg/match/258587990',
			bgImage:
				'https://static.csstats.gg/images/maps/screenshots/cs2/de_inferno_png.jpg',
			mapIcon: 'https://static.csstats.gg/images/maps/icons/cs2/de_inferno.png',
			ratingIcon:
				'https://static.csstats.gg/images/ranks/cs2/rating.mythical.png',
			rank: '16,123',
			score: '13:10',
			time: '5 minutes ago',
		},
		{
			href: 'https://csstats.gg/match/258587990',
			bgImage:
				'https://static.csstats.gg/images/maps/screenshots/cs2/de_inferno_png.jpg',
			mapIcon: 'https://static.csstats.gg/images/maps/icons/cs2/de_inferno.png',
			ratingIcon:
				'https://static.csstats.gg/images/ranks/cs2/rating.mythical.png',
			rank: '16,123',
			score: '13:10',
			time: '5 minutes ago',
		},
		{
			href: 'https://csstats.gg/match/258587990',
			bgImage:
				'https://static.csstats.gg/images/maps/screenshots/cs2/de_inferno_png.jpg',
			mapIcon: 'https://static.csstats.gg/images/maps/icons/cs2/de_inferno.png',
			ratingIcon:
				'https://static.csstats.gg/images/ranks/cs2/rating.mythical.png',
			rank: '16,123',
			score: '13:10',
			time: '5 minutes ago',
		},
	]

	return (
		<div className='px-4 sm:px-8 md:px-12 lg:px-[86px] w-full'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
				{matches.map((match, index) => (
					<div key={index} className='w-full max-w-[250px]'>
						<a
							href={match.href}
							className='view-image-link recent-match-inner block w-full h-[150px] bg-cover bg-center relative'
							style={{
								background: `url('${match.bgImage}') no-repeat 50%`,
								backgroundSize: 'cover',
							}}
						>
							<div className='map-icon absolute top-2 left-2'>
								<Image
									src={match.mapIcon}
									alt='Map Icon'
									width={40}
									height={40}
								/>
							</div>

							<div className='event-icon absolute bottom-12 left-1/2 transform -translate-x-1/2'>
								<div className='flex w-[67px] mx-auto bg-black/50 rounded justify-center'>
									<div
										className='cs2rating mythical sm flex items-center justify-center w-full h-6 bg-cover bg-center'
										style={{ backgroundImage: `url(${match.ratingIcon})` }}
									>
										<span className='text-white text-xs'>
											{match.rank}
											<small className='text-[8px] leading-none'>,000</small>
										</span>
									</div>
								</div>
							</div>

							<div className='recent-match-result absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg'>
								<span
									className={
										parseInt(match.score.split(':')[0]) <
										parseInt(match.score.split(':')[1])
											? 'worse text-red-400'
											: 'better text-green-400'
									}
								>
									{match.score.split(':')[0]}
								</span>{' '}
								:{' '}
								<span
									className={
										parseInt(match.score.split(':')[1]) <
										parseInt(match.score.split(':')[0])
											? 'worse text-red-400'
											: 'better text-green-400'
									}
								>
									{match.score.split(':')[1]}
								</span>
							</div>
						</a>

						<div className='recent-match-time text-center text-white text-sm mt-2'>
							{match.time}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecentMatches
