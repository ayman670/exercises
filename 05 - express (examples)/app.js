// application
const { Router } = require('express');
let express = require('express');
let app = express();

//app get
app.get('/', (req,res)=>{
    res.send('welcome to our course')
});

//app use راح تتطبق مع اي ريكوست مهما كان المسار
//app post تضيف بيانات جديدة
//app put تستخدم للتعديل او التحديث
//app delete حذف البيانات

//app set   ejsلاستخدام 
let = require('ejs');
app.set('view engine', 'ejs');

//app all 
app.all('*', requireAuthentication) //Authenticationلكل الصفحات يحتاج 
app.all('/grades/*', requireAuthentication)//Authentication --gradesلكل الصفحات الي بعد مسار----  

//app enable تمكين خاصية
app.enable('trust proxy');
console.log(app.enabled('trust proxy'));

//app disable تعطيل خاصية
app.disable('trust proxy');
console.log(app.disabled('trust proxy'));


//Requset

//req.body recive data from (form or ...) 
//req.params recive data from url الرابط
app.get('/:name', (req,res)=>{ //:name تعني انه بيتم تعبيته في ريكوست
res.send('your name is: ' + req.params.name);
})



//Response

//res.redirect تنقلك لصفحة اخرى او صفحة خارجية


//res.render استقبال ريكوست وتوجيهه على ملف معين في المشروع

//res.send  HTML استقبال ريكوست ثم ترد عليه والرد يكون نهائي ماتتنفذ بعدها دالة ومداك ترسل مصفوفة او 

//res.status   http status code 404 403
res.status(404).send("sorry page not found")



//Router

//router.use (Entity) سنتعرف في هذا الدرس على طريقة إنشاء مسار خاص لكل كيان  من المشروع.
const router = require('express').Router,
UserRoutes = require("./user"),
CourseRoutes = require('./course')

router.use('/users', UserRoutes);
router.use('/course', UserRoutes);


//router.all like (app.all)
router.all('*', requireAuthentication, loaduser)

app.listen(3000)