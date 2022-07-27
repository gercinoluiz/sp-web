import { IconButton } from '@chakra-ui/react'

import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

interface CardInfoSocialNetworkComponentProps {
     type: 'Instagram' | 'LinkedIn' | 'Facebook' | 'Twitter' | 'WhatsApp'
     aria_label: string
     to: string
}

export function CardInfoSocialNetworkComponent({
     type,
     aria_label,
     to,
}: CardInfoSocialNetworkComponentProps) {
     return (
          <IconButton
               aria-label={aria_label}
               size='lg'
               color='primary_container'
               fontSize='3rem'
               borderRadius='full'
               as='a'
               href={type === 'WhatsApp' ? `whatsapp://send${to}` : to}
               icon={
                    type === 'Facebook' ? (
                         <BsFacebook />
                    ) : type === 'Instagram' ? (
                         <FaInstagramSquare />
                    ) : type === 'LinkedIn' ? (
                         <BsLinkedin />
                    ) : type === 'WhatsApp' ? (
                         <IoLogoWhatsapp />
                    ) : (
                         <BsFacebook />
                    )
               }
               bg='#FFF'
          />
     )
}
