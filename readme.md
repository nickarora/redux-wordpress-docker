## Development
#### Step 1: Setup docker containers
Before you begin, ensure you have [Docker for OSX](https://docs.docker.com/engine/installation/mac/) installed and it is running.  Note: this application won't work out of the box using Docker Toolbox.

Also, upgrade npm to vesrsion 3.0^ if you have not done so already. Skipping this step creates potential issues with react storybook(discussed below).
```sh
$ npm i -g npm@3.8.5
$ rm -rf node_modules
$ npm i
```

1. Add the the below line to your `/etc/hosts` file:
   ```
   127.0.0.1 redux.docker.dev
   ```

2. Rename `.env.sample` to `.env`

3. Make sure you set `HOST_MACHINE` in `.env` to your machine's IP

4. Setup the necessary docker containers by firing the following command from the root directory.
   ```sh
   $ ./bin/dev.sh
   ```

You should now be able to visit:
* [redux.docker.dev:5000/](http://redux.docker.dev:5000): wordpress site
* [redux.docker.dev:5000/wp-login.php](http://redux.docker.dev:5000/wp-login.php): wordpress admin login
  * login credentials are defined in your `.env` file

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

You should now be able to visit:
* [redux.docker.dev:8080](http://redux.docker.dev:8080): redux application

You can also test that the Node API is working
* [redux.docker.dev:8000/posts](http://redux.docker.dev:8000/posts): posts endpoint


####  Step 4: Working with Node/Redux
1. Visit [redux.docker.dev:8080](http://redux.docker.dev:8080/) to see the site in action.
2. Changes to the client-side code will automatically update in the browser thanks to React-Hot-Loader 3 (note: this is still in beta and a reload may occasionally be necessary)
3. The Node server is being served using Nodemon. This means changes to the server-side code will cause the node server (port 8000) to restart.  Because Docker for mac is slow, this can take a little time. Be patient.
4. By default Redux DevTools will be visible, allowing you to inspect the Redux state.  To hide the DevTools press `Ctrl + h`.  To move DevTools to another edge of the screen press `Ctrl + q`

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

#### React Storybook
This project has React Storybook integrated, allowing you to design UI components rapidly -- and separately from the application itself.  [Read more about React Storybook here.](https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2)

Add your React Storybook components to app/client/components/stories using [the appropriate syntax](https://github.com/kadirahq/react-storybook)

To launch react-story book, run the following command from the `/app` directory
```
$ npm run storybook
```

Once storybook has loaded and it confirms webpack has built, visit [redux.docker.dev:9001](redux.docker.dev:9001)
