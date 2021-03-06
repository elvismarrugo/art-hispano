import { useState } from "react";
import { auth, db } from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/Signup.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import Label from "components/Label";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Completa este campo!");
      return;
    }
    if (!pass.trim()) {
      setError("Introduce una contraseña!");
      return;
    }
    if (pass.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    
    setError(null);

    signUp();
  };

  const login = () => {
    router.push("/login");
  };
  const signUp = async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(res.user);
      await db.collection("usuarios").doc(res.user.email).set({
        email : res.user.email,
        uid : res.user.uid,
      })
      // Todo : user.sendEmailVerification() -clase 7 y 8 firebase
      setEmail("");
      setPass("");
      setError(null);
      router.push("/admin");
    } catch (error) {   
      // console.log(error)
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya está registrado");         
      }
      if (error.code === "auth/invalid-email") {
        setError("El email no es válido");
      }
    }
  };

  return (
    <>
      <div className={styles.MainContainer}>
        {error && <div className={styles.ContainerError}>{error}</div>}        
        <div className={styles.Main}>
          <form className={styles.FormContainer} onSubmit={procesarDatos}>
            <h2 className={styles.Title}>Registro de usuarios</h2>
            <Label className={styles.FormContainerLabel} for="email">
              Correo
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label className={styles.FormContainerLabel} for="password">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Ingrese su contrase&ntilde;a"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <Button style="--Brand" type="submit" title="Crea tu cuenta">
              Registrarse
            </Button>
          </form>
          <section className={styles.ContainerSignup}>
            <Button style="--Registrate" onClick={login}>
              ¿Ya estás registrado?
            </Button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Signup;