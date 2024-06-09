const setProperty = (duration) => {
    document.documentElement.style.setProperty(
      "--animation-time",
      duration + "s"
    );
  };
  
  const changeAnimationTime = () => {
    const animationDuration = Math.random();
    setProperty(animationDuration);
  };
  
  setInterval(changeAnimationTime, 1000);
  