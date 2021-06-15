<div align="center">

<br>
<img src="docs/assets/autorizz.png" height="80" alt="Autorizz" />

# Car-Dealership-System-using-NodeJS-Express-MongoDB

![GitHub last commit](https://img.shields.io/github/last-commit/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB?label=Last%20commit&color=green&logo=git&logoColor=white&style=flat)
![GitHub stars](https://img.shields.io/github/stars/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB?label=Stars&logo=github&style=flat)
![Github forks](https://img.shields.io/github/forks/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB?label=Forks&logo=github&style=flat)
![GitHub issues](https://img.shields.io/github/issues/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB?label=Issues&color=yellow&logo=github&style=flat)
![GitHub License](https://img.shields.io/github/license/defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB?label=License)
[![GitHub All Releases](https://img.shields.io/github/downloads/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB/total?label=Downloads&color=red)](https://github.com/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB/releases)
<!-- [![GitHub pull requests](https://img.shields.io/github/issues-pr/Defcon27/Autorizz-Car-Dealership-System-using-NodeJS-Express-MongoDB)](https://github.com/sarthakpranesh/cosmos.ReactNative/pulls) -->

</div>
<br/>

## 📌What is Autorizz?

<h4 align="justify"> Autorizz is a web-based application developed to provide digital retail services to automotive dealerships in order to facilitate zero-contact sales and services. It manages and track the entire vehicle sales, service, parts inventory seamlessly connecting the dealership increasing its efficiency. The customers can browse and then view the complete specification of each vehicle listing with its features and buy the vehicle as per their requirements creating an awesome retail experience to the customer. This is a simple yet efficient management system to manage records of dealership data instead of using traditional methods to manage data like manual records or file systems. Their customers can always be in the comfort of their homes to check the various vehicles, spare parts listed in the website for sale as to their choice. Hence reducing the cost, saving time and increasing the comfort of their customers.
</h4>
<br>

### 🧰 Tech Stack
<img alt="HTML5" height="23px" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" height="23px" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/> <img alt="Bootstrap" height="23px" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="JavaScript" height="23px" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>



<br>

## 📋 Instructions
#### Application Structure
```
│
├── bin
├── models (MongoDB Mongoose Models)
├── node_modules 
├── public (application resources - css, js, images)
├── routes (handles admin, electric and gas routes)
├── views  (express-handlebars templates)
    ├── admin (admin templates)
    ├── layouts (default layout templates)
    └── electric and gas template files
├── app.js (root Node app script)
├── package.json
└── README.md
```


#### General
1. Install Dependencies using `npm install`
2. Make sure `MongoDB` server is running


#### Local
1. Inside  `--> app.js` under MongoDB section, replace the url with `mongodb://localhost:27017/autorizz`
2. Open Terminal in the app folder
3. Run `npm start` or `nodemon start` (if nodemon is preinstalled)
4. Launch client app in `localhost:5000`
4. Launch admin app in `localhost:5000/admin`
