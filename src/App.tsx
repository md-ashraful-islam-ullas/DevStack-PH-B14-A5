
import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import type { Technology } from "./Technology"
import TechnologyHeader from "./components/TechnologyHeader"
import TechCard from "./components/TechCard"
import { ToastContainer } from "react-toastify"

const techFetch = async(): Promise<Technology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  const [techPromise] = useState(() => techFetch())
  console.log(techPromise)

  return (
    <>
      <Nav />
      <Banner />
      <TechnologyHeader />
      <Suspense fallback={<div>Loading Technologies ...</div>}>
        <TechCard techPromise={techPromise} />
       </Suspense>
       <ToastContainer />
    </>
  )
}

export default App
