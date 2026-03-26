const changeTextForColor = (text: string) => {
        if(text == "Paga")
            return 'green'
        else if(text == "Vencida")
            return 'red'
        else if(text == "Emitida")
            return 'blue'
        else if(text == "Cancelada")
            return 'orange'
        else return text
    }

export default changeTextForColor