import { useState } from 'react'
import { produk } from './data/produk'
import Card from './components/Card'
import './App.css'

function App() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredProduk = showAvailableOnly 
    ? produk.filter(p => p.stok > 0)
    : produk;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Katalog Produk Sederhana</h1>
      <button 
        onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        style={{ 
          marginBottom: '20px', 
          padding: '10px 15px', 
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {showAvailableOnly ? 'Tampilkan Semua Produk' : 'Tampilkan Hanya Produk Tersedia'}
      </button>

      {filteredProduk.length === 0 ? (
        <p>Produk tidak ditemukan</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredProduk.map(p => (
            <Card key={p.id} produk={p} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
