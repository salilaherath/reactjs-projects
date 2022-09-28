import { useState } from 'react';
import FunctionalCounter from './FunctionalCounter';
import Counter from './Counter';

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);

  //Ternary Conditional Operator
  return display ? (
    <div>
      <h3>This is a conditional component</h3>
    </div>
  ) : (
    <div>
      <h3>Nothing to see here</h3>
    </div>
  );

  //Conditional Rendering using elements
  /* let output;
  if (display) {
    output = <h3>This is a conditional component</h3>;
  } else {
    output = <h3>Nothing to see here</h3>;
  }
  return <div>{output}</div>; 
  */

  //Conditional Rendering
  /* if (display) {
    return (
      <div>
        <FunctionalCounter></FunctionalCounter>
      </div>
    ); 
  } else {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  }

  return <div></div>; */
}
