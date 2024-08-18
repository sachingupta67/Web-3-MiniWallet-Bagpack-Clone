import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button onClick={()=>alert('hello')}>Click me</Button>
    </div>
  )
}
