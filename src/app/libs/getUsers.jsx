export default async function getUsers() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return await res.json()
      } catch (error) {
        console.log(error);
      }
}
