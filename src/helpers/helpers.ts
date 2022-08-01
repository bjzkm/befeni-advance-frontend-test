function shortenFabricID(fabricId : number) {
   if(fabricId > 10000) {
       var firstDigit = fabricId.toString()[0];
       switch (firstDigit) {
           case '1':
               return fabricId % 10000;
           case '2':
               return 'T' + (fabricId % 20000);
           case '3':
               return 'K' + (fabricId % 30000);
       }
   }
   return fabricId;
};

export { shortenFabricID }