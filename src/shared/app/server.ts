import { app } from '.';

app.listen(process.env.PORT, () => {
  console.log('🚀 Server is running on PORT', process.env.PORT);
});
