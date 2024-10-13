import { useState, useEffect } from 'react';

export default function useBrowserPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (showPrompt) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [showPrompt]);

  return { setShowPrompt };
}
