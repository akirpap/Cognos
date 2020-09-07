var sessionCode
var session
const CognosApi = require('./CognosApi');
const router = require("express").Router();
//const params = require("../params");
const fs = require("fs");


  // Crear la sesión 
  const request = require('request');
  router.get('/', async(req,res) => {
    const options = {
        url: 'https://dde-us-south.analytics.ibm.com/daas/v1/session',
        auth: {
            username: 'ad268f8a-395b-4b83-85b3-662c5ca4a842',
            password: '854ca8cd3cd8346cfcfa502201fa8c767a38b262',
        },
        timeout: 5000
    };

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
        this.sessionCode = body;
       
    });
      
    res.send (sessionCode)

    // Inicializar la sesión
    
  /*  this.api = new CognosApi({
      cognosRootURL: 'https://us-south.dynamic-dashboard-embedded.cloud.ibm.com/daas/',
      sessionCode: session,
      initTimeout: 10000,
      node: document.getElementById(
        'ddeDashboard') 

   }); 
    
   await this.api.initialize();
 */

});

module.exports = router;