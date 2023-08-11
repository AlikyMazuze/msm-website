import PropTypes from 'prop-types'

export default function useRegex(type, value) {
    if(type === 'nome'){
        console.log(value)
        const regexNome = /^[\p{L}\p{M}\p{N}\p{P}\p{Zs}]{2,60}$/u;
        return regexNome.test(value)
    }
    if(type === 'codigo'){
        const regexCodigo = /^\d{6}$/;
        return regexCodigo.test(value)
    }
    if(type === 'apelido'){
        const regexApelido = /^[\p{L}\p{M}\p{N}\p{P}\p{Zs}]{2,60}$/u;
        return regexApelido.test(value)
    }
    if(type === 'idade'){
        const regexIdade = /^\d{2}$/;
        return regexIdade.test(value)
    }
    if(type === 'email'){
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(value)
    }
    if(type === 'telefone'){
        const regexTelefone = /^\d{9}$/;
        return regexTelefone.test(value)
    }
    throw new Error("Bad usage");
}

useRegex.prototype ={
    type: PropTypes.oneOf([
        'nome',
        'apelido',
        'codigo',
        'idade',
        'email',
        'telefone'
    ]).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}