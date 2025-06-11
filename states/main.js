document.addEventListener('DOMContentLoaded', function() {
    // تعريف العناصر
    const chatButton = document.getElementById('chatBotButton');
    const chatWindow = document.getElementById('chatBotWindow');
    const closeButton = document.getElementById('closeChat');
    const sendButton = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');

    // فتح نافذة الشات عند النقر على الزر
    chatButton.addEventListener('click', function() {
        chatWindow.style.display = 'flex';
        chatButton.style.display = 'none';
        // تركيز على حقل الإدخال
        chatInput.focus();
    });

    // إغلاق نافذة الشات
    closeButton.addEventListener('click', function() {
        chatWindow.style.display = 'none';
        chatButton.style.display = 'flex';
    });

    // إرسال رسالة
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            // إضافة رسالة المستخدم
            addMessage(message, 'user-message');
            
            // مسح حقل الإدخال
            chatInput.value = '';
            
            // إظهار مؤشر الكتابة
            showTypingIndicator();
            
            // محاكاة رد الشات بوت (يمكن تعديله لاحقاً للاتصال بخدمة الشات بوت الفعلية)
            setTimeout(function() {
                // إخفاء مؤشر الكتابة
                hideTypingIndicator();
                
                // اختيار رد مناسب بناءً على محتوى الرسالة
                let botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot-message');
            }, 1500);
        }
    }

    // إضافة رسالة إلى نافذة الشات
    function addMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${className}`;
        messageDiv.textContent = text;
        chatBody.appendChild(messageDiv);
        
        // التمرير إلى أسفل لعرض الرسالة الجديدة
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // إظهار مؤشر الكتابة
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            typingDiv.appendChild(dot);
        }
        
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // إخفاء مؤشر الكتابة
    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // الحصول على رد الشات بوت بناءً على رسالة المستخدم
function getBotResponse(message) {
    message = message.toLowerCase();
    
    // Real estate keywords
    if (message.includes('apartment') || message.includes('شقة') || message.includes('شقق')) {
        return "We have an excellent selection of apartments in various areas. Are you looking for a specific location?";
    }
    else if (message.includes('villa') || message.includes('فيلا') || message.includes('فلل')) {
        return "Our villas come in various sizes and modern designs. What size are you looking for?";
    }
    else if (message.includes('office') || message.includes('commercial') || message.includes('مكتب') || message.includes('تجاري')) {
        return "We offer offices and commercial spaces in prime locations. Do you have a preferred area?";
    }
    else if (message.includes('price') || message.includes('سعر') || message.includes('تكلفة') || message.includes('ثمن')) {
        return "Our prices are competitive and vary based on location and size. Do you have a specific budget?";
    }
    else if (message.includes('location') || message.includes('موقع') || message.includes('منطقة')) {
        return "We are available in all major areas. Is there a specific location you prefer?";
    }
    else if (message.includes('finance') || message.includes('loan') || message.includes('تمويل') || message.includes('قرض')) {
        return "We offer various financing solutions in cooperation with top banks. Would you like to know more about financing options?";
    }
    else if (message.includes('contact') || message.includes('تواصل') || message.includes('اتصال')) {
        return "You can contact us at 0123456789 or visit one of our branches. Would you like to schedule an appointment with one of our advisors?";
    }
    else {
        // General responses
        const generalResponses = [
            "Thank you for reaching out. How can I assist you in finding a suitable property?",
            "Are you looking for an apartment, villa, or commercial office?",
            "Which area do you prefer for your new property?",
            "What is your approximate budget for the property?",
            "I can help you find the best properties that meet your needs.",
            "Would you like to hear about our exclusive current offers?"
        ];
        
        return generalResponses[Math.floor(Math.random() * generalResponses.length)];
    }
}
    // إرسال الرسالة عند النقر على زر الإرسال
    sendButton.addEventListener('click', sendMessage);

    // إرسال الرسالة عند الضغط على Enter
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // إضافة تأثير النقر على الزر
    chatButton.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });

    chatButton.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.1)';
    });

    // إضافة تأثير الحركة عند تحريك الماوس فوق الزر
    chatButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });

    chatButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    // دعم اللمس للأجهزة المحمولة
    chatButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(0.95)';
    });
    
    chatButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(1)';
        chatWindow.style.display = 'flex';
        chatButton.style.display = 'none';
    });
});