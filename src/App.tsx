import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>Bem-vindo à minha aplicação React</p>
    </>
  );
}
