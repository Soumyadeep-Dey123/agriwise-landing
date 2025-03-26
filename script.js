
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Toggle theme (dark/light mode)
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check if user has a preference stored
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(savedTheme);
  }

  themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });

  // Navbar scroll behavior
  const navbar = document.getElementById('mainNav');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  });

  // Back to top button
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#' && !this.getAttribute('href').includes('collapse') && !this.getAttribute('data-bs-toggle')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Image upload preview
  const fileInput = document.getElementById('disease-image');
  const previewContainer = document.getElementById('image-preview-container');
  const preview = document.getElementById('image-preview');
  const removeButton = document.getElementById('remove-image');

  if (fileInput) {
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
          preview.setAttribute('src', this.result);
          previewContainer.classList.remove('d-none');
        });
        reader.readAsDataURL(file);
      }
    });

    removeButton.addEventListener('click', function() {
      preview.setAttribute('src', '#');
      previewContainer.classList.add('d-none');
      fileInput.value = '';
    });
  }

  // Form submissions with simulated responses
  
  // Crop Prediction Form
  const cropForm = document.getElementById('crop-prediction-form');
  if (cropForm) {
    cropForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate loading
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
      submitBtn.disabled = true;
      
      // Simulate API call with delay
      setTimeout(function() {
        const resultDiv = document.getElementById('crop-result');
        const recommendationsList = document.getElementById('crop-recommendations');
        
        // Clear previous results
        recommendationsList.innerHTML = '';
        
        // Sample crops based on inputs (in a real app, this would come from an API)
        const sampleCrops = [
          'Rice',
          'Wheat',
          'Maize',
          'Cotton',
          'Sugarcane'
        ];
        
        // Select random 3 crops for demo
        const selectedCrops = sampleCrops.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        // Add recommendations to list
        selectedCrops.forEach(crop => {
          const li = document.createElement('li');
          li.textContent = crop;
          recommendationsList.appendChild(li);
        });
        
        // Show results
        resultDiv.classList.remove('d-none');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Scroll to results
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1500);
    });
  }

  // Fertilizer Prediction Form
  const fertilizerForm = document.getElementById('fertilizer-prediction-form');
  if (fertilizerForm) {
    fertilizerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate loading
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';
      submitBtn.disabled = true;
      
      // Simulate API call with delay
      setTimeout(function() {
        const resultDiv = document.getElementById('fertilizer-result');
        const recommendation = document.getElementById('fertilizer-recommendation');
        
        // Get crop type for personalized message
        const cropType = document.getElementById('crop-type').value;
        
        // Sample fertilizer recommendations (in a real app, this would come from an API)
        const recommendations = [
          `Based on your soil analysis, we recommend using NPK 14-7-14 fertilizer for optimal ${cropType} growth. Apply 250 kg/ha in split doses.`,
          `Your soil shows nitrogen deficiency. We recommend using Urea (46-0-0) at 100 kg/ha to maximize ${cropType} yield.`,
          `For your ${cropType} crop, we recommend a balanced approach with NPK 20-10-10 fertilizer applied at 200 kg/ha, followed by micronutrient spray.`
        ];
        
        // Select random recommendation for demo
        const selectedRecommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
        recommendation.textContent = selectedRecommendation;
        
        // Show results
        resultDiv.classList.remove('d-none');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Scroll to results
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1500);
    });
  }

  // Disease Prediction Form
  const diseaseForm = document.getElementById('disease-prediction-form');
  if (diseaseForm) {
    diseaseForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Check if image is uploaded
      const fileInput = document.getElementById('disease-image');
      if (!fileInput.files.length) {
        alert('Please upload an image first');
        return;
      }
      
      // Simulate loading
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Analyzing...';
      submitBtn.disabled = true;
      
      // Simulate API call with delay
      setTimeout(function() {
        const resultDiv = document.getElementById('disease-result');
        const diseaseName = document.getElementById('disease-name');
        const diseaseDescription = document.getElementById('disease-description');
        const diseaseTreatment = document.getElementById('disease-treatment');
        
        // Get plant type for personalized message
        const plantType = document.getElementById('plant-type').value;
        
        // Sample diseases and treatments (in a real app, this would come from an AI model)
        const diseases = [
          {
            name: 'Late Blight',
            description: `Late blight is a destructive disease of ${plantType} caused by the fungus Phytophthora infestans. It spreads quickly in cool, wet conditions.`,
            treatment: 'Apply fungicides containing chlorothalonil or mancozeb. Remove and destroy infected plant parts. Improve air circulation around plants.'
          },
          {
            name: 'Powdery Mildew',
            description: `Powdery mildew is a fungal disease that appears as white powdery spots on the leaves of ${plantType}. It thrives in warm, dry climates with cool nights.`,
            treatment: 'Apply sulfur-based fungicide or neem oil. Increase spacing between plants to improve air circulation. Water at the base of plants, not on foliage.'
          },
          {
            name: 'Bacterial Spot',
            description: `Bacterial spot causes small, dark, water-soaked spots on ${plantType} leaves, stems, and fruit. It thrives in warm, humid conditions.`,
            treatment: 'Apply copper-based bactericides early in the season. Rotate crops and avoid overhead irrigation. Remove and destroy infected plant debris.'
          }
        ];
        
        // Select random disease for demo
        const selectedDisease = diseases[Math.floor(Math.random() * diseases.length)];
        diseaseName.textContent = selectedDisease.name;
        diseaseDescription.textContent = selectedDisease.description;
        diseaseTreatment.textContent = selectedDisease.treatment;
        
        // Show results
        resultDiv.classList.remove('d-none');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Scroll to results
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 2000);
    });
  }

  // Chatbot functionality
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatbox = document.getElementById('chatbox');

  if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const message = chatInput.value.trim();
      if (!message) return;
      
      // Add user message to chat
      addMessage(message, 'user');
      chatInput.value = '';
      
      // Simulate bot thinking
      setTimeout(function() {
        // Get bot response
        const response = getBotResponse(message);
        
        // Add bot response to chat
        addMessage(response, 'bot');
        
        // Scroll to bottom
        chatbox.scrollTop = chatbox.scrollHeight;
      }, 1000);
    });
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    
    const messagePara = document.createElement('p');
    messagePara.textContent = text;
    
    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    messageTime.textContent = 'Just now';
    
    messageContent.appendChild(messagePara);
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(messageTime);
    
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function getBotResponse(message) {
    // Simple response system (in a real app, this would use an AI model or predefined responses)
    message = message.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! How can I assist you with your farming questions today?";
    } else if (message.includes('fertilizer') || message.includes('nutrient')) {
      return "For fertilizer recommendations, I need to know your soil type, current nutrient levels, and what crop you're growing. You can also use our Fertilizer Prediction tool for detailed recommendations.";
    } else if (message.includes('pest') || message.includes('insect')) {
      return "For pest control, it's important to correctly identify the pest first. Could you describe what you're seeing or upload an image to our Disease Detection tool?";
    } else if (message.includes('weather') || message.includes('rain') || message.includes('forecast')) {
      return "I can provide general weather-related farming advice, but for accurate local forecasts, I recommend checking your local weather service or using a weather app specifically designed for agriculture.";
    } else if (message.includes('crop') && message.includes('rotation')) {
      return "Crop rotation is essential for soil health. I recommend rotating between different plant families every season. For example, follow legumes with brassicas, then with alliums, and then with root vegetables.";
    } else if (message.includes('organic') || message.includes('chemical-free')) {
      return "For organic farming, focus on building healthy soil with compost, practicing crop rotation, using beneficial insects for pest control, and applying organic-approved products only when necessary.";
    } else if (message.includes('thank')) {
      return "You're welcome! Feel free to ask if you have any other questions about your farming operation.";
    } else {
      return "That's an interesting question about agriculture. Could you provide more details so I can give you a more specific answer?";
    }
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate loading
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call with delay
      setTimeout(function() {
        // Create success alert
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success mt-4';
        alertDiv.role = 'alert';
        alertDiv.innerHTML = '<i class="fas fa-check-circle me-2"></i> Your message has been sent successfully! We\'ll get back to you soon.';
        
        // Add alert to form
        contactForm.appendChild(alertDiv);
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Remove alert after 5 seconds
        setTimeout(function() {
          alertDiv.remove();
        }, 5000);
      }, 1500);
    });
  }

  // Footer newsletter form
  const newsletterForm = document.querySelector('.footer-subscribe-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate API call
      const input = this.querySelector('input[type="email"]');
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      if (!input.value.trim()) return;
      
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success mt-3 mb-0';
        successDiv.innerHTML = 'Thanks for subscribing to our newsletter!';
        
        // Replace form with success message
        newsletterForm.innerHTML = '';
        newsletterForm.appendChild(successDiv);
      }, 1000);
    });
  }
});
