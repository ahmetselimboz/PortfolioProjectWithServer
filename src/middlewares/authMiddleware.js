const oturumAcilmis = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{

        res.redirect('/admin/login');
    }
}

const oturumAcilmamis = function(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }else{
        
        res.redirect('/admin/homepage');
    }
}

module.exports ={
    oturumAcilmis,
    oturumAcilmamis
}