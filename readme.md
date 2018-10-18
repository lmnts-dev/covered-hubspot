# Covered Hubspot Email Builder
Made in Jekyll

# To Start
- `bundle install`
- `npm install`
- Make sure you `npm install` your `gulp` dependencies as well.

## To Run
Simply run `gulp` from the root directory.

## To Debug
1. `cd src && bundle exec jekyll serve` from root.
2. `gulp watch` from root.
3. View your files from the `/build/` folder.

## It's throwing an error at the janky Python server that is running
1. `sudo lsof -i tcp:8080`
2. `sudo kill -9 PID` where `PID` is the `PID` of said server.

## Fire up an .ngrok server to test on your devices
  - You can access your ```localhost``` from any device because ```.ngrok``` is amazing.
  - In the ```/_ngrok/``` folder you'll find a .zip file with .ngrok in it. Install that.
  - In terminal, simply type ```$ ./ngrok http ####``` to fire up a server and they will provide urls. `####` will be your desired port number.
  - Be sure that if you are on development and potentially behind a directory such as ```/covered-hubspot/```, you'll have to append that to your .ngrok url.