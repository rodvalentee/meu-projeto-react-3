import { useEffect, useState } from "react";


const minhaLista = [
    {id:'1', value: "Fruta"},
    {id:'2', value: "Legume"},
    {id:'3', value: "Carne"},
]
export default function App() {

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if(pesquisa){
        const  novaLista = minhaLista.filter((item) => {
          return item.value.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
        })
        setProdutos(novaLista)
      }
      else{
        setProdutos(minhaLista)
      }
    }
  , [pesquisa])
  
  
  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input 
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
      placeholder="Pesquise aqui"></input>
      {produtos.map((item) => {
        return(
          <div key = {item.id}>
            <h4>{item.value}</h4>
          </div>

        )
      })}
    </div>

  )
}


