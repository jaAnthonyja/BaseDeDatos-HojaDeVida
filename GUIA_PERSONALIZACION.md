# 🛠️ GUÍA DE PERSONALIZACIÓN - TEMA MODERNO

## Ejemplos prácticos de cómo personalizar tu CV

---

## 1️⃣ CAMBIAR COLORES PRINCIPALES

### Opción A: Cambiar todo el tema (Recomendado)

**Archivo:** `static/css/modern-cv-style.css`

Busca `:root { }` al inicio del archivo y modifica:

```css
:root {
    --primary-green: #7ed321;      /* Verde neón → Tu color aquí */
    --dark-bg: #000000;             /* Negro → Tu color aquí */
    --secondary-dark: #1a1a1a;      /* Gris oscuro → Tu color aquí */
    --grid-green: #1a3d1a;          /* Verde cuadrícula → Tu color aquí */
    --text-light: #ffffff;          /* Blanco → Tu color aquí */
    --text-gray: #cccccc;           /* Gris claro → Tu color aquí */
    --text-dark-gray: #999999;      /* Gris oscuro → Tu color aquí */
}
```

### Paletas de colores pre-hechas

**Azul Neón:**
```css
--primary-green: #00d4ff;    /* Azul cian */
--dark-bg: #0a0e27;          /* Azul oscuro */
--grid-green: #1a2d4d;       /* Azul más claro */
```

**Púrpura Neón:**
```css
--primary-green: #c400ff;    /* Púrpura */
--dark-bg: #1a0033;          /* Negro púrpura */
--grid-green: #330066;       /* Púrpura oscuro */
```

**Rosa Neón:**
```css
--primary-green: #ff006e;    /* Rosa fuerte */
--dark-bg: #0d0014;          /* Negro rosado */
--grid-green: #2d0033;       /* Gris rosado */
```

**Naranja Neón:**
```css
--primary-green: #ff8c00;    /* Naranja */
--dark-bg: #1a0f00;          /* Negro naranja */
--grid-green: #4d2600;       /* Naranja oscuro */
```

---

## 2️⃣ MODIFICAR TAMAÑOS Y ESPACIADO

### Hacer títulos más grandes

**En:** `static/css/modern-cv-style.css`

```css
h1 {
    font-size: 48px;  /* Cambiar de 48px a 64px para más grande */
    font-weight: 900;
    margin: 20px 0;
}
```

### Ajustar espaciado entre secciones

```css
section {
    margin-bottom: 30px;  /* Cambiar de 30px a 50px para más espacio */
    padding: 30px;        /* O cambiar a 50px */
}
```

### Aumentar padding del contenedor

```css
.main-container {
    padding: 60px 30px;  /* De 60px top/bottom a 80px */
}
```

---

## 3️⃣ CAMBIAR VELOCIDADES DE ANIMACIÓN

### Más rápido

**En:** `static/css/modern-cv-style.css`

```css
/* Busca todas las líneas con transition o animation y reduce el tiempo: */

section {
    transition: all 0.3s ease;  /* Cambiar de 0.3s a 0.15s */
}

@keyframes fadeIn {
    /* De 0.6s a 0.3s */
    animation: fadeIn 0.3s ease-out forwards;
}
```

### Más lento (más elegante)

```css
section {
    transition: all 0.8s ease;  /* Cambiar de 0.3s a 0.8s */
}

@keyframes slideInLeft {
    /* De 0.6s a 1.2s */
    animation: slideInLeft 1.2s ease-out forwards;
}
```

---

## 4️⃣ DESACTIVAR O MODIFICAR LA CUADRÍCULA

### Desactivar completamente

**En:** `static/css/modern-cv-style.css`

```css
.grid-background {
    display: none;  /* Hace invisible la cuadrícula */
}
```

### Hacer más visible

```css
.grid-background {
    opacity: 0.5;  /* Cambiar de 0.25 a 0.5 */
}
```

### Hacer más sutil

```css
.grid-background {
    opacity: 0.1;  /* Cambiar de 0.25 a 0.1 */
}
```

### Cambiar tamaño de celdas

```css
.grid-background {
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 99px, var(--grid-green) 99px, var(--grid-green) 100px),
        repeating-linear-gradient(90deg, transparent, transparent 99px, var(--grid-green) 99px, var(--grid-green) 100px);
    /* Cambiar de 49px/50px a 99px/100px para celdas más grandes */
}
```

---

## 5️⃣ PERSONALIZAR BOTONES

### Hacer botones más grandes

**En:** `static/css/modern-cv-style.css`

```css
button, .btn, input[type="submit"], input[type="button"] {
    padding: 14px 35px;  /* Cambiar a 20px 50px para más grande */
    font-size: 14px;     /* Cambiar a 16px para texto más grande */
}
```

### Hacer botones con bordes redondeados

```css
button, .btn, input[type="submit"], input[type="button"] {
    border-radius: 2px;  /* Cambiar de 2px a 10px para redondeado */
}
```

### Cambiar efecto de hover

```css
button:hover {
    background: #6bc319;
    transform: translateY(-3px);  /* Cambiar de -3px a -5px para más salto */
    box-shadow: 0 8px 25px rgba(126, 211, 33, 0.5);  /* Cambiar valores */
}
```

---

