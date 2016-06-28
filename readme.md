## Development
First, ensure you have docker for OSX installed.

Next, create a file called `.env` and populate it with the necessary environment variables.  You can take a look at `.env.sample`to see what you need.

Next, setup the necessary docker containers by firing the following command from the root directory.
```sh
$ ./bin/dev.sh
```
You can now visit:
* `localhost:5000`: wordpress site
* `localhost:8000`: nodejs backend

Next, you'll need to setup wordpress.  Visit `localhost:5000` and create a username and password.