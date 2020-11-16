export default function loadLocally(key) {
    const jsonString = localStorage.getItem(key)
    try {
        return JSON.parse(jsonString) // parse macht aus dem JSON-String wieder ein Array und returnt diesen
    } catch (error) {
        console.log('Error')
    }
}