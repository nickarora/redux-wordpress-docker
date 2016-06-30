## Development
First, ensure you have [Docker for OSX](https://docs.docker.com/engine/installation/mac/) installed.

Next, add the the below line to your `/etc/hosts` file:
```
127.0.0.1 redux.docker.dev
```

Next, create a file called `.env` and populate it with the necessary environment variables.  You can take a look at `.env.sample`to see what you need.

Next, setup the necessary docker containers by firing the following command from the root directory.
```sh
$ ./bin/dev.sh
```

You can now visit:
* [redux.docker.dev:5000/](http://redux.docker.dev:5000): wordpress site
* [redux.docker.dev:5000/wp-login.php](http://redux.docker.dev:5000/wp-login.php): wordpress admin login
  * login credentials are defined in your `.env` file
* [redux.docker.dev:8000](http://redux.docker.dev:8000): nodejs backend

Next, visit login to the wordpress using your admin username and password.

#### enable pretty permalinks
1. Click on the `Settings` tab
2. Select `Permalinks`
3. Change Common Settings to `Post name`
4. Click Save Changes

#### create an application password
1. Click on `Users`
2. Select `Your Profile`
3. At the bottom of hte page, enter an app name: `redux-docker`
4. Click Add New
5. Replace the `API_KEY` field in your `.env` file with the generated password
6. run `$ ./bin/restart_backend.sh` to propagate your key

(_Optional_) Verify that wordpress rest api is setup correctly.
1. Generate an access token by running `echo -n "admin_user:<API_KEY>" | base64`. Replace the API_KEY with the key you generated above. Keep this string handy.
2. In Postman, create `POST` request to `http://redux.docker.dev:5000/wp-json/wp/v2/posts/1`
  * Set the body to: `{ "title": "My New Title" }`
  * Set a header key of `Authorization` to `Basic <Access Token>`.  Replace Access token with the token you generated in step 1.
3. Hit send.  If everything is set up correctly, you should have updated the title of the default Hello World post.