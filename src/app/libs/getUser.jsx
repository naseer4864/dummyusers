

export default async function getUser({id}) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/users/${id}`, {
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
      })  
      if(!res.ok){
        throw new Error(res.statusText)
      }
      return await res.json()
    } catch (error) {
        console.log(error)
    }
  
}
