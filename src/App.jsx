import { HashRouter, Route, Routes } from 'react-router'

import Nav from './components/navigation/Nav'
import Browsers from './components/browsers/Browsers'
import IDRoot from './components/id'
import FaceTool from './components/facetool/FaceTool'

function App() {

  return (
    <>
      <HashRouter>
        <Nav />
        <div className='content'>
        <Routes class="content">
          <Route path = "/id-verification" element={<IDRoot />} />
          <Route path = "/browsers" element={<Browsers />} />
          <Route path = "/facetool" element={<FaceTool />} />
        </Routes>
        </div>
      </HashRouter>
    </>
  )
}

export default App
