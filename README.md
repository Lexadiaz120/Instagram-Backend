# Instagram-Backend
![image](https://user-images.githubusercontent.com/64269731/173323401-f1880d1f-d8ab-414b-b638-aaece66e0a31.png)

Backend Part of Instaram app for Hackaboss bootcamp 
Down you can see all backend  routes 

| Method | Path |  
|--------|------|
get |     /photos Search photos by their descriptive text
get |    /userprofile/:id User profile with photo gallery
get |    /feed View last publications posted by other users
post|    /likephoto/:photo_id  Like photo. WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
delete|  /deletelike/:like_id  Like photo. WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
post|    /posts   Make a publication of a photo with the descriptive text of the photo.  WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
post|   /login   Log in.  
post|   /posts   Make a new post with foto and text  
post|    /newuser Registrate new user
path|   /users/:idUser Edit user profile.  WARNING: YOU NEED TO BE LOGGED FOR USE THIS ENDPOINT!
