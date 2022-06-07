import React from "react";
import { NavLink} from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import '../estilos/estilos paginas/ElectricidadPagina.css';
import {useEffect} from'react';
import axios from 'axios';
import NovedadItem from '../componentes/NovedadItem';



import '../estilos/estilos paginas/HomePagina.css'


const LibroEnMente = props => {

    const [activo, setActivo] = useState(true);

    const toggleActivo = e => {
        setActivo(!activo);
    };

    return (
        <div className="CajaGeneralCongelarIdea">
            <div className="CajaCongelarIdea">
                <textarea type="text"  className="consulta" 
                    placeholder="En qué libro estás pensando?"
                    disabled={!activo} 
                />
                <button className="envio" 
                    onClick={toggleActivo}>
                    {activo ? 'Congelar idea' : 'Descongelar idea'}
                </button>
                <a className="login" href="https://expertobacktomasb.herokuapp.com/admin/login/logout">
                    Login
                </a>
            </div>
        </div>
    );
}

const infocaja = ['Precio: $ ','♡', '+ Carrito'];

const EjemploProps02 = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => 
            <li className="julio" key={elemento}>{elemento}</li>)}
        </ul>
    );
};

const HomePagina = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    useEffect(() => {
    const cargarNovedades = async () => {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
        setNovedades(response.data);
        setLoading(false);
    };
    cargarNovedades();
    },[]);

    return(
        <div className="cajaprincipal">

         <div className="cajadecajas">

        <div className="caja1">
            En BibliHouse no dedicamos a brindar 
            libros técnicos de calidad internacional. 
        </div>

        <div className="Fav">
        <NavLink to='/favoritos' 
        style={{ textDecoration: 'none', color: 'Red'}}>
        Libros Favoritos ♡
        </NavLink>
        </div>

        <div className="He">
        <div className="NovedadesHome">Novedades</div>

        <section className="He">
        {loading?(
          <p>Cargando ...</p>
         ) : (
            novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} 
                subtitle={item.subtitulo}
                imagen={item.imagen} 
                body={item.cuerpo}/>)
        )}
        </section>
        
        <div className="aa" >
            <div className="libro1"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>

        <div className="ab">
            <div className="libro2"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ac">
            <div className="libro3"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ad">
            <div className="libro4"></div>
            <EjemploProps02 elementos={infocaja}/>
        </div>
        
        <div className="ae">
            <div className="libro5"></div>
        <EjemploProps02 elementos={infocaja}/>
        </div>       
        </div>
        </div>
        </div>
    );
}
  


export const Mailer = () => {

    const sendEmail = (event) => {
      event.preventDefault();
  
      emailjs.sendForm('service_jxtbte7','template_x1cl6z2',event.target,'icupCBmkIQLeekk_x')
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }

    const pulsar = ()=>{
        document.getElementById('vacio').innerHTML = 'Envío exitoso!!!'
        console.log('Envío exitoso!!!')
    }
    return (
      <div className='caja6'>
        <h2>Contacto</h2>
        <h4>Complete el siguiente formulario</h4>
        <form className="caja7" onSubmit={sendEmail}>
          <label>Nombre y Apellido</label>
          <input type="text" name='user_name' />
          <label>Gmail</label>
          <input type="email" name='user_email' />
          <label>Mensaje</label>
          <textarea name="user_message" id="" cols="30" rows="10" className="consulta2"></textarea>

          <button className="envio2" onClick={()=>{pulsar()}}>Enviar</button>

        <h5 id="vacio" className="pulsar"></h5>
        <h6>Al presionar el boton "Enviar", la consulta se envía exitosamente a tomasbenitezc13@gmail.com</h6>
        <h6>Comprobar en consola</h6>
        </form>
      </div>
    )
}


const ContactoPage = (props) => {
    const initialForm = {
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
    }
      const [sending, setSending] = useState(false);
      const [msg, setMsg] = useState('');
      const [formData, setFormData] = useState(initialForm);
      
      const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    return (
    <main className="holder">
        <div className="columna contacto">
        <h2> Complete el siguiente formulario</h2>
        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario" >
        <p>
        <label>Nombre</label>
        <input type="text" name="nombre" value={formData.nombre}
        onChange={handleChange}/>
        </p>
        <p>
        <label>Email</label>
        <input type="text"name="email" value={formData.email}
        onChange={handleChange}/>
        </p>
        <p>
        <label>Teléfono</label>
        <input type="text"name="telefono" value={formData.telefono}
        onChange={handleChange}/>
        </p>
        <p>
        <label>Comentario</label>
        <textarea name="mensaje" value={formData.mensaje}
        onChange={handleChange}> </textarea>
        </p>
        </form>
        {sending ? <p>Enviando... </p> : null}
        {msg ? <p> {msg} </p> : null}
        <p className="centrar">
        <input type="submit" value="Enviar" />
        </p>
        </div>
    </main>
)}

function VistaConsola(props){
    
    return(
        
        <div className="PropsClase">{/*
        <button className='envio'
        onClick={()=> console.log('Has enviado tu consulta con éxito!!!')}>
        Console.log
        </button>
        <h6>Comprobar en consola</h6> */}
        </div>
       
    )
}  



export {HomePagina,LibroEnMente, VistaConsola, ContactoPage}