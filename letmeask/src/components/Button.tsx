import { ButtonHTMLAttributes} from 'react';
import '../styles/button.scss';
//definindo propriedades padrão de botões
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps){
    return(
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props} 
        />
    )
}