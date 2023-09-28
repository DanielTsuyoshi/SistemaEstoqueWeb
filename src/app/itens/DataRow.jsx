import DropMenu from "@/components/DropMenu";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function DataRow({item}){
    return (
        <div id="data-row" className="flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer">
            <div className="flex gap-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>{item.nome}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>R$100.00</span>
              <DropMenu idItem={item.id} />
            </div>
        </div>
    )
}