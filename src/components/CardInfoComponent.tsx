import { Flex, IconButton, Text } from '@chakra-ui/react'
import {
     MdEmail,
     MdLocationPin,
     MdOutlineLocationCity,
     MdPhone,
     
} from 'react-icons/md'

import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsQuestionLg } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

interface CardInfoComponentProps {
     type: 'mail' | 'phone' | 'work' | 'address' | 'Instagram' | 'LinkedIn' | 'Facebook' | 'Twitter' | 'WhatsApp'
     to: string
     text: string
     aria_label: string
}

export function CardInfoComponent({
     text,
     to,
     type,
     aria_label,
}: CardInfoComponentProps) {
     return (
          <Flex
               as='a'
               href={to}
               w='full'
               bg='primary_container'
               borderRadius='xl'
               padding='0.4rem'
               alignItems='center'
          >
               <IconButton
                    aria-label={aria_label}
                    mr='0.8rem'
                    size='xs'
                    color='primary_container'
                    fontSize='xl'
                    borderRadius='full'
                    icon={
                         type === 'mail' ? (
                              <MdEmail />
                         ) : type === 'address' ? (
                              <MdLocationPin />
                         ) : type === 'phone' ? (
                              <MdPhone />
                         ) : type === 'work' ? (
                              <MdOutlineLocationCity />
                         ): type === 'Facebook' ? (
                              <FaFacebookF />
                         ) : type === 'Instagram' ? (
                              <FaInstagramSquare />
                         ) : type === 'LinkedIn' ? (
                              <BsLinkedin />
                         ) : type === 'WhatsApp' ? (
                              <IoLogoWhatsapp />
                         ) : (
                              <BsQuestionLg />
                         )
                    }
                    bg='#FFF'
               />

               <Text
                    fontSize='16'
                    color='on_primary_container'
                    fontWeight='medium'
               >
                    {text}
               </Text>
          </Flex>
     )
}
