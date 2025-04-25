// Resume Modal Functions
function openResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('resumeModal');
    if (event.target === modal) {
        closeResumeModal();
    }
} 