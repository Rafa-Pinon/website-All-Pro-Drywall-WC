import React from "react";

function Contacto() {
  return (
    <>
      <form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Your Role:
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}

export default Contacto;
