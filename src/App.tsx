
import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import type { Technology } from "./Technology"
import TechnologyHeader from "./components/TechnologyHeader"
import TechCard from "./components/TechCard"
import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer"
import TechCardLoading from "./components/TechCardLoading"

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
      <Suspense fallback={<TechCardLoading />}>
        <TechCard techPromise={techPromise} />
       </Suspense>
       <ToastContainer />
       <Footer />
    </>
  )
}

export default App
