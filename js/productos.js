// CONFIGURACIÓN: reemplaza este número por el WhatsApp real de Camp Store.
// Formato internacional: código de país + número, sin + ni espacios.
// Ejemplo ficticio de Bolivia: 59170000000.
const WHATSAPP_TIENDA = '59175884969';

// Fotografías demostrativas alojadas en Unsplash; reemplázalas por tus imágenes.
const productos = [
  {id:1,nombre:'Polera Oversize Essential',categoria:'Poleras',precio:95,anterior:120,etiqueta:'Oferta',tallas:['S','M','L','XL'],colores:['Negro','Blanco','Beige'],disponible:true,descripcion:'Polera de corte oversize, cómoda y versátil para un look urbano.',imagen:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=900&q=85&auto=format&fit=crop'},
  {id:2,nombre:'Polerón Urban Classic',categoria:'Polerones',precio:185,anterior:null,etiqueta:'Nuevo',tallas:['M','L','XL'],colores:['Negro','Gris'],disponible:true,descripcion:'Polerón casual de estilo urbano, ideal para días frescos.',imagen:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=85&auto=format&fit=crop'},
  {id:3,nombre:'Jean Denim Relaxed',categoria:'Pantalones',precio:170,anterior:195,etiqueta:'Oferta',tallas:['28','30','32','34'],colores:['Azul'],disponible:true,descripcion:'Jean de corte relajado para combinar con tus prendas favoritas.',imagen:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=85&auto=format&fit=crop'},
  {id:4,nombre:'Chaqueta Casual Street',categoria:'Chaquetas',precio:245,anterior:null,etiqueta:'Nuevo',tallas:['S','M','L'],colores:['Negro','Verde'],disponible:true,descripcion:'Chaqueta moderna que complementa tus outfits de temporada.',imagen:'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=900&q=85&auto=format&fit=crop'},
  {id:5,nombre:'Polera Basic Cotton',categoria:'Poleras',precio:80,anterior:null,etiqueta:'',tallas:['S','M','L'],colores:['Blanco','Negro'],disponible:true,descripcion:'Polera básica de uso diario, fácil de combinar.',imagen:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=85&auto=format&fit=crop'},
  {id:6,nombre:'Hoodie Cozy Fit',categoria:'Polerones',precio:195,anterior:null,etiqueta:'Nuevo',tallas:['M','L','XL'],colores:['Beige','Gris'],disponible:true,descripcion:'Hoodie de ajuste cómodo con un estilo relajado.',imagen:'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=900&q=85&auto=format&fit=crop'},
  {id:7,nombre:'Pantalón Cargo Street',categoria:'Pantalones',precio:180,anterior:null,etiqueta:'',tallas:['30','32','34','36'],colores:['Verde','Negro'],disponible:true,descripcion:'Pantalón cargo con bolsillos y diseño urbano.',imagen:'https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?w=900&q=85&auto=format&fit=crop'},
  {id:8,nombre:'Chaqueta Denim Vintage',categoria:'Chaquetas',precio:220,anterior:null,etiqueta:'Agotado',tallas:['S','M','L'],colores:['Azul'],disponible:false,descripcion:'Chaqueta denim de inspiración vintage.',imagen:'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=900&q=85&auto=format&fit=crop'}
];
