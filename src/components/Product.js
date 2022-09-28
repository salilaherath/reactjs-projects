export default function Product() {
  //   const products = ['Laptop', 'Phone', 'Modem', 'Computer'];

  const products = [
    { id: 1, name: 'Cabbage', isFruit: false, price: 500 },
    { id: 2, name: 'Garlic', isFruit: false, price: 200 },
    { id: 3, name: 'Apple', isFruit: true, price: 50 },
  ];

  const productList = products.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.name}
    </li>
  ));

  return productList;

  // const products = [
  //   { id: 1, name: 'Laptop', price: 500 },
  //   { id: 2, name: 'Phone', price: 200 },
  //   { id: 3, name: 'Modem', price: 50 },
  //   { id: 4, name: 'Laptop', price: 800 },
  // ];

  // const friuts = ['Apple', 'Mango', 'Banana'];

  // const friutsList = friuts.map((friut, index) => <h3 key={index}>{friut}</h3>);

  /*
  const productList = products.map((product) => (
    <h3 key={product.id}>
      {product.name}: ${product.price}
    </h3>
  )); 
  */
  // return <div>{friutsList}</div>;
}
