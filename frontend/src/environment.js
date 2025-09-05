let IS_PROD = true;
const server = IS_PROD ?
    "http://localhost:8000" :

    "https://voxaro-backend.onrender.com"


export default server;