'use client'
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
function page() {
    const store = useAppStore()

  return (
    <div>page</div>
  )
}

export default page