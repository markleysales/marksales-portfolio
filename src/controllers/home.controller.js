async function homeRender (req, res) {
  res.set('Content-Security-Policy', "default-src 'self'; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; script-src 'self' https://code.jquery.com https://cdnjs.cloudflare.com; style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' https://fonts.gstatic.com;");
  return res.render("home");
}

export default {
  homeRender
};