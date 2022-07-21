const firebaseConfig = {
  apiKey: "AIzaSyCFp02SalV1tohrf6QtVBK2ocPFWl4N9LM",
  authDomain: "teste-aa015.firebaseapp.com",
  projectId: "teste-aa015",
  storageBucket: "teste-aa015.appspot.com",
  messagingSenderId: "99960275074",
  appId: "1:99960275074:web:e2923f7e34a0c0c18c749b"
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

       console.log("LOGIN EFETUADO!");
   }

});



       
   

              
   }
};
