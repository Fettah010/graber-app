/*
---
File: scripts.js
Project: Graber Website
---
*/

// Wait until the entire HTML document is loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    /**
     * FAQ Accordion Functionality
     * * This code finds all the FAQ questions on the page and adds a click event
     * listener to each one. When a question is clicked, it toggles the visibility
     * of its corresponding answer with a smooth animation.
     */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerPanel = item.querySelector('.faq-answer');

        questionButton.addEventListener('click', () => {
            // Toggle the 'active' class on the button for styling (e.g., rotating the '+')
            questionButton.classList.toggle('active');

            // Check if the answer panel is currently open
            const isPanelOpen = answerPanel.style.maxHeight && answerPanel.style.maxHeight !== '0px';

            if (isPanelOpen) {
                // If it's open, close it by setting max-height to 0
                answerPanel.style.maxHeight = '0px';
            } else {
                // If it's closed, open it by setting max-height to its full scrollable height
                // This creates the smooth dropdown animation.
                answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
            }
        });
    });


    /**
     * Optional: Add a smooth scroll animation to the header
     * when it becomes sticky.
     */
    const header = document.getElementById('main-header');
    
    // Use an IntersectionObserver to detect when the header is at the top of the viewport
    const observer = new IntersectionObserver(
        ([e]) => {
            // Add or remove a class based on whether the header is intersecting with the top
            // This is useful for adding shadows or other styles when scrolling.
            e.target.classList.toggle('is-pinned', e.intersectionRatio < 1);
        },
        { threshold: [1] }
    );

    if (header) {
        observer.observe(header);
    }

});
