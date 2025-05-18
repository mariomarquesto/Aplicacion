import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantityInStock: number;
  description: string;
  pictureUrl: string;
  type: string;
  brand: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5086/api/products')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const addProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct: Product = {
      id: newId,
      name: 'Producto ' + newId,
      price: 100 + newId * 10,
      quantityInStock: 100,
      description: 'Producto de prueba',
      pictureUrl: 'https://picsum.photos/200',
      type: 'test',
      brand: 'genérico'
    };
    setProducts(prevState => [...prevState, newProduct]);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'red' }}>Productos</h1>
      <button onClick={addProduct} style={{ marginBottom: '10px' }}>
        Agregar producto
      </button>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.price.toFixed(2)}<br />
            <small>{p.description}</small><br />
            <img src={p.pictureUrl} alt={p.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
