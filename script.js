const memeImage = document.getElementById('meme-image');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const generateMemeButton = document.getElementById('generate-meme');

// Choose a suitable meme API (replace with your preferred API endpoint)
const memeApiUrl = 'https://api.imgflip.com/get_memes';

generateMemeButton.addEventListener('click', async () => {
  try {
    const response = await fetch(memeApiUrl);
    const data = await response.json();
    const memes = data.data.memes;

    // Select a random meme from the API response
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    memeImage.src = randomMeme.url;

    // Replace placeholders with user-provided text
    memeImage.alt = `${topText.value} - ${bottomText.value}`;
  } catch (error) {
    console.error('Error fetching memes:', error);
    alert('An error occurred while fetching memes. Please try again later.');
  }
});
