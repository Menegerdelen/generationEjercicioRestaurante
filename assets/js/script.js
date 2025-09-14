

const fechaReserva = document.getElementById('fechaReserva')

const fechaActual = () => {
    const fecha = new Date()
    const year = fecha.getFullYear()
    const mes = String(fecha.getMonth() + 1).padStart(2, '0')
    const dia = String(fecha.getDate()).padStart(2, '0')

    const fechaMin = `${year}-${mes}-${dia}`

    fechaReserva.min = fechaMin
}

document.addEventListener('DOMContentLoaded', fechaActual)