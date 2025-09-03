// Enhanced Modal Script with Animations and Form Handling

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.contact-modal');
  const openButton = document.getElementById('openModalButton');
  const closeButton = document.getElementById('closeModalButton');
  const cancelButton = document.getElementById('cancelButton');
  const contactForm = document.getElementById('contactForm');
  
  // Animation timings
  const animationDuration = 300;
  
  // Open modal with animation
  function openModal() {
    modal.showModal();
    document.body.style.overflow = 'hidden';
    
    // Ensure modal is properly centered
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    
    // Add fade-in animation to backdrop
    requestAnimationFrame(() => {
      modal.style.animation = 'modalFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    });
    
    // Animate form elements
    animateFormElements();
  }
  
  // Close modal with animation
  function closeModal() {
    modal.style.animation = 'modalFadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    
    setTimeout(() => {
      modal.close();
      document.body.style.overflow = '';
      modal.style.display = '';
      modal.style.alignItems = '';
      modal.style.justifyContent = '';
      resetForm();
    }, animationDuration);
  }
  
  // Animate form elements on open
  function animateFormElements() {
    const formGroups = document.querySelectorAll('.form-group');
    const formActions = document.querySelector('.form-actions');
    
    formGroups.forEach((group, index) => {
      group.style.opacity = '0';
      group.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        group.style.transition = 'all 0.4s ease-out';
        group.style.opacity = '1';
        group.style.transform = 'translateY(0)';
      }, 100 + (index * 100));
    });
    
    // Animate action buttons
    if (formActions) {
      formActions.style.opacity = '0';
      formActions.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        formActions.style.transition = 'all 0.4s ease-out';
        formActions.style.opacity = '1';
        formActions.style.transform = 'translateY(0)';
      }, 100 + (formGroups.length * 100));
    }
  }
  
  // Reset form and animations
  function resetForm() {
    contactForm.reset();
    
    // Reset animations
    const animatedElements = document.querySelectorAll('.form-group, .form-actions');
    animatedElements.forEach(element => {
      element.style.opacity = '';
      element.style.transform = '';
      element.style.transition = '';
    });
  }
  
  // Form submission with enhanced feedback
  function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = `
      <svg class="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Show success message
      showSuccessMessage();
      
      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
      
      // Close modal after success
      setTimeout(() => {
        closeModal();
      }, 2000);
    }, 2000);
  }
  
  // Show success message with dark theme
  function showSuccessMessage() {
    const modalContent = document.querySelector('.modal-content');
    const successHTML = `
      <div class="text-center py-8">
        <div class="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-lg">
          <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 class="text-xl font-bold text-gray-100 mb-3 font-mono">
          <span class="text-blue-400">response</span>.<span class="text-purple-400">status</span> <span class="text-gray-500">=</span> <span class="text-green-400">200</span>
        </h2>
        <p class="text-gray-400 font-mono text-sm">
          <span class="text-gray-600">// </span>Thank you for reaching out. I'll get back to you soon!
        </p>
      </div>
    `;
    
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
      modalContent.innerHTML = successHTML;
      modalContent.style.transition = 'all 0.3s ease-out';
      modalContent.style.transform = 'scale(1)';
      modalContent.style.opacity = '1';
    }, 150);
  }
  
  // Enhanced input focus effects
  function addInputEffects() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.transition = 'transform 0.2s ease-out';
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
      });
      
      // Add typing animation
      input.addEventListener('input', function() {
        if (this.value.length > 0) {
          this.style.borderColor = '#3b82f6';
          this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        } else {
          this.style.borderColor = '';
          this.style.boxShadow = '';
        }
      });
    });
  }
  
  // Keyboard navigation
  function handleKeyboard(event) {
    if (event.key === 'Escape' && modal.open) {
      closeModal();
    }
  }
  
  // Click outside to close
  function handleBackdropClick(event) {
    if (event.target === modal) {
      closeModal();
    }
  }
  
  // Event listeners
  if (openButton) {
    openButton.addEventListener('click', openModal);
  }
  
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
  
  if (cancelButton) {
    cancelButton.addEventListener('click', closeModal);
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  document.addEventListener('keydown', handleKeyboard);
  modal?.addEventListener('click', handleBackdropClick);
  
  // Initialize input effects
  addInputEffects();
  
  // Add scroll-based animations
  function addScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
      '.project-card-wrapper, .section-title, .social-link'
    );
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });
  }
  
  // Initialize scroll animations
  addScrollAnimations();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add parallax effect to hero section
  function addParallaxEffect() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    });
  }
  
  // Initialize parallax effect
  addParallaxEffect();
});
