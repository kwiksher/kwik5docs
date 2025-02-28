document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.popup-image');

  images.forEach(image => {
      image.addEventListener('click', function() {
          const popup = document.createElement('div');
          popup.style.position = 'fixed';
          popup.style.top = '0';
          popup.style.left = '0';
          popup.style.width = '100%';
          popup.style.height = '100%';
          popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          popup.style.display = 'flex';
          popup.style.justifyContent = 'center';
          popup.style.alignItems = 'center';
          popup.style.zIndex = '1000';

          const img = document.createElement('img');
          img.src = this.src;
          img.style.maxWidth = '90%';
          img.style.maxHeight = '90%';

          popup.appendChild(img);

          // Define an Escape key handler to close the popup
          const escHandler = function(e) {
              if (e.key === "Escape") {
                  if (document.body.contains(popup)) {
                      document.body.removeChild(popup);
                  }
                  document.removeEventListener('keydown', escHandler);
              }
          };

          // Attach the Escape key handler
          document.addEventListener('keydown', escHandler);

          // Also close the popup on click
          popup.addEventListener('click', function() {
              if (document.body.contains(popup)) {
                  document.body.removeChild(popup);
              }
              document.removeEventListener('keydown', escHandler);
          });

          document.body.appendChild(popup);
      });
  });
});