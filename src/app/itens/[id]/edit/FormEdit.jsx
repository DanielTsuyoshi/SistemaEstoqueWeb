"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { update } from "@/actions/itens";

export default function FormItemEdit({item}) {
    const [erro, setErro] = useState("")
    const [itemEdit, setItemEdit] = useState(item)
    const { push } = useRouter()

     async function onSubmit(){
        const resp = await update(itemEdit)
        if (resp?.error){
            setErro(resp.message)
            return
        }
        push("/itens")
    }

    function handleFieldChange(field, value){
        setItemEdit({
            ...itemEdit,
            [field]: value
        })
    }


    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-lg p-2 rounded">
            <h2 className="text-2xl font-bold">Editar item</h2>

            <form action={onSubmit} className="p-4">
                <InputText 
                    name="nome" 
                    label="nome" 
                    id="nome" 
                    value={itemEdit.nome} 
                    onChange={e => handleFieldChange("nome", e.target.value)}
                />
                <InputText 
                    name="icone" 
                    label="ícone" 
                    id="icone" 
                    value={itemEdit.icone}
                    onChange={e => handleFieldChange("icone", e.target.value)}
                />

                <div className="flex justify-around mt-4">
                    <Button href="/itens" variant="secundary">cancelar</Button>
                    <Button type="button">salvar</Button>
                </div>
                <p className="text-red-500">{erro}</p>
            </form>
        </main>
    )
}