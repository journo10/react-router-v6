import React from 'react'
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

function Home() {
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      navigate("/profile") //Bu şekilde istediğin sayfasına yönlendirme yapabilirsin, path ver unutma.
      //navigate("/home", {replace:true}) =>// Bu yöntemi anlamadım,sonra bak unutma..
      //navigate(-1) // Bir önceki sayfaya gitme yöntemi
    }, 3000);
  },[navigate])
  return (
    <div><h1>3 saniye sonra Profil sayfasına gidecek...</h1></div>
  )
}

export default Home