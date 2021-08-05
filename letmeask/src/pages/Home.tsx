import illustrationIMG from '../assets/images/illustration.svg';
import logoIMG from '../assets/images/logo.svg';
import googleIconIMG from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home(){
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
                    <button>
                        <img src={ googleIconIMG } alt="Logo do Google" />
                        Crie sua sala com o Google                        
                    </button>
                    <div>
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"                        
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}