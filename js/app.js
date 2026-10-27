'use strict';
const $ = (selector) => document.querySelector(selector);
const grid = $('#productGrid');
const searchInput = $('#searchInput');
const categoryFilter = $('#categoryFilter');
const sortFilter = $('#sortFilter');
const chips = $('#categoryChips');
const dialog = $('#productDialog');
const dialogContent = $('#dialogContent');
let categoriaActual = 'todas';
const precioBs = (n) => `Bs ${Number(n).toFixed(2)}`;
const escapeHTML = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const waLink = (mensaje) => `https://wa.me/${WHATSAPP_TIENDA}?text=${encodeURIComponent(mensaje)}`;
const waGeneral = waLink('¡Hola Camp Store! Quisiera información sobre sus prendas.');
['#contactWhatsapp','#footerWhatsapp','#floatingWhatsapp'].forEach(sel => $(sel).href = waGeneral);
$('#year').textContent = new Date().getFullYear();
const categorias = ['todas',...new Set(productos.map(p => p.categoria))];
categoryFilter.innerHTML = categorias.map(c => `<option value="${escapeHTML(c)}">${c === 'todas' ? 'Todas las categorías' : escapeHTML(c)}</option>`).join('');
chips.innerHTML = categorias.map(c => `<button class="chip ${c==='todas'?'active':''}" type="button" data-category="${escapeHTML(c)}">${c==='todas'?'Todos':escapeHTML(c)}</button>`).join('');
function seleccionarCategoria(c) { categoriaActual=c; categoryFilter.value=c; chips.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.category===c)); render(); }
chips.addEventListener('click', e => {const b=e.target.closest('[data-category]');if(b) seleccionarCategoria(b.dataset.category);});
categoryFilter.addEventListener('change', e => seleccionarCategoria(e.target.value));
searchInput.addEventListener('input',render);
sortFilter.addEventListener('change',render);
function render(){
  const q=searchInput.value.toLocaleLowerCase('es').trim();
  let filtrados=productos.filter(p=>(categoriaActual==='todas'||p.categoria===categoriaActual)&&`${p.nombre} ${p.categoria} ${p.descripcion}`.toLocaleLowerCase('es').includes(q));
  const sort=sortFilter.value;
  if(sort==='menor') filtrados.sort((a,b)=>a.precio-b.precio);
  if(sort==='mayor') filtrados.sort((a,b)=>b.precio-a.precio);
  if(sort==='nombre') filtrados.sort((a,b)=>a.nombre.localeCompare(b.nombre,'es'));
  $('#resultCount').textContent=`${filtrados.length} ${filtrados.length===1?'producto encontrado':'productos encontrados'}`;
  $('#emptyState').hidden=filtrados.length!==0;
  grid.innerHTML=filtrados.map(p=>`<article class="product-card"><button class="product-photo" type="button" data-open="${p.id}" aria-label="Ver detalles de ${escapeHTML(p.nombre)}"><img src="${escapeHTML(p.imagen)}" alt="${escapeHTML(p.nombre)}" loading="lazy">${p.etiqueta?`<span class="product-badge ${!p.disponible?'sold':''}">${escapeHTML(p.etiqueta)}</span>`:''}<span class="photo-action">Ver detalles ↗</span></button><div class="product-info"><span class="product-category">${escapeHTML(p.categoria)}</span><button class="product-name" type="button" data-open="${p.id}">${escapeHTML(p.nombre)}</button><div class="price-row"><strong>${precioBs(p.precio)}</strong>${p.anterior?`<del>${precioBs(p.anterior)}</del>`:''}</div><div class="card-bottom"><span class="availability ${p.disponible?'':'unavailable'}">● ${p.disponible?'Disponible':'Agotado'}</span><button type="button" class="detail-arrow" data-open="${p.id}" aria-label="Ver detalles de ${escapeHTML(p.nombre)}">↗</button></div></div></article>`).join('');
}
function reset(){searchInput.value='';sortFilter.value='destacados';seleccionarCategoria('todas');}
$('#clearFilters').addEventListener('click',reset);
$('#emptyReset').addEventListener('click',reset);
grid.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b) abrirProducto(Number(b.dataset.open));});
function abrirProducto(id){
 const p=productos.find(item=>item.id===id);if(!p)return;
 const mensaje=`¡Hola Camp Store! Me interesa la prenda: ${p.nombre} (${precioBs(p.precio)}). ¿Podrían confirmarme tallas, colores y disponibilidad?`;
 dialogContent.innerHTML=`<div class="dialog-grid"><div class="dialog-image"><img src="${escapeHTML(p.imagen)}" alt="${escapeHTML(p.nombre)}"></div><div class="dialog-info"><span class="eyebrow">${escapeHTML(p.categoria)}</span><h2 id="dialogTitle">${escapeHTML(p.nombre)}</h2><div class="dialog-price">${precioBs(p.precio)} ${p.anterior?`<del>${precioBs(p.anterior)}</del>`:''}</div><p>${escapeHTML(p.descripcion)}</p><div class="detail-group"><strong>Tallas disponibles</strong><div class="option-list">${p.tallas.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></div><div class="detail-group"><strong>Colores</strong><div class="option-list">${p.colores.map(c=>`<span>${escapeHTML(c)}</span>`).join('')}</div></div><p class="availability ${p.disponible?'':'unavailable'}">● ${p.disponible?'Disponible para consultar':'Actualmente agotado'}</p><a class="btn btn-primary dialog-whatsapp" href="${waLink(mensaje)}" target="_blank" rel="noopener noreferrer">✆ Consultar por WhatsApp ↗</a><small>Confirma disponibilidad y precio final con la tienda.</small></div></div>`;
 if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
}
$('#dialogClose').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const menuToggle=$('#menuToggle');const navLinks=$('#navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menú');}));
render();
