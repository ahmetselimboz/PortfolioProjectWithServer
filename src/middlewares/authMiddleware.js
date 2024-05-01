const oturumAcilmis = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{

        res.redirect('/login');
    }
}

const oturumAcilmamis = function(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }else{
        
        res.redirect('/homepage');
    }
}

module.exports ={
    oturumAcilmis,
    oturumAcilmamis
}