## 6️⃣ MODIFICAR CAMPOS DE FORMULARIO

### Hacer inputs más grandes

**En:** `static/css/modern-cv-style.css`

```css
input[type="text"],
input[type="email"],
textarea,
select {
    padding: 12px 15px;  /* Cambiar a 15px 20px */
    font-size: 14px;     /* Cambiar a 16px */
}
```

### Cambiar color de borde en focus

```css
input:focus, textarea:focus, select:focus {
    border-color: var(--primary-green);  /* Cambiar a otro color */
    box-shadow: 0 0 15px rgba(126, 211, 33, 0.3);  /* Ajustar glow */
}
```

---

## 7️⃣ CAMBIAR FUENTES

### Usar Google Fonts

**Agregar en:** `perfil/templates/perfil/hoja_vida.html` (en `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
```

**Luego en:** `static/css/modern-cv-style.css`

```css
body {
    font-family: 'Roboto Mono', 'Arial', sans-serif;  /* Agrega tu fuente */
}
```

---

## 8️⃣ AGREGAR EFECTOS ADICIONALES

### Glow effect en títulos

**Agregar en:** `static/css/modern-cv-style.css`

```css
h1 {
    text-shadow: 0 0 20px rgba(126, 211, 33, 0.5);  /* Brillo alrededor */
}

h1:hover {
    text-shadow: 0 0 30px rgba(126, 211, 33, 0.8);  /* Más brillo en hover */
}
```

### Efecto de enfoque en secciones

```css
section:focus-within {
    border-color: var(--primary-green);
    box-shadow: 0 0 20px rgba(126, 211, 33, 0.2);
}
```

### Animación de entrada más elegante

```css
@keyframes elegantFadeIn {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

section {
    animation: elegantFadeIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

---

## 9️⃣ CREAR TEMA LIGHT MODE

### Agregar en:** `static/css/modern-cv-style.css`

```css
body.light-mode {
    --primary-green: #0066ff;      /* Azul */
    --dark-bg: #ffffff;             /* Blanco */
    --secondary-dark: #f5f5f5;      /* Gris muy claro */
    --grid-green: #e0e0e0;          /* Gris */
    --text-light: #000000;          /* Negro */
    --text-gray: #333333;           /* Gris oscuro */
    --text-dark-gray: #666666;      /* Gris medio */
}

body.light-mode .grid-background {
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0, 102, 255, 0.1) 49px, rgba(0, 102, 255, 0.1) 50px),
        repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(0, 102, 255, 0.1) 49px, rgba(0, 102, 255, 0.1) 50px);
}
```

---

## 🔟 AGREGAR LOGO O IMAGEN PERSONALIZADA

### En el template HTML

**Editar:** `perfil/templates/perfil/hoja_vida.html`

```html
<header class="fade-in">
    <!-- Agregar logo -->
    <div class="header-logo">
        <img src="{% static 'images/tu-logo.png' %}" alt="Logo">
    </div>
    
    <h1>{{ perfil.nombres }} {{ perfil.apellidos }}</h1>
</header>
```

### Agregar CSS para el logo

**En:** `static/css/modern-cv-style.css`

```css
.header-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.header-logo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid var(--primary-green);
    box-shadow: 0 0 20px rgba(126, 211, 33, 0.3);
    object-fit: cover;
}
```

---

## 🎯 EJEMPLOS COMPLETOS

### Ejemplo 1: Tema Corporativo Azul

```css
:root {
    --primary-green: #0066cc;      /* Azul corporativo */
    --dark-bg: #0a0e27;             /* Azul muy oscuro */
    --secondary-dark: #1a2d4d;      /* Azul oscuro */
    --grid-green: #334d7f;          /* Azul gris */
    --text-light: #ffffff;
    --text-gray: #cccccc;
}
```

### Ejemplo 2: Tema Minimalista

```css
/* Desactivar cuadrícula */
.grid-background {
    display: none;
}

/* Reducir animaciones */
@keyframes fadeIn {
    animation: fadeIn 0.3s ease-out forwards;  /* Más rápido */
}

/* Simplificar sombras */
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  /* Más sutil */
```

### Ejemplo 3: Tema Energético

```css
:root {
    --primary-green: #ff1493;      /* Rosa fuerte */
    --dark-bg: #1a0019;
    --secondary-dark: #330033;
}

/* Animaciones más rápidas */
section {
    transition: all 0.15s ease;
}

/* Botones con más energía */
button:hover {
    transform: translateY(-5px) rotate(1deg);  /* Rotación extra */
}
```

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

- [ ] Cambié los colores en `:root`
- [ ] Ajusté tamaños de tipografía
- [ ] Modifiqué velocidades de animación
- [ ] Personalicé botones y formularios
- [ ] Agregué mi logo/imagen
- [ ] Probé en diferentes dispositivos
- [ ] Limpipiré caché (Ctrl+Shift+R)
- [ ] Ejecuté `collectstatic`

---

## 🚀 PRÓXIMAS IDEAS

- Agregar sección de portafolio con grid
- Implementar filtro de proyectos
- Agregar contador de estadísticas
- Crear sección de habilidades con barra
- Agregar efecto de láser/líneas animadas
- Implementar dark/light mode toggle
- Agregar descargar CV como PDF

¡Diviértete personalizando!