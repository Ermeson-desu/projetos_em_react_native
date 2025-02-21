// //Se você não entender, não mexa 
// import axios from 'axios';

// // URL base da API
// const API_URL = 'https://mangahook-api.vercel.app/mangalist';

// /**
//  * Função para obter a lista de mangás da API.
//  * Realiza uma requisição GET para a API e retorna os dados de mangás.
//  * @param {number} page - Página da lista de mangás (padrão é 1).
//  * @param {string} category - Categoria dos mangás (padrão é "all").
//  * @param {string} type - Tipo de mangá (padrão é "newest").
//  * @param {string} state - Estado do mangá (padrão é "Ongoing").
//  * @returns {Object} - Dados dos mangás e metadados da API.
//  */
// export const getMangaList = async (
//     page=1, 
//     category = "all",
//     type="newest",
//     state = "Ongoing") => {

//         try{
//             const response = await axios.get(API_URL ,
//                 {params: {page, category, type, state}})
//                 return(response.data) // Retorna os dados recebidos
//         }catch (error){
//             console.error("Erro ao buscar o Mangá:", error)
//             return {mangaList:[], metaData:{}}
//         }
//     }