import { LayoutList } from 'lucide-react'

export function Header() {
  return (
    <header className=" flex h-48 items-center justify-center gap-2 bg-black">
      <div className="flex items-center justify-between gap-2 border-b border-purple-300 p-4 text-5xl font-semibold text-purple-600 outline-none hover:cursor-pointer hover:border-purple-800 hover:text-purple-800">
        <a href="#top" className="flex flex-row gap-2">
          <LayoutList className="h-12 w-12" />
          Todo
        </a>
      </div>
    </header>
  )
}
