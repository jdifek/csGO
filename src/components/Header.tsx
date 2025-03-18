'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { startTransition, useEffect, useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const LANGUAGES = [
	{ code: 'en', name: 'English', flag: 'https://flagcdn.com/16x12/gb.png' },
	{ code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/16x12/ru.png' },
	{ code: 'zh', name: '中文', flag: 'https://flagcdn.com/16x12/cn.png' },
]

const Header: React.FC = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0])
	const [isOpen, setIsOpen] = useState(false)
	const [searchId, setSearchId] = useState('')

	const t = useTranslations('Home')
	const router = useRouter()
	const pathname = usePathname()
	const localActive = useLocale()

	useEffect(() => {
		const newLang =
			LANGUAGES.find(lang => lang.code === localActive) || LANGUAGES[0]
		setSelectedLanguage(newLang)
	}, [localActive])

	const changeLanguage = (nextLocale: string) => {
		startTransition(() => {
			const newPath = `/${nextLocale}${pathname.replace(`/${localActive}`, '')}`
			router.replace(newPath)
			setIsOpen(false)
		})
	}

	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault()
		if (searchId.trim()) {
			startTransition(() => {
				const steamId = searchId.trim()
				const newPath = `/${localActive}/second/${steamId}`
				router.push(newPath)
			})
		}
	}

	return (
		<header className='flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-10 w-full min-h-[60px] lg:h-16 bg-[#1D202F] px-4 sm:px-6 md:px-8 lg:px-12 py-4 lg:py-0'>
			{/* Логотип */}
			<div id='header-logo' className='order-first mb-3 sm:mb-0'>
				<Link
					href={`/${selectedLanguage.code}`}
					id='logo'
					className='text-white text-base sm:text-lg md:text-xl font-bold tracking-wide hover:opacity-80 transition-opacity font-cairo italic'
				>
					CS<span className='text-[#3872FC]'>STATS</span>.GG
				</Link>
			</div>

			{/* Поле поиска */}
			<form onSubmit={handleSearch} className='relative w-[60%]'>
				<input
					type='text'
					className='w-full h-10 bg-[#141621] rounded-3xl text-white text-sm placeholder-gray-500 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder={t('search') || 'Введите Steam ID'}
					value={searchId}
					onChange={e => setSearchId(e.target.value)}
				/>
				<Search width={24} height={24} className='absolute top-2 left-2' />
			</form>

			<div className='flex items-center'>
				{/* Кастомный селектор языка */}
				<div className='relative mt-3 lg:mt-0'>
					<div
						className='flex items-center w-fit min-w-[140px] text-white text-sm px-3 py-2 cursor-pointer pr-8'
						onClick={() => setIsOpen(!isOpen)}
					>
						<Image
							src={selectedLanguage.flag}
							alt={`${selectedLanguage.name} flag`}
							width={16}
							height={12}
							className='mr-2'
						/>
						<span>{selectedLanguage.name}</span>
						<ChevronDown className='w-5 h-5 ml-4 text-white' />
					</div>

					{isOpen && (
						<div className='absolute top-full left-0 mt-2 w-[120px] bg-[#1D202F] rounded-lg shadow-lg z-10'>
							{LANGUAGES.map(lang => (
								<div
									key={lang.code}
									className='flex items-center px-3 py-2 text-white hover:bg-[#141621] cursor-pointer'
									onClick={() => changeLanguage(lang.code)}
								>
									<Image
										src={lang.flag}
										alt={`${lang.name} flag`}
										width={16}
										height={12}
										className='mr-2'
									/>
									<span>{lang.name}</span>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Кнопка входа через Steam */}
				<Link
					href='https://csstats.gg/login'
					id='login-with-steam'
					className='flex items-center gap-2 mt-3 lg:mt-0 text-white py-2 pl-3 border-l-[1px] border-gray-600'
				>
					<span id='signin-text' className='text-sm'>
						{t('signInWithSteam')}
					</span>
					<Image
						src='https://static.csstats.gg/images/steam.png'
						width={22}
						height={22}
						alt='Steam Login'
						className='w-5 h-5 sm:w-[22px] sm:h-[22px]'
					/>
				</Link>
			</div>
		</header>
	)
}

export default Header
