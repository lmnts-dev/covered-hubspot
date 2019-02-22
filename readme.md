# Covered Hubspot Email Builder
By Peter Laxalt
www.laxaltandmciver.co
Made with Jekyll & Gulp to make Hubspot Email Templates. For [Covered](www.itscovered.com).

# To Start
```bash
npm install
cd src
bundle install
cd ../
```
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

## Using Dummy Data
- We have 4 `_data_` files: `contact.json`, `contact.json`, `standard.json`, and `standard.json`. Each is used for either dummy data, or replacing your dummy data with actual Hubspot properties. If you want to code with dummy data, use the `{{ site.data.data_source.data_property }}` syntax. For export, use the `{{ site.data.data_source_hs.data_property }}` syntax. The `_hs` is key, and I usually do a quick find + replace to change to that. We should change process this to an overall settings file for a `export: true` field down the road.

## Fire up an .ngrok server to test on your devices
  - You can access your ```localhost``` from any device because ```.ngrok``` is awesome.
  - In the ```/_ngrok/``` folder you'll find a .zip file with .ngrok in it. Install that.
  - In terminal, simply type ```$ ./ngrok http ####``` to fire up a server and they will provide urls. `####` will be your desired port number.
  - Be sure that if you are on development and potentially behind a directory such as ```/covered-hubspot/```, you'll have to append that to your .ngrok url.