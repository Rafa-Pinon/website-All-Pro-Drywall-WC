<div className="centro">
  {/* Sección de texto */}
  <div className="comentarios">
    <h1>Contact Us</h1>
    <h2 className="lema">"Estamos aquí para ayudarte."</h2>
  </div>

  {/* Formulario */}
  <form
    name="contacto"
    method="POST"
    data-netlify="true"
    onSubmit={handleSubmit}
    className="formulario-container"
  >
    <input type="hidden" name="form-name" value="contacto" />
    <div>
      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Mensaje:</label>
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      ></textarea>
    </div>
    <button className="send" type="submit">
      Enviar
    </button>
  </form>
</div>;
