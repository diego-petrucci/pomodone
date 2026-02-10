import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

export function App() {
  return (
    <div>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum perspiciatis quos ad minima nobis, consequuntur totam commodi fuga, dolorum explicabo ducimus natus accusantium in, animi repudiandae. Omnis, expedita officiis.</p>
    </div>
  )
}

