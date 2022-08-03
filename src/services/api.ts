import axios from 'axios'

const api = axios.create({
     baseURL: import.meta.env.VITE_ENDPOINT
     // headers: {
     //      'Cache-Control': 'no-cache',
     //      Pragma: 'no-cache',
     //      Expires: '0',
     // },
     // params: {
     //      t: new Date().getTime(),
     // },  < == Deixo isso ?
})

export function endpoints() {
     return {
          cards: {
               getOne: async  ( chaveCartaoVirtual : string)=> {

                    try {
                         const card = await api.get<User>(
                              `/api/v1/v-cards?guid=${chaveCartaoVirtual}`
                         )
                            console.log({card})
                         return card
                    } catch (error) {
                        console.log('endpoints/getOne',{error})
                    }
               },
          },
     }
}
