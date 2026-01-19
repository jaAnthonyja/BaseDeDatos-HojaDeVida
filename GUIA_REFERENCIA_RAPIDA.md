# 🎨 GUÍA DE REFERENCIA RÁPIDA - TEMA MODERNO

## 📍 UBICACIÓN DE ARCHIVOS

```
proyecto/hoja_de_vida/
├── static/
│   ├── css/
│   │   ├── modern-cv-style.css ✨ (NUEVO)
│   │   └── admin-modern-theme.css ✨ (NUEVO)
│   └── js/
│       └── animations.js ✨ (NUEVO)
├── perfil/
│   └── templates/perfil/
│       └── hoja_vida.html 📝 (MODIFICADO)
├── templates/admin/
│   ├── base_site.html 📝 (MODIFICADO)
│   └── login.html 📝 (MODIFICADO)
└── REDISENO_COMPLETADO.md 📋 (DOCUMENTACIÓN)
```

---

## 🎯 ACCESOS DIRECTOS

### Servidor local
```
http://127.0.0.1:8000/perfil/
http://127.0.0.1:8000/admin/
```

### Archivos principales a modificar
- Estilos: `static/css/modern-cv-style.css`
- Animaciones: `static/js/animations.js`
- Template: `perfil/templates/perfil/hoja_vida.html`

---

## 🎨 PALETA DE COLORES - CSS

```css
/* En modern-cv-style.css */
:root {
    --primary-green: #7ed321;      /* Verde neón principal */
    --dark-bg: #000000;             /* Fondo negro */
    --secondary-dark: #1a1a1a;      /* Gris oscuro */
    --grid-green: #1a3d1a;          /* Verde cuadrícula */
    --text-light: #ffffff;          /* Texto blanco */
    --text-gray: #cccccc;           /* Texto gris claro */
    --text-dark-gray: #999999;      /* Texto gris oscuro */
}
```

---

## 📌 CLASES CSS ÚTILES

### Texto
- `.text-green` - Color verde neón
- `.text-gray` - Color gris claro
- `.text-white` - Color blanco
- `.text-dark-gray` - Color gris oscuro

### Fondo
- `.bg-dark` - Fondo gris oscuro
- `.bg-transparent` - Fondo transparente

### Espaciado (Margin)
- `.mt-10`, `.mt-20`, `.mt-30` - Margin-top
- `.mb-10`, `.mb-20`, `.mb-30` - Margin-bottom

### Espaciado (Padding)
- `.p-10`, `.p-20`, `.p-30` - Padding

### Flexbox
- `.flex` - Display flex
- `.flex-center` - Flex con center
- `.flex-between` - Flex space-between
- `.flex-col` - Flex column
- `.gap-10`, `.gap-20` - Gap

### Bordes
- `.border-top` - Borde superior
- `.border-bottom` - Borde inferior
- `.border-green` - Borde verde

---

## ✨ ANIMACIONES

### En CSS
```css
@keyframes fadeIn { /* Desvanecimiento */ }
@keyframes slideInLeft { /* Entrada desde izquierda */ }
@keyframes slideInRight { /* Entrada desde derecha */ }
@keyframes pulse { /* Pulsación */ }
@keyframes glow { /* Brillo */ }
```

### Aplicar en HTML
```html
<!-- Desvanecimiento gradual -->
<section class="fade-in">

<!-- Entrada desde la izquierda -->
<section class="slide-in-left">

<!-- Efecto de brillo continuo -->
<div class="glow">

<!-- Efecto de pulsación -->
<div class="pulse">
```

---

## 🔧 CAMBIOS COMUNES

### Cambiar color principal
Edita en `modern-cv-style.css`:
```css
:root {
    --primary-green: #7ed321; /* Cambia aquí */
}
```

### Cambiar velocidad de animaciones
En `modern-cv-style.css`, busca `transition`:
```css
/* De 0.3s a 0.5s (más lento) */
transition: all 0.5s ease;
```

### Ajustar tamaño de títulos
En `modern-cv-style.css`:
```css
h1 {
    font-size: 48px; /* Cambia este valor */
}
```

### Desactivar cuadrícula de fondo
En `modern-cv-style.css`, busca `.grid-background` y:
```css
.grid-background {
    display: none; /* Desactiva la cuadrícula */
}
```

---

## 🚀 COMANDOS ÚTILES

### Iniciar servidor
```bash
cd c:\Users\HP\Desktop\Deivis-Proyecto\proyecto\hoja_de_vida
python manage.py runserver
```

### Recopilar archivos estáticos
```bash
python manage.py collectstatic --noinput
```

### Verificar errores
```bash
python manage.py check
```

### Crear superusuario (admin)
```bash
python manage.py createsuperuser
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Desktop: Mayor a 1024px */
@media (max-width: 1024px) { /* Tablet grande */ }

/* Tablet: 768px a 1024px */
@media (max-width: 768px) { /* Tablet */ }

/* Mobile: Menor a 480px */
@media (max-width: 480px) { /* Teléfono */ }
```

---

## 🎬 VARIABLES DE ANIMACIÓN

En JavaScript (`animations.js`):
```javascript
// Velocidad de typewriter (en ms)
setTimeout(typeWriter, 50); /* 50ms entre caracteres */

// Delay de observador (en ms)
threshold: 0.15, /* Dispara a 15% visible */

/* Speed de parallax */
const speed = 0.08; /* 0.08 * scrolled */
```

---

## ✅ TESTING CHECKLIST

Después de cambios, verifica:
- [ ] CSS carga correctamente (ver en DevTools)
- [ ] Animaciones funcionan en scroll
- [ ] Diseño responsive en mobile
- [ ] Botones clickeables
- [ ] Formularios funcionan
- [ ] Sin errores en consola (F12 > Console)
- [ ] Colores se ven bien
- [ ] Textos legibles

---

## 🐛 TROUBLESHOOTING

### CSS no aplica
1. Ejecuta: `python manage.py collectstatic --noinput`
2. Limpia caché: Ctrl+Shift+R en navegador
3. Verifica path en URL

### Animaciones no funcionan
1. Verifica que `animations.js` esté en `<script>` tag
2. Comprueba en DevTools > Console
3. Abre DevTools > Network y verifica que carga

### Fondo cuadrícula no se ve
1. Ajusta `opacity` en `.grid-background`
2. Verifica que el body tenga `background: #000`

### Colores no coinciden con imagen
1. Verifica hex color en `:root`
2. Busca `!important` que puede estar sobreescribiendo

---

## 📚 REFERENCIAS RÁPIDAS

### Django Template Tags (Mantenidos)
```django
{{ variable }}                      <!-- Mostrar variable -->
{% if condicion %}...{% endif %}    <!-- Condicional -->
{% for item in items %}...{% endfor %} <!-- Loop -->
{{ fecha|date:"d M Y" }}            <!-- Filtro fecha -->
{% static 'path/file.css' %}        <!-- Ruta estática -->
```

### CSS Selectores
```css
.class { }                          /* Clase */
#id { }                             /* ID */
element { }                         /* Elemento -->
:hover { }                          /* Hover -->
::before { }                        /* Pseudo-elemento -->
```

---

## 🎉 ¡TODO LISTO!

Tu tema está completamente funcional. Solo crea, modifica y disfruta.

Para preguntas, consulta `REDISENO_COMPLETADO.md`