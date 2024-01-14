import Image from "next/image"

export default function loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image className="h-50" src="/Eclipse-1s-200px.svg" width={100} height={100} alt="loading" />
    </div>
  )
}
