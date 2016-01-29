# Deploy to Heroku
**_Please use GitHub Fork feature for this challenge_**

Deploy the code to [Heroku](https://heroku.com) and see how does the heroku works; we will provide you a sample implementation for Web API Server.
See the [document](https://devcenter.heroku.com/start) to learn how to deploy.

## Step 1 - 1: Create [Heroku](https://heroku.com) Account
Make your own account in Heroku. Skip this step if you had already.

## Step 1 - 2: Create an application in [Heroku](https://heroku.com)
Once you made your own heroku account, [create an new application](https://dashboard.heroku.com/new).
We recommend to fill `App Name` by yourself; we use `App Name` in next step.

## Step 2: Edit Procfile for deployment
Heroku require to have [Procfile](https://devcenter.heroku.com/articles/procfile), the file which specifies what command to run for deployment.
Please investigate commands that you'll need and edit [the Procfile](./Procfile).

## Step 3: Let's Deploy!
For documents about deployment, please visit [this page](https://devcenter.heroku.com/categories/reference#deployment).
We recommend to use [GitHub Integration](https://devcenter.heroku.com/articles/github-integration). By using it, heroku application will be automatically deployed through GitHub Webhook.

##### Notes: Buildpacks

In some frameworks, you would need to specify [buildpacks](https://devcenter.heroku.com/articles/buildpacks) explicitly.

## Step 4: Edit [account.json](./account.json)
Once you create your heroku application, write your application name as the value of `heroku_appname` in [account.json](./account.json). Application name is the value that you set as `App Name`.

```json
{
  "heroku_appname": "<Write your Heroku application name here>"
}
```

## Step 5: Run the test!
Run the test to check whether you have deployed successfully or not!
You can check specification from files in [specifications](./specifications) directory, file ends with `.spec.js`.

Run commands in below to install required modules and run test.

```bash
$ npm install                      # Installing modules
$ $(npm bin)/mocha specifications  # Execute the test
```

Result should be something similar to below.

```
24 passing (1s)
```
