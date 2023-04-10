async function homeRender (req, res) {
  res.set('Content-Security-Policy', "default-src 'self'; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; script-src 'self' 'unsafe-inline' https://code.jquery.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' https://i.ytimg.com https://fonts.gstatic.com; connect-src 'self' https://api.github.com/; frame-src https://www.youtube.com/;");
  res.set('Cross-Origin-Embedder-Policy', 'require-corp');
  res.set('Cross-Origin-Allow-Origin', 'https://www.youtube.com');
  return res.render("home");
}

export default {
  homeRender
};