document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('listform');
	const notif = document.getElementById('notif');

	form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const skill = document.getElementById('skill').value;
        
        notif.textContent = `Hello, ${name}! You've selected ${skill}.`;

        switch(skill) { 
            case 'HTML':
                document.documentElement.style.setProperty('--primary', '#e74c3c'); // Merah untuk HTML
                break;
            case 'CSS':
                document.documentElement.style.setProperty('--primary', '#3498db'); // Biru untuk CSS
                break;
            case 'JavaScript':
                document.documentElement.style.setProperty('--primary', '#f1c40f'); // Kuning untuk JavaScript
                break;
        }
	});
});
