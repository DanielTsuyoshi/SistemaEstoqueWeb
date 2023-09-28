import { getItem } from "@/actions/itens";
import NavBar from "@/components/NavBar";
import FormItemEdit from "./FormEdit";


export default async function FormItens({params}){
    
    const item = await getItem(params.id)
   
    return (
        <>
            <NavBar active={"itens"} />
            <FormItemEdit item={item} />
            
        </>

    )
}