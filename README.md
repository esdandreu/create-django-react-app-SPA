# create-django-react-app-SPA
Clone this repository wherever you want to locate your project, then open a terminal in folder root.
Navigate to the project folder
```
cd project
```
You should see the `manage.py` file there, check it by running `ls` or `dir` if you are using a windows cmd.

Now create the Django database with
```
python manage.py makemigrations
python manage.py migrate
```
Then create your superuser
```
python manage.py createsuperuser
```
Here you will have to provide a username, email and password

Once you have your superuser, navigate to the frontend folder
```
cd frontend
```
And start your development server
```
npm run start
```
If everything worked properly, you will see the username of the superuser. If the webpage is stuck in loading is because it's being block by CORS. As a provisional workaround you can go to `project/project/settings.py` and change `CORS_ORIGIN_ALLOW_ALL = True` but this is a security flaw for a webpage and should never be let for production stage.

Now you can build the project by running
```
npm run build
```
Navigate to your root project folder again with `cd ..` and run the django server on localhost
```
python manage.py runserver
```

You should see here the same as in your development server.
