import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface PropsTypes {
  url: string;
  style?:string
}


const LottiePlayer: React.FC<PropsTypes> = (props) => {
  const [width, setWidth] = useState(700);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 1024 && window.innerWidth >= 720) {
             setWidth(300);

        } else if (window.innerWidth <= 720 ) {
            setWidth(200);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <lottie-player src="https://lottie.host/6f4ee854-3625-4849-8985-e423a0752949/hZWZsrb0zk.json" background="transparent" speed="1" direction="1" mode="normal" loop controls autoplay></lottie-player>
    <Player src={props.url} className={props.style} loop autoplay/>
  );
};

export default LottiePlayer;