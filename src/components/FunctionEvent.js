function FunctionEvent() {
  const handleClick = () => {
    console.log('Button is clicked');
  };

  return (
    <div>
      <h1>Functional Component</h1>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default FunctionEvent;
