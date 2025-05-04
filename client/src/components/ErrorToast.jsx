import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearError } from '../JS/actions/auth.Action';

const ErrorToast = ({ errors }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Array.isArray(errors)) {
      errors.forEach((error, i) => {
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          theme: "light",
          toastId: `${error.msg}-${Date.now()}`
        });
      });

      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors, dispatch]);

  return null;
};

export default ErrorToast;
