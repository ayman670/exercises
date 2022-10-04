/*


use DATABASE_NAME   use blog 
ولعرض قاعدة البيانات المستخدمة حاليًا يتم استخدام الأمر (db).
show dbs    show databases
use blog 
db.dropDatabase()






collection التعامل مع 
db.collectionName.operation({})    operation insertOne
db.createCollection(name, options)

use blog
>db.createCollection("users")

show collections
db.collectionName.drop()
db.users.drop()








Documents التعامل مع 

عمليات الإنشاء (create operations)
CRUD
insertOne({})
insertMany({},{},{})

داخل المجموعة (One document)النوع الأول يستخدم لإنشاء صف واحد  .

طريقة بناء جملة الإنشاء لصف واحد هي كالتالي
db.collection.insertOne({})

db.users.insertOne(  //users أوالمجموعة collection
{name:"ali",    age:22,  email:"ali2020@gmail.com" }) //  document البيانات داخل الصف أو


db.collection.insertMany([{},{},{}])

db.users.insertMany([
{name:"ahmed",age:19,email:"ahmed@gmail.com"},
{name:" rashed",age:20,email:"rashed@gmail.com"},
{name:"fahad",age:18,email:"fahad@gmail.com"}
])












(Find operations) عمليات الاسترجاع أو قراءة محتوى الصف 

db.collection.findOne()
db.collection.find()

findOne
(Filter) هذه العملية تقوم بإرجاع صف واحد يطابق المعايير المحددة 
 وإذا توفر أكثر من صف بنفس المعيار تقوم بإرجاع أول صف تراه في قاعدة البيانات فقط.


db.users.findOne()
db.users.findOne({name:"ahmed"},{age:1})
db.collection.findOne({filter},{projection})
db.users.findOne({name:"ahmed"},{age:1,_id:0})
الرقم 0 فإننا نخفي البيانات والعكس عندما نستخدم 1 فإننا نستعرض المعلومة الخاصة بهذا الحقل <---Projection


db.collection.findMany({filter},{projection})

db.users.find().pretty()
Users كما هو واضح في المثال أعلاه قمنا باستخدام الأمر بدون أي معايير أو تحديد للحقول وقام بإرجاع كافة الصفوف الموجودة في  
 فقط لترتيب طريقة العرض ولكن يمكن الاستغناء عنها ()pretty

db.users.find({age:18},{name:1 ,_id:0})














عمليات التحديث (Update operations)


db.users.updateOne({ filter } , { update })

db.users.updateOne( 
{ name : "Nasser"} , //filter
{ $set : {age : 31} } //update
)


لتعديل أكثر من صف.
db.users.updateMany(
{name : "Nasser"} , //filter
{$set : {age : 31} } //update
)



updateMany() لإضافة حقل جديد لجميع الصفوف الموجودة في الجدول:
db.users.updateMany(
{}, //filter
{$set : {city : "Riyadh"} }
)

استخدامات أُخرى لعملية ()updateMany:
db.users.updateMany(
{name : "Nasser"} ,
{$inc : {age : 1} } //increment by 1
)
بهذهِ الطريقة ستتم “الزيادة” بعدد 1 على
 age لجميع الصفوف التي تحتوي على “ name: “Nasser وذلك بسبب استخدام inc$ بدلًا من set$ حيث أن set$ تُستخدم لوضع قيمة مختلفة. بينما inc$ تستخدم للزيادة على القيمة الحالية.

db.users.updateMany(
{name : "Nasser"} ,
{$inc : {age : -2} } 
)



db.users.replaceOne( {name: "fai" }, {x: 2 , y: 4 } )










عمليات الحذف (Delete operations)
()deleteOne
()deleteMany

db.users.deleteOne({ name: "ali"})

db.users.deleteMany({city : "Makkah" })



لحذف فقط قيمة من حقل ما،
db.users.updateMany( {name : "mohammed"}, {$unset:  { city: " " }} )



























Aggregation
قوم عمليات Aggregation بمعالجة سجلات البيانات وإرجاع النتائج المحسوبة، كما تقوم عمليات Aggregation بتجميع القيم من مستندات متعددة معًا، ويُمكنها تنفيذ مجموعة متنوعة من العمليات على البيانات المجمعة لإرجاع نتيجة واحدة.


طريقة Aggregation pipeline.
طريقة Map-reduce function.
طريقة Single purpose aggregation method.


Aggregation pipeline
db.orders.aggregate([
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])




*/