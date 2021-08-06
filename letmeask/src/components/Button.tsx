import { ButtonHTMLAttributes} from 'react';
import '../styles/button.scss';
//definindo propriedades padrão de botões
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
    return(
        <button className="button" {...props} />
    )
}