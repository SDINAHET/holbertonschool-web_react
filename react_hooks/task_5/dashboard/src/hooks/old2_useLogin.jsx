import { useState, useEffect, useCallback } from 'react';

export default function useLogin(onLogin = () => {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  // Validation simple attendue par les tests
  const isValidEmail = useCallback((value) => {
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(value);
  }, []);

  // Recalcule l'état du bouton dès qu'un champ change
  useEffect(() => {
    setEnableSubmit(isValidEmail(email) && password.length >= 8);
  }, [email, password, isValidEmail]);

  const handleChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (isValidEmail(email) && password.length >= 8) {
      onLogin(email, password);
    }
  }, [email, password, isValidEmail, onLogin]);

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
}
