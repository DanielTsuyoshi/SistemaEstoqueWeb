"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL +  "/itens"

export async function create(formData){
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        return {message: "Erro ao cadastrar"}
    }
    
    revalidatePath("/itens")
    return {message: "ok"}
       
}

export async function getItens() {
    const resp = await fetch(url)
    return resp.json()
}

export async function apagar(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if (resp.status !== 204) return {error: "Erro ao apagar item. "}

    revalidatePath("/itens")
}

export async function getItem(id){
    const getUrl =  url + "/" + id
    const resp = await fetch(getUrl)

    if (resp.status !== 200) return {error: "Erro ao carregar dados"}

    return await resp.json()

}

export async function update(item){
    const updateUrl =  url + "/" + item.id

    const options = {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if (resp.status !== 200) return {error: "Erro ao atualizar item"}

    revalidatePath("/itens")
}