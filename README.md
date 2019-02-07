# Set up
This adonis JS template has basic config done.
1. webpack js + sass mixer is configured
2. Bootstrap css + js
3. Configured to use mysql in dev and pg during production.

## Additional Config
1. run npm install
2. Update mysql db name (DB_DATABASE) in .env file
3. Create db (with name -> DB_DATABASE) before running migrations
4. run ```npm run complie``` to compile assets.

## Migrations
Run the following command to run startup migrations.

```js
adonis migration:run
```

## Test
run
```js
adonis serve --dev
```
and go to localhost:3000.
1. If "hello" in h1 is red then css is complied correctly
2. If clicking the "hello" button brings alert then the js is complied correctly.
