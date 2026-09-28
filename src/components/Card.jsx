import React from 'react';

const Card = ({ produk }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h3>{produk.nama}</h3>
      <p>Harga: Rp {produk.harga.toLocaleString('id-ID')}</p>
      <p>Stok: {produk.stok === 0 ? <span style={{ color: 'red' }}>Habis</span> : produk.stok}</p>
    </div>
  );
};

export default Card;
