import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
const app = express();

app.set('view engine', 'ejs');  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.render('index', {messages: messages});
})
 
app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/newpost', (req, res) => 
{
    res.render('newpost', {messages: messages});    
})

app.use(express.urlencoded({ extended: true }));

app.post('/newpost', (req, res) => { 
  const newMessage = {
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date()
  } 

  messages.push(newMessage);
  res.redirect('/');

})


const messages = [
    {
      text: "Hi there!", 
      user: "Amando",
      added: new Date() 
    },
    {
      text: "Hello World!", 
      user: "Charles",
      added: new Date()
    } 
  ];
  

