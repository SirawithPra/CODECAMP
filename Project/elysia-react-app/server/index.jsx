import { Elysia } from 'elysia';

const app = new Elysia();

app.get('/api/message', () => {
    return { message: 'Hello from Elysia!' };
});

app.listen(3001, () => {
    console.log(`Elysia server running at http://localhost:3001`);
});
