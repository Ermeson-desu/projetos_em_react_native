import api from "./Api"; 
import { Alert } from "react-native";

export const fetchIsekais = async () => {
    try {
        // Buscar os 10 isekais mais relevantes
        const response = await api.get('/manga', {
            params: { limit: 10, order:{ relevance: 'desc' },
                availableTranslatedLanguage: ['pt-br'],
                contentRating: ['safe', 'suggestive'], 
                includedTags: [
                    'ace04997-f6bd-436e-b261-779182193d3d'  // Isekai
                ],
                excludedTags: [
                        '734c7ec5-8489-46a4-8b5d-3eecd50c45cb',//hentai 
                        '97893a4c-12af-4dac-b6be-0c717c532b0d',// ecchi 
                        '5920b825-4181-4a17-beeb-9918b0ff7a30',// yaoi
                        'a3c67850-4684-404e-9b7f-c69850ee5da6'//  yuri'
                    ]
            }
        });

        const mangas = response.data.data; // Pegando os dados retornados

        // Buscar capa de cada mangá
        const mangasWithCovers = await Promise.all(mangas.map(async (manga) => {
            const mangaId = manga.id;

            const title = manga.attributes.title['ja-ro']||manga.attributes.title.en || 'Título desconhecido'

            // Buscar capa do mangá
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
        }));

        return mangasWithCovers;

    } catch (error) {
        Alert.alert('Erro ao buscar mangás:', error.message);
        return [];
    }
};
