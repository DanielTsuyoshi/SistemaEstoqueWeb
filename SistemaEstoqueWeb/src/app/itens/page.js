import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getItens() {
  const url = "http://localhost:8080/api/itens"
  const resp = await fetch(url)
  return resp.json()
}

export default async function Itens() {
  const data = await getItens()

  return (
    <>
      <NavBar active={"itens"} />

      <main className="bg-slate-900 m-12 p-4 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Itens</h2>
          <Button 
            icon={<PlusIcon className="h6 w-6" />}
            href="/itens/form"
          >
            criar itens
          </Button>
        </div>

        <div id="data">
          {data.map(item => <DataRow item={item} />)}
        </div>
      </main>
    </>
  )
}