 function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function(obj){
           return goodUsers.some(function(validobj){
                return obj.id===validobj.id;
           });
        });
};}

module.exports = checkUsersValid