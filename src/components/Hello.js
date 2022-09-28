const name = 'Salila';

const displayMessage = () => {
  return 'I need help!';
};

function Hello() {
  return <h1>Message: {displayMessage()}</h1>;
}

export default Hello;
