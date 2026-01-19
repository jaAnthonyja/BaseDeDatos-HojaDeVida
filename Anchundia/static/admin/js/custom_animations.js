document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ANIMACIÓN DE VENTANAS AL CARGAR ==========
    const windows = document.querySelectorAll('.dashboard-window, .module, .window-container');
    windows.forEach((window, index) => {
        window.style.opacity = '0';
        window.style.transform = 'scale(0.8) translateY(20px)';
        
        setTimeout(() => {
            window.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            window.style.opacity = '1';
            window.style.transform = 'scale(1) translateY(0)';
        }, index * 100);
    });
    
    // ========== EFECTO HOVER EN LOS CONTROLES DE VENTANA ==========
    const controls = document.querySelectorAll('.window-control');
    controls.forEach(control => {
        control.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease-in-out infinite';
        });
        
        control.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
    
    // ========== EFECTO DE "ESCRITURA" EN EL TÍTULO DEL LOGIN ==========
    const title = document.querySelector('.login-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // ========== ANIMACIÓN INTERACTIVA DE VENTANAS ==========
    const dashboardWindows = document.querySelectorAll('.dashboard-window');
    dashboardWindows.forEach(window => {
        window.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        window.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========== ANIMACIÓN DE PULSACIÓN EN BOTONES ==========
    const buttons = document.querySelectorAll('button, input[type="submit"], a.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
        });
    });
    
    // ========== AGREGAR ANIMACIÓN DE RIPPLE ==========
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
        
        @keyframes ripple {
            0% {
                width: 10px;
                height: 10px;
                opacity: 1;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
        
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); }
            50% { box-shadow: 0 0 15px rgba(123, 104, 238, 0.4); }
        }
    `;
    document.head.appendChild(style);
    
    // ========== EFECTOS DE HOVER EN INPUTS ==========
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // ========== ANIMACIÓN DE CARGA DE PÁGINA ==========
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease-out';
        document.body.style.opacity = '1';
    }, 100);
});
