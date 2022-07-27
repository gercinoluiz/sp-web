export {}

declare global {
     /**
      * Now declare things that go in the global namespace,
      * or augment existing declarations in the global namespace.
      */

     type UserSocialMedia = 'Instagram' | 'LinkedIn' | 'Facebook' | 'Twitter' | 'WhatsApp'

     interface User {
          id: number
          nomeUsuarioCartaoVirtual: string
          ordem: number
          descricao: string
          profissao: string
          frase: string
          endereco: string
          latitude: number
          longitude: number
          chaveCartaoVirtual: string
          email: string
          exibirEmail: boolean
          telefone: string
          tipoTelefone: number
          exibirTelefone: true
          midiasSociais: [
               {
                    midia: number
                    nomeMidia:UserSocialMedia
                    endereco: string
                    exibir: boolean
               }
          ]
          imagensCartaoVirtual: []
          usuarioId: number
          usuario: string
          telefones: string
          emails: string
          redesSociais: string
          imagens: string
          dataAtualizacao: string
     }
     interface IUserContextType{
          fetchUser()
     }
}

// {
//      "id": 1,
//      "nomeUsuarioCartaoVirtual": "Carlota",
//      "ordem": 1,
//      "descricao": "CARD 5",
//      "profissao": "analista",
//      "frase": "Viva la vita",
//      "endereco": "rua Ipo",
//      "latitude": 0,
//      "longitude": 0,
//      "chaveCartaoVirtual": "ea391618-d489-4885-b187-577147050390",
//      "email": "teste@teste.com",
//      "exibirEmail": true,
//      "telefone": "11 98108-8373",
//      "tipoTelefone": 1,
//      "exibirTelefone": true,
//      "midiasSociais": [
//        {
//          "midia": 1,
//          "nomeMidia": "Facebook",
//          "endereco": "http://linkRedeSocial1.com",
//          "exibir": false    }
//      ],
//      "imagensCartaoVirtual": [],
//      "usuarioId": 1,
//      "usuario": null,
//      "telefones": null,
//      "emails": null,
//      "redesSociais": null,
//      "imagens": null,
//      "dataAtualizacao": null}