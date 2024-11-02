"use client"

import { useRef } from "react";
import { CreateArticle } from "../../actions/create-article"

export default function Create() {
    const title = useRef("");
    const content = useRef("");
   
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">
                Créer un article
            </h1>
            <div className="w-[500px] mx-auto bg-gray-100 p-5 rounded-xl border mt-4">
                <div className=" mt-4">
                    <input 
                        type="text"
                        placeholder="Titre"
                        ref={title}
                        className="px-4 py-2 w-full rounded" 
                    />
                </div>
                <div className="mt-4">
                    <textarea 
                        placeholder="Contenu"
                        ref={content}
                        className="px-4 py-2 w-full rounded" 
                    ></textarea> 
                </div>
                <div className="flex justify-end mt-4">
                    <button 
                        onClick={() => CreateArticle(title.current.value, content.current.value)}
                        className="px-4 py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 duration-100"
                        type="submit"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    )
}