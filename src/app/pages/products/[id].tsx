import { useRouter } from 'next/router';
import products from '../../data/products'; // Supponendo che tu abbia un array di prodotti

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Cerca il prodotto per ID (con parseInt per sicurezza)
  const product = products.find(p => p.id === parseInt(id as string));

  if (!product) {
    return <div style={{ padding: "2rem" }}>Prodotto non trovato.</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
      <p style={{ marginTop: "1rem" }}>{product.description}</p>
      <p><strong>Prezzo:</strong> €{product.price.toFixed(2)}</p>
    </div>
  );
}
