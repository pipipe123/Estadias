import axios from 'axios';

const URL_API = "http://localhost:3000/api";

// Escuela
export function createEscuela(data) {
    return axios.post(`${URL_API}/Escuela`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readEscuela() {
    return axios.get(`${URL_API}/Escuela`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readEscuelaxNombre(nombre) {
    return axios.get(`${URL_API}/Escuela/${nombre}`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function updateEscuela(data) {
    return axios.put(`${URL_API}/Escuela`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function deleteEscuela(data) {
    return axios.delete(`${URL_API}/Escuela`, { data })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Gimnasio
export function createGimnasio(data) {
    return axios.post(`${URL_API}/Gimnasio`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readGimnasio() {
    return axios.get(`${URL_API}/Gimnasio`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readGimnasioxNombre(nombre) {
    return axios.get(`${URL_API}/Gimnasio/${nombre}`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function updateGimnasio(data) {
    return axios.put(`${URL_API}/Gimnasio`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function deleteGimnasio(data) {
    return axios.delete(`${URL_API}/Gimnasio`, { data })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Entrenador
export function createEntrenador(data) {
    return axios.post(`${URL_API}/Entrenador`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readEntrenador() {
    return axios.get(`${URL_API}/Entrenador`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readEntrenadorxNombre(nombre) {
    return axios.get(`${URL_API}/Entrenador/${nombre}`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function updateEntrenador(data) {
    return axios.put(`${URL_API}/Entrenador`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function deleteEntrenador(data) {
    return axios.delete(`${URL_API}/Entrenador`, { data })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Competidor
export function createCompetidor(data) {
    return axios.post(`${URL_API}/Competidor`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readCompetidor() {
    return axios.get(`${URL_API}/Competidor`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function updateCompetidor(data) {
    return axios.put(`${URL_API}/Competidor`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function deleteCompetidor(data) {
    return axios.delete(`${URL_API}/Competidor`, { data })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

// Evento
export function createEvento(data) {
    return axios.post(`${URL_API}/Evento`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function readEvento() {
    return axios.get(`${URL_API}/Evento`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function ReadEventoxCodigo(codigo) {
    return axios.get(`${URL_API}/Evento/${codigo}`)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function updateEvento(data) {
    return axios.put(`${URL_API}/Evento`, data)
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}

export function deleteEvento(data) {
    return axios.delete(`${URL_API}/Evento`, { data })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            throw error;
        });
}
