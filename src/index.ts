import buildApp from './app';

const port = process.env.PORT || 3000;
const app = buildApp(true);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
