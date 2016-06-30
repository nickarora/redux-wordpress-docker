## Development
#### Step 1: Setup docker containers
Before you begin, ensure you have [Docker for OSX](https://docs.docker.com/engine/installation/mac/) installed and it is running.  Note: this application won't work out of the box using Docker Toolbox.

1. Add the the below line to your `/etc/hosts` file:
   ```
   127.0.0.1 redux.docker.dev
   ```

2. Create a file called `.env` in the root directory and populate it with the necessary environment variables.  You can take a look at `.env.sample`to see what you need.

3. Setup the necessary docker containers by firing the following command from the root directory.
   ```sh
   $ ./bin/dev.sh
   ```

You should now be able to visit:
* [redux.docker.dev:5000/](http://redux.docker.dev:5000): wordpress site
* [redux.docker.dev:5000/wp-login.php](http://redux.docker.dev:5000/wp-login.php): wordpress admin login
  * login credentials are defined in your `.env` file
* [redux.docker.dev:8000](http://redux.docker.dev:8000): nodejs backend

#### Step 2: Enable pretty permalinks
Login to wordpress using your admin username and password.
1. Click on the `Settings` tab
2. Select `Permalinks`
3. Change Common Settings to `Post name`
4. Click Save Changes

#### Step 3: Create an application password
If you haven't already, login to wordpress using your admin username and password.
1. Click on `Users`
2. Select `Your Profile`
3. At the bottom of hte page, enter an app name: `redux-docker`
4. Click Add New
5. Replace the `API_KEY` field in your `.env` file with the generated password
6. run `$ ./bin/restart_backend.sh` to propagate your key

####  Step 4: Test the API _(Optional)_
1. Generate an access token by running `echo -n "admin_user:<API_KEY>" | base64`. Replace the API_KEY with the key you generated above. Keep this string handy.
2. In Postman, create `POST` request to `http://redux.docker.dev:5000/wp-json/wp/v2/posts/1`
  * Set the body to: `{ "title": "My New Title" }`
  * Set a header key of `Authorization` to `Basic <Access Token>`.  Replace Access token with the token you generated in step 1.
3. Hit send.  If everything is set up correctly, you should have updated the title of the default Hello World post.