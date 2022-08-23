import React from 'react'
import { WhatsappIcon } from 'react-share'
import { BsWhatsapp } from 'react-icons/bs'

const Whatsapp = () => {
	return (
		<>
			<div className='positionWhatsapp z-50 h-5 w-5 cursor-pointer bg-indigo-50 p-5 shadow-lg'>
				<BsWhatsapp className='text-3xl'/>
			</div>
		</>
	)
}

export default Whatsapp