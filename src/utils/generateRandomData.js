export const getRandomDate = () => {
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate - Math.floor(Math.random() * 30));
    // Format like "26 May 2025"
    return pastDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}