import { Header } from './components/Header'
import { PlusCircle } from 'lucide-react'

function App() {
  return (
    <>
      <Header />
      <div className="flex h-4 max-h-screen w-full items-center justify-center">
        <div className="flex w-1/2 justify-center gap-2  outline-none">
          <input
            className="container h-12 rounded-lg bg-zinc-700 p-4 font-medium text-white placeholder-zinc-500 outline-none"
            placeholder="Adicione uma nova tarefa"
          />
          <button className="flex h-12 items-center justify-between gap-2 rounded-lg bg-purple-500 p-4 text-sm font-semibold text-white">
            Criar
            <PlusCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-16 flex justify-center gap-6">
        <div className="flex w-1/2 flex-row items-center justify-between gap-6">
          <aside className="flex items-center gap-2 font-bold">
            <button className="text-sm  text-blue-300 hover:text-blue-500">
              Tarefas Criadas
            </button>
            <p className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-700 p-2 text-sm font-bold text-white">
              0
            </p>
          </aside>
          <aside className="flex items-center gap-2 font-bold">
            <button className="text-sm  text-green-300 hover:text-green-500">
              Concluídas
            </button>
            <p className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-700 p-2 text-sm font-bold text-white">
              0
            </p>
          </aside>
        </div>
      </div>
    </>
  )
}

export default App
