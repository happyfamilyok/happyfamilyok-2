function loadURL() {
    var url = document.getElementById('urlInput').value;
    document.getElementById('urlFrame').src = url;
}

// Add Tailwind hover rotate 90 animation
document.getElementById('urlFrame').className = 'transition-transform duration-500 hover:rotate-90';