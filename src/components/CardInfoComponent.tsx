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
import { GoQuote } from 'react-icons/go'

interface CardInfoComponentProps {
     type: 'mail' | 'phone' | 'work' | 'address' | 'Instagram' | 'LinkedIn' | 'Facebook' | 'Twitter' | 'WhatsApp' | 'phrase'
     to: string
     text: string
     aria_label: string
}


const sanitize = (text:string):string =>{

     const array = text.split('/')

   

     return array[3]
}


export function CardInfoComponent({
     text,
     to,
     type,
     aria_label,
}: CardInfoComponentProps) {


console.log({to})

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
                         ) : type === 'phrase' ? (
                              <GoQuote />
                              
                         ): (
                              <GoQuote />
                         )
                    }
                    bg='#FFF'
               />

               <Text
                    fontSize='16'
                    color='on_primary_container'
                    fontWeight='medium'
                    maxW='250px'
               >


                    {type === 'Facebook' ? sanitize(text): text }
               </Text>
          </Flex>
     )
}
