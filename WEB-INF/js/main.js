
document.addEventListener("DOMContentLoaded", function() {
    const text = "SITIO EN CONSTRUCCIÓN...";
    const typingSpeed = 50;
    const typingEffectElement = document.getElementById("typing-effect");
  
    if (typingEffectElement) {
      function typeText() {
        let index = 0;
        typingEffectElement.textContent = "";
        function type() {
          if (index < text.length) {
            typingEffectElement.textContent += text[index];
            index++;
            setTimeout(type, typingSpeed);
          } else {
            setTimeout(typeText, 2000);
          }
        }
        type();
      }
  
      typeText();
    }
  });