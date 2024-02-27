import express from 'express';
import fs from 'fs/promises';
import ejs from 'ejs';
import { loadMovie, loadMovies } from './movies.js';
import { renderMarkdown } from './markdown.js';
import { loadMovieReviews } from './movieReviews.js';
import { getLatestScreenings } from './latestScreeningsFromAPI.js';
import { getSpecificScreenings } from './specificScreeningsFromApi.js';
import cmsAdapter from './cmsAdapter.js';

const app = express();
app.use(express.json());

const users = [
  { username: 'tester', password: 'tester', email: 'test22@gmail.com' },
  { username: 'andreas', password: 'andreas', email: 'andreas@gmail.com' },
  { username: 'masaki', password: 'masaki', email: 'masaki.shiraishi83@gmail.com' }, 
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // success to login
    res.json({ success: true, user });
  } else {
    // failed to login
    res.json({ success: false });
  }
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static('./static'));

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/om-oss', async (req, res) => {
  res.render('om-oss');
});

app.get('/biljetter', async (req, res) => {
  res.render('biljetter');
});

app.get('/signup', async (req, res) => {
  res.render('signup');
});

app.get('/evenemang', async (req, res) => {
  res.render('evenemang');
});

app.get('/login', async (req, res) => {
  res.render('login');
});

app.get('/profile', async (req, res) => {
  res.render('profile');
});

app.get('/filmer', async (req, res) => {
  const movies = await loadMovies();
  res.render('filmer', { movies });
});

app.get('/filmer/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await loadMovie(movieId);

    res.render('film', { movie, renderMarkdown });
  } catch (error) {
    if (error.message === 'Movie not found') {
      res.status(404).render('filmer404');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
});

app.get('/api/screenings', async (req, res) => {
  try {
    const latestScreenings = await getLatestScreenings(cmsAdapter);
    res.send(latestScreenings);
  } catch (error) {
    console.error('Could not fetch upcoming movie screenings:', error);
    res
      .status(500)
      .json({ error: 'Got an error when trying to fetch upcoming screenings' });
  }
});

app.get('/api/movies/:movieID/screenings', async (req, res) => {
  try {
    const movieId = req.params.movieID;
    const specificScreenings = await getSpecificScreenings(cmsAdapter, movieId);
    res.json(specificScreenings);
  } catch (error) {}
});

app.get('/api/movies/:movieId/reviews', async (req, res) => {
  const movieId = req.params.movieId;
  const page = req.query.page || 1;

  try {
    const reviews = await loadMovieReviews(movieId, page);
    res.status(200).json({ reviews });
  } catch (error) {
    console.error('Error loading reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.status(404).render('404.ejs');
});

export default app;
