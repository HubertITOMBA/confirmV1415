import { notFound } from "next/navigation"

export default function Article({params: { slug }}) {

   if(slug !== 'Hubert') {
        notFound();    
   }

    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}