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
* [redux.docker.dev:8000](http://redux.docker.dev:8000): nodejs application

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
6. run `$ ./bin/restart_app.sh` to propagate your key to the node application

####  Step 4: Working with Node/Redux
1. Visit [redux.docker.dev:8080](http://redux.docker.dev:8080/) to see the site in action.
2. Changes to the client-side code should immediately appear thanks to React-Hot-Loader 3 (note: this is still in beta and a reload may occasionally be necessary)
3. By default Redux DevTools will be visible, allowing you to inspect the Redux state.  To hide the DevTools press `Ctrl + h`.  To move DevTools to another edge of the screen press `Ctrl + q`
4. The Node server is being served using Nodemon.  This means changes to the server code will cause the server to restart on the fly.

### Bonus 1: Logging
To view container logs use `docker-compose logs <container-name>`.  The container-name is the name specified in `docker-compose.yml`

### Bonus 2: Access a container's shell
If the container is currently stopped, you can enter the container's bash shell by running:
```
docker-compose run <container-name> bash
```
If the container is currently running, use the following command instead:
```
docker-compose exec <container-name> bash
```
