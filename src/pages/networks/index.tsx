import { useState, FormEvent, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");

useEffect(() => {
    function loadLinks(){
        const docRef = doc(db, "social", "link")
        getDoc(docRef)
        .then((snapshot) => {
            if(snapshot.data() !== undefined){
                setLinkedin(snapshot.data()?.linkedin as string)
                setInstagram(snapshot.data()?.instagram as string)
                setGithub(snapshot.data()?.github as string)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    loadLinks();
}, [])

function handleRegister(e: FormEvent){
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
        linkedin: linkedin, 
        instagram: instagram,
        github: github,
    })
    .then(() => {
        console.log("Cadastrados com sucesso!")
    })
    .catch((error) => {
        console.log(error)
    })
}

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas Redes sociaiss
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do LinkedIn
        </label>
        <Input
          type="url"
          placeholder="Digite a url do LinkedIn.."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          type="url"
          placeholder="Digite a url do Instagram.."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do GitHub
        </label>
        <Input
          type="url"
          placeholder="Digite a url do GitHub.."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 mt-4 font-medium"
        >Salvar links</button>
      </form>
    </div>
  );
}
