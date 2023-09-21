import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { getItens } from "@/actions/itens";

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
            criar item
          </Button>
        </div>

        <div id="data">
          {data.map(item => <DataRow item={item} />)}
        </div>
      </main>
    </>
  )
}