import { Suspense } from "react";
import PostArticles from "../components/Posts"


export default function Index() {

    return (
      <div>
        <h1 className="text-4xl font-semibold mb-5">Accueil</h1>
        <Suspense fallback={<p>Chargement ...</p>}>
            <PostArticles />
        </Suspense>
      </div>
    )
}