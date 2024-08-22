import './App.css'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize';
import Body from './components/Body'

function App() {
  

  return (
    <RecoilRoot>
     <RecoilizeDebugger />
        <Body/>
    </RecoilRoot>
  )
}

export default App