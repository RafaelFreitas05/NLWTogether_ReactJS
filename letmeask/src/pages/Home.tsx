import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'
import { Link } from 'react-router-dom'
import illustrationIMG from '../assets/images/illustration.svg';
import logoIMG from '../assets/images/logo.svg';
import googleIconIMG from '../assets/images/google-icon.svg';
import { Button } from '../components/Button'
import '../styles/auth.scss';

export function Home(){

    const history = useHistory();

    function handleCreateRoom(){
        const provider = new firebase.auth.GoogleAuthProvider
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })

        //history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationIMG} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoIMG} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room"> 
                        <img src={ googleIconIMG } alt="Logo do Google" />
                        Crie sua sala com o Google                        
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"                        
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}