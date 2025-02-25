import { Alert } from "react-native";
import api from './Api';

export const fetchChapters = async (mangaId) => {
    try {
        const response = await api.get(`/chapter`, {
            params: {
                manga: mangaId,
                translatedLanguage: ['pt-br'],
                order: { chapter: 'asc' },
                limit: 1
            }
        })

        const chapters = response.data?.data
        if (!chapters|| chapters.lenth===0){
            return []
        }

        return response.data.data; // Retorna os capítulos do mangá
    } catch (error) {
        Alert.alert("Erro ao buscar capítulos:", error.message)
        return[]
    }
}

export const fetchPages = async (chapterId) => {
    try{    
        const response = await api.get(`/at-home/server/${chapterId}`)
        const baseUrl = response.data.baseUrl
        const hash = response.data.chapter?.hash || response.data.hash
        const data = response.data.chapter?.data || response.data.data

        if (!data || data.length === 0) {
            return []
        }
        return ( data.map(fileName => `${baseUrl}/data/${hash}/${fileName}`))

    }catch (error){
        Alert.alert(`${chapterId}`, error.message)
        return []
    }
}

