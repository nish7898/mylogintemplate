module.exports = function(mongoose){
    var configDataBase = "YOUR_DATABASE_LINK";
    mongoose.connect(configDataBase);
}