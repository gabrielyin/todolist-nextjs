import { useState } from "react"

export default function Home() {
  const [andamento, setAndamento] = useState([]);
  const [feito, setFeito] = useState([]);
  const [item, setItem] = useState('');

  function adicionarItem() {
    const data = new Date().toLocaleString();
    setAndamento([...andamento, {
      date: data,
      task: item,
      status: false
    }])
    setItem('')
  }

  function itemConcluido(addItem) {
    setAndamento([...andamento.filter(item => item !== addItem)])
    setFeito([...feito, addItem]);
  }

  function removerItem(removeItem) {
    setAndamento([...andamento.filter(item => item !== removeItem)])
  }

  return (
    <div className="min-h-screen bg-primary pt-5">
      <div className="max-w-xs mx-auto">
        <h1 className="text-2xl text-center text-3xl text-white uppercase my-4 font-semibold">Todo List</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-white font-semibold mb-1">Adicionar item</label>
            <div className="flex gap-2">
              <input
                className="flex-1 px-2 rounded outline-none"
                type="text"
                placeholder="Adicionar item.."
                value={item}
                onChange={(ev) => setItem(ev.target.value)}
              />
              <button
                className="flex bg-green-400 items-center p-1.5 rounded cursor-pointer hover:bg-green-500 transition-all"
                onClick={() => adicionarItem()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-white flex gap-2">
            <button className="flex-1 border border-orange-500 bg-orange-500 p-2 rounded hover:bg-orange-600 transition-all font-semibold">
              Em andamento
            </button>
            <button className="flex-1 border border-green-500 bg-green-500 p-2 rounded hover:bg-green-600 transition-all font-semibold">
              Feito
            </button>
          </div>
          <div className="flex flex-col gap-2 text-white">
            {andamento.map((item, index) => {
              console.log(andamento);
              if (item.status === false) {
                return (
                  <div key={index} className="bg-secondary rounded-xl p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">
                        {item.date}
                      </span>
                      <div className="flex gap-2">
                        <button
                          className="bg-green-500 p-0.5 rounded"
                          onClick={() => itemConcluido(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </button>
                        <button
                          className="bg-red-500 p-0.5 rounded"
                          onClick={() => removerItem(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="flex-1">
                        {item.task}
                      </p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
