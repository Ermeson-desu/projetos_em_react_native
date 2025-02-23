import api from "./Api"; 
import { Alert } from "react-native";

export const fetchMangas = async () => {
    try {
        // Buscar os 10 mangás mais recentes
        const response = await api.get('/manga', {
            params: { limit: 10, order: { latestUploadedChapter: "desc" } }
        });

        const mangas = response.data.data; // Pegando os dados retornados

        // Buscar capa de cada mangá
        const mangasWithCovers = await Promise.all(mangas.map(async (manga) => {
            const mangaId = manga.id;

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
                image_url: coverUrl
            };
        }));

        return mangasWithCovers;

    } catch (error) {
        Alert.alert('Erro ao buscar mangás:', error.message);
        return [];
    }
};
