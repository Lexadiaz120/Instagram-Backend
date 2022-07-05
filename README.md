# Instagram-Backend
![image](https://user-images.githubusercontent.com/64269731/173323401-f1880d1f-d8ab-414b-b638-aaece66e0a31.png)

Backend Part of Instaram app for Hackaboss bootcamp.
Down you can see all backend  routes 

Make repository 
git clone https://github.com/Lexadiaz120/Instagram-Backend 

in the VS terminal (or any terminal in the dia5 folder):
Npm install 

Create an empty mysql database with whatever name you want
Rename the .env.example to .env and fill in all the fields with your data

In mysql_database you must put the database that you have created
Create the tables
npm run initDB
Insert data into tables
npm run populateDB
Once all this is done, all that remains is to start the project
npm run dev 

If you want to try it, import postman collection from "docs" folder    

Database 💾
Tables 
_______________________________________________________________________________________________________________________________________________________________________
comments
- comments_id
- comments
- user_id
- photo_id
likes 
- like_id
- user_id
- photo_id
photos 
- id 
- name_photo
- description_photo
- created_at
- user_id
users
- id 
- username
- email
- passwd

API 📚

Get |  /photos Search photos by their descriptive text
- Searching photo by descreptive text
Req.query: 
- description_photo
Get |    /userprofile/:id User profile with photo gallery
Req.params: 
- id 
Get | /feed View last publications posted by other users
-View last publications
Use req.params
Post| /likephoto/:photo_id  Like photo. WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
Req.params: 
- photo_id Id of photo 
Post| /posts   Make a publication of a photo with the descriptive text of the photo.  WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
Body (JSON): 
- description_photo
Form data 
- foto 
Post| /login   Log in.   
- Log in user 
Body (JSON): 
- email 
- passwd
Returns JWT token
post|  /newuser Registrate new user
Body (JSON): 
- username
- email
- passwd
path|  /users/:idUser Edit user profile.  WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
Req.params  
- idUser
Get| /comments  
Get| /comments/:id   Get comment by id 
Req.params: 
- commentId 
Post| /comments/:photoId  Comment photo 
Body (JSON): 
- Comments
Req.params: 
- photoId 














