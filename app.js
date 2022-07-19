const firebaseConfig = {
    apiKey: "AIzaSyDr98OIMo6OuBRgVBHnO1Fv48lKOkXX26M",
    authDomain: "aly-137-fbf04.firebaseapp.com",
    projectId: "aly-137-fbf04",
    storageBucket: "aly-137-fbf04.appspot.com",
    messagingSenderId: "983100320011",
    appId: "1:983100320011:web:43c2ab72720981ea709a0e",
    measurementId: "G-K4RT2FBGB7"
  };


  firebase.initializeApp(firebaseConfig);

  function verificaLogin(){
    
    var verificacao = document.getElementById('verifiedEmail');
    verificacao = verificacao.textContent;

    var idGoogle = document.getElementById('sub');
    idGoogle = idGoogle.textContent;

    var nomeGoogle = document.getElementById('given_name');
    nomeGoogle = nomeGoogle.textContent;

    var emailGoogle = document.getElementById('email');
    emailGoogle = emailGoogle.textContent;

    var picGoogle = document.getElementById('picture');
    picGoogle = picGoogle.src;

    var nomeCompletoGoogle = document.getElementById('fullName');
    nomeCompletoGoogle = nomeCompletoGoogle.textContent;
    
    
    if(verificacao=="true"){ 

        let bd = firebase.firestore();
        let data = new Date();
        

        bd.collection("usuaries").doc('$idGoogle').get().then(function(doc){

        if(doc.exists){


            console.log("USUÁRIO EXISTE");
        

    }else{
        const user = firebase.firestore().collection("login");

        const novoLogin = {
        idGoogle: idGoogle,    
        nomeGoogle: nomeGoogle,
        nomeCompletoGoogle: nomeCompletoGoogle,
        emailGoogle: emailGoogle,
        picGoogle: picGoogle,
        data: data,
        };

        user.add(novoLogin);

        console.log("Não existe!");
    }

});



        
    

               
    }
}