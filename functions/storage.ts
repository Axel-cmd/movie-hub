import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Récupérer une données dans le AsyncStorage
 * @param key 
 * @returns 
 */
export async function getDataInAsyncStorage(key: string): Promise<string | null> {
   try {

    return await AsyncStorage.getItem(key);

   } catch (error: any) {

    throw new Error(error);

   }
}

/**
 * Ajouter une données dans le AsyncStorage 
 * @param key 
 * @param value 
 */
export async function storeDataInAsyncStorage(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error: any) {
        throw new Error(error);
        
    }
}