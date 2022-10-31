
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { FaWhatsappSquare } from 'react-icons/fa'

export const footer = [


	{

		children: <AiFillGithub />,
		href: 'https://github.com/UenisSantos/UenisSantos/blob/main/README.md',
		newTab: true,
		classe: 'git'

	},

	{

		children: <AiFillLinkedin />,
		href: 'https://www.linkedin.com/in/uenis-santos-desenvolvedor-front-end/',
		newTab: true,
		classe: 'linkedin'

	},

	{

		children: <SiGmail />,
		href: 'mailto:uenisprogramador@gmail.com',
		newTab: true,
		classe: 'email'

	},
	{

		children: <FaWhatsappSquare />,
		href: 'https://api.whatsapp.com/send?phone=5521994305914&text=oi%20uenis%20todo%20bom%20%3F',
		newTab: true,
		classe: 'whatsapp'

	},
]
