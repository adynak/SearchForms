##Forms Builder

This is a single page application that can be used to identify input fields on a PDF form.  Load a scanned form as a PDF into this app and mark the locations of input fields.  You can also specify the field width and the alignment of the input field.

* Preview your layout definitions in an editable grid.
* Review your work using the WSYIWIG viewer.
* Save your work to finish later.
* The layout saves in JSON format for uploading to the server.

## Getting Started

You have a few things to get in place before using this app in your environment

### Prerequisites

Load these software packages.

```
node and npm
```

```
php
```

```
postgreSQL
```

```
apache or IIS
```

### Installing

Clone the repo to a folder under your web server and use npm to install it.

```
npm install
```

Find the SQL script in the repo and run it to create a table and populate that table with some default values.

## Running the app

The first time you run the app, you will be prompted for the database schema you used in postgreSQL for the table as well as the database password for the PHP connection to the database.  These are saved in local storage.

You can log in as guest, but the save feature is disabled.  Add qualified users to the postgreSQL table to enable all the features of this app. 


## Make it Yours

Look in **i18n/en_us** for branding, email addresses, and default user settings.

Change the configuration in the postgreSQL script to suit your needs.

The project has an email feature that uses an existing google script.  The repo contains a copy of it that you can modify, submit to google, register and deploy as a web app.  Change the email URL to the new one assigned to you by google.


## Authors

* **Al Dynak** - *Initial work* 

See also the list of [contributors](https://github.com/adynak/FormsBuilder/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/adynak/FormsBuilder/blob/master/LICENSE) file for details

