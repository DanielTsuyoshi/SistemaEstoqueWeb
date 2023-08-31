import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getItens(){
  const url = "http://localhost:8080/api/itens"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Itens() {
  const data = await getItens()

  return (
    <>
      <NavBar active={"itens"} />

      <main className="bg-slate-900 m-12 p-4 rounded">
        <h2 className="text-2xl font-bold">Itens</h2>
        <div id="data">
          {data.map(item => <DataRow item={item} />)}
        </div>
      </main>
    </>
  )
}