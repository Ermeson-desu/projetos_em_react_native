import api from "./Api"; 
import { Alert } from "react-native";

export const searchManga = async (query) => {
    try {
        const response = await api.get('/manga', {
            params: { 
                title: query, // Filtra pelo título do mangá
                limit: 10, // Retorna apenas um resultado
                availableTranslatedLanguage: ['pt-br'],
                contentRating: ['safe', 'suggestive'], 
                excludedTags: [
                    '734c7ec5-8489-46a4-8b5d-3eecd50c45cb', // Hentai 
                    '97893a4c-12af-4dac-b6be-0c717c532b0d', // Ecchi 
                    '5920b825-4181-4a17-beeb-9918b0ff7a30', // Yaoi
                    'a3c67850-4684-404e-9b7f-c69850ee5da6'  // Yuri
                ]
            }
        });

        const mangas = response.data.data

        const MangaSearch = await Promise.all(mangas.map(async(manga) => {
            //Id do mangá
            const mangaId = manga.id

            //Título do mangá
            const title = manga.attributes.title["ja-ro"] || manga.attributes.title.en || "Título desconhecido";

            //Capa do mangá
            const coverResponse = await api.get(`/cover`, {
                params: { 'manga[]': mangaId }
            });

            const coverFileName = coverResponse.data.data[0]?.attributes.fileName;
            const coverUrl = coverFileName
                ? `https://uploads.mangadex.org/covers/${mangaId}/${coverFileName}`
                : "https://via.placeholder.com/200x300?text=Sem+Capa";

            return {
                id: mangaId,
                title:title,
                image_url: coverUrl
            };
        }))
        return MangaSearch;

    } catch (error) {
        Alert.alert('Erro ao buscar mangá:', error.message);
    }
};