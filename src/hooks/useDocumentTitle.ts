import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]); // Se re-ejecuta si el título cambia (útil para títulos dinámicos)
};

export default useDocumentTitle;