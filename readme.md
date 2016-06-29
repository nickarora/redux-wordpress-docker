## Development
First, ensure you have docker for OSX installed.

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
* `redux.docker.dev:5000/`: wordpress site
* `redux.docker.dev:5000/wp-login.php`: wordpress admin login
  * login credentials are defined in your `.env` file
* `redux.docker.dev:8000`: nodejs backend
