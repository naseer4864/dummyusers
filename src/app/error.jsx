"use client"
import { useEffect } from "react"

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error)
  },[error])
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-500">
      <div className="flex flex-col gap-5 p-10 rounded bg-slate-200" >
        <p className="text-center">Something went wrong please try again</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  )
}
