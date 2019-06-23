export const doRestApi = async () =>{
    try {
        const response = await fetch('http://www.mocky.io/v2/5d0c61a53500006700b897b4')
        return response.json()
    }catch (e) {
        console.log(e)
    }
}