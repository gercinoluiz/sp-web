import {
     Avatar,
     Box,
     Center,
     Flex,
     HStack,
     Image,
     Text,
     VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

//Icon Imports

//temp imports

import backGroundImage from '../assets/background-example.png'
import logoProdam from '../assets/logo-prodam.png'
import { CardInfoComponent } from '../components/CardInfoComponent'
import { CardInfoSocialNetworkComponent } from '../components/CardInfoSocialNetworkComponent'
import { endpoints } from '../services/api'

export function Home() {
     const [user, setUser] = useState<User>({
          id: 0,
          nomeUsuarioCartaoVirtual: '',
          ordem: 0,
          descricao: '',
          profissao: '',
          frase: '',
          endereco: '',
          latitude: 0,
          longitude: 0,
          chaveCartaoVirtual: '',
          email: '',
          exibirEmail: false,
          telefone: '',
          tipoTelefone: 0,
          exibirTelefone: true,
          midiasSociais: [
               {
                    midia: 0,
                    nomeMidia: 'Facebook',
                    endereco: '',
                    exibir: false,
               },
          ],
          imagensCartaoVirtual: [],
          usuarioId: 0,
          usuario: '',
          telefones: '',
          emails: '',
          redesSociais: '',
          imagens: '',
          dataAtualizacao: '',
     } as User)

     useEffect(() => {
          loadUserData()
     }, [])

     const loadUserData = async () => {
          const result = await endpoints().cards.getOne(
               'ADdasadssdasdasd-546465-asdASDadadasda'
          )
          

          if (result?.data) {
               setUser(result.data)
          }

          
     }

     return (
          <Center width='100vw' height='100vh' bg='gray.200'>
               <Flex
                    direction='column'
                    w='100%'
                    h='100%'
                    maxH={['100%', 750, 750]}
                    maxW={['100%', 380, 380]}
                    bg='secondary'
                    alignItems='center'
                    justifyContent='center'
               >
                    <Image
                         src={backGroundImage}
                         alt='Example BCKG'
                         objectFit='cover'
                         width='full'
                         maxW='700px'
                         maxH={['12rem', '18rem']}
                    />
                    <Flex
                         bg='#FFF'
                         w='100%'
                         h='100%'
                         borderTopRadius='2xl'
                         marginTop='-5'
                         direction='column'
                         alignItems='center'
                    >
                         <Avatar
                              name='Gercino Luiz'
                              marginLeft='50%'
                              size={['2xl', '2xl']}
                              css={{
                                   transform: 'translate(-50%, -50%)',
                              }}
                              marginRight='auto'
                              src='https://media-exp1.licdn.com/dms/image/C4D03AQFXzs_1s0OBCA/profile-displayphoto-shrink_200_200/0/1612984796843?e=1665014400&v=beta&t=1jkcqbDPRo244ov3Ale3YP2SmDEfE6w3Cu-p-k3pGSA'
                              
                         />

                         <Image
                              src={logoProdam}
                              alt='Logo Prodam'
                              objectFit='cover'
                              maxW={['54%', '65%']}
                              width='100%'
                              maxH='400px'
                              mt='-12'
                         />

                         <Flex
                              direction='column'
                              textDecoration='bold'
                              textAlign='center'
                         >
                              <Text
                                   color='primary_light'
                                   fontWeight='extrabold'
                                   fontSize={['1.4rem']}
                              >
                                   {user.nomeUsuarioCartaoVirtual}
                              </Text>

                              <Text
                                   color='secondary'
                                   fontWeight='medium'
                                   fontSize='xl'
                              >
                                   {user
                                        ? `${user?.profissao
                                             .charAt(0)
                                             .toUpperCase()}${user?.profissao.slice(
                                                  1
                                             )}`
                                        : ''}
                              </Text>
                         </Flex>

                         <VStack
                              bg='primary_container'
                              spacing='0.03rem'
                              mt='7'
                              w='85%'
                              borderRadius='2xl'
                         >
                              <Box
                                   mt='0.8rem'
                                   mb='0.8rem'
                                   ml='1.5rem'
                                   mr='auto'
                                   
                                   
                              >
                                   <CardInfoComponent
                                        aria_label='Mail'
                                        text={user.email}
                                        to={`mailto:${user.email}`}
                                        type='mail'
                                   />

                                   <CardInfoComponent
                                        aria_label='telefone'
                                        text={`${user.telefone}`}
                                        to={`tel:${user.telefone}`}
                                        type='phone'
                                   />



                                   <CardInfoComponent
                                        aria_label='Endereço'
                                        text={`${user.endereco}`}
                                        to={`http://maps.google.com/?q=${user.endereco}`}
                                        type='address'
                                   />

                                   {user.midiasSociais.map(
                                        (socialMedia, index) => (
                                             <CardInfoComponent
                                                  type={socialMedia.nomeMidia}
                                                  aria_label={
                                                       socialMedia.nomeMidia
                                                  }
                                                  key={index}
                                                  to={socialMedia.endereco}
                                                  text={socialMedia.endereco}
                                             />
                                        )
                                   )}

                                   <CardInfoComponent
                                        aria_label='Frase'
                                        text={`${user.frase}`}
                                        to='/'
                                        type='phrase'
                                   />
                              </Box>
                         </VStack>

                         <HStack mt='10%' w='85%'></HStack>
                    </Flex>
               </Flex>
          </Center>
     )
}
