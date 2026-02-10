import { Container } from './components/Container'
import { Logo } from './components/Logo'

import './styles/theme.css'
import './styles/global.css'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer'


export function App() {

  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <CountDown></CountDown>
      </Container>

      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput labelText={"task"} id='MeuInput' type='text' placeholder='Digite Algo' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>)
}

