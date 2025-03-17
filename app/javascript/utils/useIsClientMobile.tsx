import { useState, useEffect } from 'react';

const useIsClientMobile = (serverMobile: boolean) => {
  // Start with the server-determined value
  const [isClientMobile, setIsClientMobile] = useState(serverMobile);

  // This only runs on the client - This determines the UI for the shimmer loaders
  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth <= 768;
      setIsClientMobile(mobile);
    };

    // Initial check
    updateLayout();

    // Add listener for window resize
    window.addEventListener('resize', updateLayout);

    // Cleanup
    return () => window.removeEventListener('resize', updateLayout);
  }, [serverMobile]);

  return { isClientMobile };
};

export default useIsClientMobile;
